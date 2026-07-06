---
layout: page
title: Software
permalink: /software/
---

# Software

A selection of robotics, autonomous navigation, research software, and engineering projects. Most projects involve ROS, ROS2, mobile robot navigation, sensor integration, planning, control, embedded systems, or reproducible robotics experiments.

<!-- To add a project image, place it in /assets/img/ and add
     <img src="/assets/img/your-image.jpg" alt="..."> as the first child of the
     <article class="card"> element, then remove the "no-image" class. -->

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2025–2026 · ROS2 · PYTHON · C++</div>
    <h3>ROS2 Mecanum Robot</h3>
    <p>A ROS2 Jazzy autonomous navigation stack for a mecanum-wheel robot running on Raspberry Pi 5. The system integrates LiDAR, depth sensing, encoder feedback, IMU data, EKF fusion, Nav2 planning/control, and custom goal-management logic for high-friction carpet navigation.</p>
    <ul>
      <li>Built full ROS2 bringup and navigation stack.</li>
      <li>Integrated EKF state estimation under wheel slip.</li>
      <li>Configured AMCL, NavFn, DWB, and Nav2 behavior tree navigation.</li>
      <li>Implemented deadzone compensation for low-speed carpet motion.</li>
      <li>Designed multi-phase goal management for doorway traversal and reliable route execution.</li>
    </ul>
    <div class="tags">
      <span class="tag">ROS2</span>
      <span class="tag">Nav2</span>
      <span class="tag">mecanum</span>
      <span class="tag">sensor-fusion</span>
      <span class="tag">EKF</span>
      <span class="tag">AMCL</span>
    </div>
    <p><a href="https://github.com/akkexd/ros2-mecanum-robot">Code</a> · <a href="https://doi.org/10.31224/7347">Paper</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2026 · MECH · PYTHON · C++ · ROS2 · RASPBERRY PI 5</div>
    <h3>Reactive Dataflow Control for Mecanum Robot</h3>
    <p>A research case study integrating Mech 0.3.5 reactive dataflow into a mecanum-wheel robot control pipeline. The project benchmarks Mech against Python and C++ kinematics implementations and explores deterministic replay from logged robot commands.</p>
    <ul>
      <li>Built Mech from source on aarch64 Raspberry Pi 5.</li>
      <li>Implemented mecanum kinematics as an inspectable reactive dataflow computation.</li>
      <li>Designed latency and jitter measurement experiments.</li>
      <li>Compared Mech, Python, and C++ wheel-speed computation paths.</li>
      <li>Explored logged command replay for reproducible robotics debugging.</li>
    </ul>
    <div class="tags">
      <span class="tag">Mech</span>
      <span class="tag">reactive-dataflow</span>
      <span class="tag">benchmarking</span>
      <span class="tag">reproducibility</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2024 · ROS1 · TURTLEBOT3 · A* · SLAM</div>
    <h3>TurtleBot3 Warehouse Navigation</h3>
    <p>A ROS1 TurtleBot3 prototype for autonomous warehouse navigation and task execution. Developed during robotics R&amp;D internship work in Bangkok, Thailand.</p>
    <ul>
      <li>Implemented A*-based planning and obstacle-aware costmaps.</li>
      <li>Integrated TF, odometry, localization, and sensor pipelines.</li>
      <li>Developed an OpenCV stereo-vision pipeline for obstacle detection and localization.</li>
      <li>Tested warehouse aisle navigation and real-time obstacle avoidance behavior.</li>
    </ul>
    <div class="tags">
      <span class="tag">ROS1</span>
      <span class="tag">SLAM</span>
      <span class="tag">costmaps</span>
      <span class="tag">stereo-vision</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2024 · ROS · PYTHON · PATH PLANNING · RVIZ</div>
    <h3>A* Path Planning for TurtleBot3</h3>
    <p>An indoor path-planning project using A* search for TurtleBot3 navigation with obstacle avoidance and RViz visualization.</p>
    <div class="tags">
      <span class="tag">A*</span>
      <span class="tag">path-planning</span>
      <span class="tag">RViz</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2024 · INDUSTRIAL ROBOTICS · MECHANICAL DESIGN</div>
    <h3>Robot End-Effector Design with ABB IRB1200</h3>
    <p>A custom pen end-effector design for precise line-drawing tasks using an ABB IRB1200 industrial robot arm.</p>
    <div class="tags">
      <span class="tag">ABB IRB1200</span>
      <span class="tag">end-effector</span>
      <span class="tag">mechanical-design</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">2023–2024 · ASSISTIVE TECHNOLOGY · EMBEDDED SYSTEMS</div>
    <h3>Sensory Floor Mat for Pediatric Rehabilitation</h3>
    <p>A multisensory therapy platform with textured tiles and movement-based games designed for pediatric rehabilitation use.</p>
    <div class="tags">
      <span class="tag">assistive-tech</span>
      <span class="tag">embedded</span>
      <span class="tag">human-centered-design</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>

<article class="card no-image">
  <div class="card-content">
    <div class="meta">STM32 · EMBEDDED C/C++ · REAL-TIME CONTROL</div>
    <h3>Line Following Robot</h3>
    <p>An embedded STM32 robot with sensor-based line tracking and real-time control.</p>
    <div class="tags">
      <span class="tag">STM32</span>
      <span class="tag">embedded</span>
      <span class="tag">real-time</span>
    </div>
    <p><a href="https://github.com/akkexd">GitHub</a></p>
  </div>
</article>
