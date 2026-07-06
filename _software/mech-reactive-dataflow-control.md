---
title: Reactive Dataflow Control for Mecanum Robot
meta: "2026 · Mech · Python · C++ · ROS2 · Raspberry Pi 5 · Benchmarking"
tags: [Mech, reactive-dataflow, benchmarking, reproducibility]
links:
  - label: GitHub
    url: https://github.com/akkexd
---

A research case study integrating Mech 0.3.5 reactive dataflow into a mecanum-wheel robot control pipeline. The project benchmarks Mech against Python and C++ kinematics implementations and explores deterministic replay from logged robot commands.

## Highlights

- Built Mech from source on aarch64 Raspberry Pi 5.
- Implemented mecanum kinematics as an inspectable reactive dataflow computation.
- Designed latency and jitter measurement experiments.
- Compared Mech, Python, and C++ wheel-speed computation paths.
- Explored logged command replay for reproducible robotics debugging.
