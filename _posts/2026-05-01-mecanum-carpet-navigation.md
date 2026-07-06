---
title: "Practical Navigation of a Mecanum-Wheel Robot on High-Friction Carpet"
subtitle: "Deadzone compensation, rotation asymmetry, and multi-phase goal management for ROS 2 Nav2"
date: 2026-05-01
author: "Aung Khant Ko"
tags: ["robotics", "ROS 2", "Nav2", "mecanum", "mobile robots", "sensor fusion", "robot navigation"]
repo: "https://github.com/akkexd/ros2-mecanum-robot"
preprint: "https://doi.org/10.31224/7347"
status: "Technical research note"
---

Mecanum-wheel robots are attractive for indoor robotics because they can move forward, backward, sideways, diagonally, and rotate in place. In simulation or on smooth lab floors, this looks elegant. On apartment carpet, the behavior is very different.

In this project, I built and tested a ROS 2 Jazzy mecanum robot on high-friction loop-pile carpet. The main issue was not only localization, planning, or mapping. The core problem was that standard velocity commands from Nav2 often produced motor commands that were too weak to overcome carpet static friction. The robot would receive valid `/cmd_vel` commands, but the wheels would not move reliably.

This post summarizes the most important engineering findings from the full research paper and implementation.

**Code:** [github.com/akkexd/ros2-mecanum-robot](https://github.com/akkexd/ros2-mecanum-robot)  
**Preprint:** [engrXiv DOI: 10.31224/7347](https://doi.org/10.31224/7347)

---

## System Overview

The experimental platform was a Yahboom ROSMASTER X3 mecanum robot running ROS 2 Jazzy on a Raspberry Pi 5. The robot used:

- RPLIDAR A1 for 2D laser scans
- Intel RealSense D435 for depth sensing
- onboard IMU and motor encoders
- `robot_localization` EKF for odometry fusion
- AMCL for global localization
- Nav2 with NavFn and DWB for planning and local control
- custom ROS 2 nodes for mecanum driver compensation and goal management

The test route was a real apartment route from bedroom to kitchen, approximately 14 meters long, including a narrow doorway and an L-shaped hallway.

---

## Problem 1: Carpet Creates a Motor Deadzone

On hard floor, the robot began moving at approximately PWM 20. On loop-pile carpet, the robot often did not move until PWM 35 or higher. This means the carpet deadzone was about 75% wider than the hard-floor deadzone.

This matters because Nav2’s DWB planner often outputs small velocity commands during careful indoor navigation. Those commands can map to motor PWM values around 15–30, which are valid mathematically but physically too weak on carpet.

The failure looks like this:

```text
Nav2 publishes /cmd_vel
        ↓
Mecanum inverse kinematics generates motor PWM values
        ↓
PWM is below carpet friction threshold
        ↓
Encoders report little or zero motion
        ↓
Robot appears stuck or oscillates
```

A standard navigation stack does not automatically know that the command is below the breakaway friction threshold.

---

## Solution 1: Proportional Deadzone Compensation

A naive solution would be to clamp each motor independently to a minimum value. However, that distorts the wheel-speed ratios that define a mecanum robot’s motion direction.

For example, a diagonal motion command may produce:

```text
[18, 30, 30, 18]
```

If each motor is independently clamped to 40, the result becomes:

```text
[40, 40, 40, 40]
```

That changes the intended direction.

Instead, I used proportional scaling. The driver checks the largest motor magnitude. If it is below the carpet threshold but nonzero, all motor commands are scaled by the same factor:

```python
m_max = max(abs(m1), abs(m2), abs(m3), abs(m4))

if 0 < m_max < MIN_MOTOR:
    scale = MIN_MOTOR / m_max
    motors = [round(m * scale) for m in motors]
```

So the same example becomes:

```text
Original:             [18, 30, 30, 18]
Proportional scaled:  [24, 40, 40, 24]
```

The direction ratio is preserved, but the command is strong enough to overcome carpet friction.

This was one of the most important improvements in the project because it allowed low-speed navigation commands to produce actual movement on carpet.

---

## Problem 2: Rotation Is Direction-Dependent on Carpet

A second failure appeared during in-place rotation. The robot did not rotate equally well clockwise and counterclockwise.

With the original 80 mm plastic mecanum wheels, counterclockwise rotation worked much better than clockwise rotation. In testing, counterclockwise rotation reached about 180 degrees in 10 seconds, while clockwise rotation often stalled around 22 degrees.

After upgrading to 100 mm TPU rubber mecanum wheels, the behavior changed. The rotation asymmetry was reduced, but it became less predictable. Some clockwise trials succeeded, while others still stalled.

The likely cause is the interaction between mecanum roller direction and carpet fiber grain. Carpet is not an isotropic surface. The friction depends on direction, roller material, and how the wheel contacts the fibers.

The important practical lesson is that wheel material alone does not solve carpet rotation. It changes the failure mode.

---

## Solution 2: IMU-Based Rotation Management

To handle rotation more reliably, I separated rotation from translation and used IMU feedback to track actual yaw change.

The rotation behavior used two stages:

1. **Kickstart:** a short high-power command to overcome static friction.
2. **Sustain:** a lower command after the robot begins rotating.

The Goal Manager monitors IMU yaw change. If the robot is commanded to rotate but the yaw does not change enough within a few seconds, the system treats it as a stall and applies another kickstart.

The simplified logic is:

```text
Start rotation
        ↓
Apply kickstart pulse
        ↓
Track yaw using IMU
        ↓
If yaw changes enough: continue
If yaw does not change: reapply kickstart
        ↓
Stop when target heading is reached
```

This made rotation more inspectable and recoverable than letting Nav2 continuously mix small angular commands with translation.

---

## Problem 3: Standard Nav2 Struggles in Narrow Doorways

The robot also struggled when moving through a 0.76 m doorway. With costmap inflation, the available free space becomes narrow. DWB can oscillate or produce cautious commands that are too small for carpet.

This is especially problematic for mecanum robots because sideways correction on carpet is unreliable. Small lateral commands can easily fall into the deadzone or create drift.

---

## Solution 3: Multi-Phase Goal Management

I implemented a supervisor node called **Goal Manager V4** above Nav2. Instead of sending a final goal directly to Nav2, the Goal Manager decomposes navigation into phases.

The architecture has three layers:

```text
Intention Layer
Goal Manager V4: waypoint routing, heading correction, doorway handling, stall recovery

Execution Layer
Nav2 + mecanum driver: path following, velocity generation, motor compensation

Verification Layer
Encoders + IMU + EKF + AMCL: actual motion and localization feedback
```

The Goal Manager intercepts user goals and decides whether the robot should use normal Nav2 navigation or a special doorway transit behavior.

For open navigation, the behavior is:

```text
Rotate to face next waypoint
        ↓
Drive using Nav2 with rotation disabled
        ↓
Repeat for next waypoint
```

For doorway transit, the behavior is:

```text
Stage before doorway
        ↓
Align with doorway heading
        ↓
Drive straight through at low speed using direct /cmd_vel
        ↓
Return control to Nav2
```

This approach keeps Nav2 unmodified. The supervisor adds environment-specific logic around Nav2 rather than replacing the navigation stack.

---

## Nav2 Configuration Change: Strafe-Only Local Planning

One important configuration decision was disabling angular velocity inside DWB:

```yaml
max_vel_theta: 0.0
```

This prevents Nav2 from constantly mixing small rotations into translation. All intentional rotation is handled by Goal Manager V4 instead.

For carpet, this phase separation was more reliable than asking DWB to solve translation and rotation at the same time.

---

## Results

Using the full system — proportional deadzone compensation, IMU-based rotation management, and Goal Manager V4 — the robot completed the bedroom-to-kitchen route successfully in 5 out of 5 trials.

The baseline Nav2-only setup failed. The robot oscillated or made little progress because many generated motor commands were below the carpet deadzone and because rotation/translation coupling was unreliable.

| Setup | Result |
|---|---:|
| Standard Nav2 only | Failed |
| Nav2 + deadzone compensation + Goal Manager V4 | 5/5 successful trials |

The successful route was approximately 14 meters and included a narrow doorway, hallway traversal, and a 90-degree turn into the kitchen area.

---

## Why This Matters

This project showed that some mobile robot navigation failures are not caused by high-level planning errors. They can come from low-level physical effects that are invisible to the planner.

On carpet, the planner may output a valid velocity command, but the robot may not physically move because the motors are below the static friction threshold. If the system only looks at the command and not the measured motion, the failure can be hard to debug.

The key idea is to close the loop between command, motor output, encoder feedback, IMU feedback, and localization. For real robots, especially low-cost mobile robots, this kind of verification layer is essential.

---

## Limitations

This was a single-platform study on one main carpet type. The deadzone threshold and rotation behavior may change with:

- carpet type and fiber density
- robot mass
- wheel diameter
- roller material
- battery voltage
- motor torque
- costmap parameters

The results are promising, but the parameters should not be treated as universal constants.

---

## Future Work

The next step is to make the system more adaptive. Instead of manually setting the deadzone threshold, the robot could estimate it online by comparing commanded velocity against encoder-measured velocity.

Other future improvements include:

- testing on low-pile carpet, high-pile carpet, carpet tile, and hard floor
- automatic surface classification using depth or vision
- adaptive motor compensation based on battery voltage and surface type
- bidirectional doorway transit
- replacing heuristic rotation thresholds with a surface-aware motion model

---

## Takeaway

For mecanum robots on carpet, reliable navigation requires more than a correct kinematic model. The robot needs actuator-aware compensation, IMU-verified rotation, and task-level supervision for constrained spaces.

The most useful design pattern from this project is:

```text
Do not modify Nav2 first.
Wrap Nav2 with a supervisor.
Compensate at the driver layer.
Verify motion with real sensor feedback.
```

That made the system easier to debug, easier to reproduce, and more compatible with the standard ROS 2 navigation stack.
