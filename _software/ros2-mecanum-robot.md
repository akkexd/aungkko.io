---
title: ROS2 Mecanum Robot
meta: "2025–2026 · ROS2 · Python · C++ · Nav2 · EKF · AMCL · LiDAR · RealSense"
tags: [ROS2, Nav2, mecanum, sensor-fusion]
links:
  - label: Code
    url: https://github.com/akkexd/ros2-mecanum-robot
  - label: Paper
    url: https://doi.org/10.31224/7347
---

A ROS2 Jazzy autonomous navigation stack for a mecanum-wheel robot running on Raspberry Pi 5. The system integrates LiDAR, depth sensing, encoder feedback, IMU data, EKF fusion, Nav2 planning/control, and custom goal-management logic for high-friction carpet navigation.

## Highlights

- Built full ROS2 bringup and navigation stack.
- Integrated EKF state estimation under wheel slip.
- Configured AMCL, NavFn, DWB, and Nav2 behavior tree navigation.
- Implemented deadzone compensation for low-speed carpet motion.
- Designed multi-phase goal management for doorway traversal and reliable route execution.
