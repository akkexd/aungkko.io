---
layout: page
title: "About"
permalink: /about/
---

# About

I am a robotics software developer and computer science graduate with a background in robotics, autonomous mobile robots, embedded systems, and practical robot navigation. I am interested in dependable autonomy for resource-constrained cyber-physical systems — particularly the interface between high-level robot behavior and reliable execution on imperfect physical hardware. My work focuses on building robot systems that move reliably in real environments, not only in simulation.

<figure>
  <img src="{{ '/assets/img/aungko.jpeg' | relative_url }}" alt="Aung Khant Ko at the Global UGRAD alumni seminar in Kuala Lumpur, Malaysia" style="max-width: 360px; border-radius: 10px; border: 1px solid var(--border);">
  <figcaption>At the Global UGRAD alumni seminar in Kuala Lumpur, Malaysia.</figcaption>
</figure>

## Current Research — Mech Robotics Lab, Lehigh University

**Independent Research Collaborator, Mech Robotics Lab** · Jun 2026 – Present
Lehigh University, Department of Computer Science and Engineering, Bethlehem, PA · Supervisor: Prof. Corey Montella

I work on Mech, a Rust-native reactive runtime, for cyber-physical robot control — studying how robot control can stay dependable on resource-constrained hardware through bounded, predictable per-turn execution and runtime detection of actuator, perception, and environment-induced failures before they corrupt control.

- Investigating Mech v0.4 as a Rust-native reactive runtime for cyber-physical robot control, focusing on persistent state, capability-scoped device I/O, and transactional execution.
- Implemented native RPLIDAR A2 and odometry input hosts that feed typed sensor data into a resident Mech controller and support persistent robot state across reactive turns.
- Integrated a write-capable motor-command host and STM32 interface so Mech programs can issue body-twist commands while Rust handles fixed kinematics and non-bypassable safety interlocks.
- Demonstrated end-to-end real-sensor obstacle avoidance on a physical mecanum robot; a 300-turn run produced five LiDAR-triggered avoidance episodes with 300/300 commands delivered and no runtime safety rejections.
- Measured 2.65 ms median / 3.98 ms p95 sensor-to-command latency and 1.47 ms median / 2.00 ms p95 control-turn compute time at an approximately 10.9 Hz scan-driven cadence.
- Implemented reject-not-clamp runtime checks for command feasibility, freshness, finiteness, and input validity; characterized Mech's atomic validate-or-abort semantics across persistent state and actuation.
- Built an 84-test verification and hardware bring-up suite; hardware testing exposed a LiDAR minimum-range blind-zone failure that motivates explicit perception-validity guards.
- Co-authored the accepted IROS 2026 R4R Workshop paper on Mech's embedding and heterogeneous execution model.

## Earlier Research &amp; Experience

**Robust Mecanum Navigation on High-Friction Carpet** · Nov 2025 – May 2026
Self-Directed Research Project, Bethlehem, PA · Advisor: Dr. Denyse Lemaire, Rowan University

- Investigated model–hardware mismatch in omnidirectional navigation on loop-pile carpet using a physical ROS 2 Jazzy mecanum platform with LiDAR, depth sensing, wheel odometry, IMU, EKF fusion, and AMCL localization.
- Characterized an abrupt motor deadzone 75% wider on carpet than on laminate, and developed proportional vector scaling that overcomes static friction while preserving mecanum wheel-speed ratios.
- Quantified direction-dependent rotation asymmetry across 80 mm plastic and 100 mm TPU wheel configurations (an approximately 9× CW/CCW angular-velocity gap on plastic wheels).
- Designed Goal Manager V4, a supervisory finite-state architecture separating heading correction, Nav2 translation, stall recovery, and constrained doorway transit while preserving an unmodified Nav2 stack.
- Achieved 100% navigation success (5/5 trials) on an approximately 14 m multi-room route with autonomous doorway transit, where the Nav2-only baseline failed to make progress.
- Published as a sole-author engrXiv preprint, accepted as a Late-Breaking Result at IEEE/RSJ IROS 2026 and withdrawn prior to publication; an extended manuscript is in preparation for IEEE Robotics and Automation Letters (RA-L).

**Robotics (AI) Research and Development Intern — DHA Siamwalla Ltd.** · Apr 2024 – Sep 2024
Bangkok, Thailand · Supervisor: Opas Siamwalla (CEO)

- Researched autonomous mobile robots, sensor integration, and SLAM for warehouse automation.
- Built a TurtleBot3 ROS 1 prototype for autonomous warehouse navigation with A*-based planning, costmaps, and obstacle-aware path execution.
- Developed an OpenCV stereo-vision pipeline for obstacle detection and depth-based localization.
- Integrated TF, odometry, localization, and sensor pipelines for end-to-end robot autonomy.

## Honors, Awards &amp; Scholarships

- **Presidential Alumni Scholarship**, Thomas Edison State University (2026) — merit-based award for academic achievement.
- **UPG Sustainability Leader**, United People Global (2022) — competitive, fully funded sustainability leadership fellowship with United People Global (Geneva, Switzerland) and the Hurricane Island Center for Science and Leadership (Maine, USA); completed leadership training and an immersive, field-based pilgrimage on Hurricane Island.
- **Academic Merit — KMITL Visiting Student Program** (2023–2024) — selected as a visiting student in Robotics and Artificial Intelligence Engineering at King Mongkut's Institute of Technology Ladkrabang, Bangkok.
- **Global UGRAD Scholarship**, U.S. Department of State (2021) — competitive merit-based scholarship (Bureau of Educational and Cultural Affairs) for a one-semester academic exchange at West Virginia University; participated in WVU Experimental Rocketry.

See the [Certificates]({{ '/certificates/' | relative_url }}) page for the full record.

## Professional Activities

- **IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS 2026)** — Pittsburgh, PA, 2026. Conference volunteer and co-author of the accepted R4R Workshop paper, "Mech: A Rust-Native Embeddable Reactive Numerical Language for Heterogeneous Computing in Robotics."
- **Global UGRAD ASEAN Alumni Connections Seminar** — Kuala Lumpur, Malaysia, July 2024. Selected for a multi-day regional conference administered by World Learning and funded by the U.S. Department of State, bringing together Global UGRAD alumni from the ten ASEAN nations for professional development, leadership, and civic-engagement programming.

## Community &amp; Leadership

- **Country Representative, Global UGRAD Program** (West Virginia University, 2022–2023) — delivered cultural presentations to elementary- and middle-school audiences, introducing students to Myanmar's history and diversity.
- **Organizer, "Clean Your Closet" Campaign** (West Virginia University, 2023) — led a university-wide clothing-donation drive for communities in need in Myanmar.
- **Aspire Leaders Program** (Aspire Institute, founded at Harvard University) — completed a leadership-development program with case studies on education, healthcare, and community impact.

## Contact

For research collaboration, PhD advising interest, robotics software opportunities, or questions about my projects, please email me at [aungkko.edu@gmail.com](mailto:aungkko.edu@gmail.com).

You can also find my work on [GitHub](https://github.com/akkexd), [Google Scholar](https://scholar.google.com/citations?user=qfv_6t4AAAAJ&hl=en&authuser=1), and [LinkedIn](https://www.linkedin.com/in/aungkko/).
