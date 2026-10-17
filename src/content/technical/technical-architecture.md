---
title: "Technical Architecture"
description: "The hardware and software behind DuneBroom: edge AI vision, the mechanical sieving assembly, drive system, and power design."
---

The DuneBroom robot was engineered using a modular hardware stack defined by specific performance constraints. The system is organized into four functional subsystems.

## Power System

A high-capacity battery serves as the central power source, distributing power to the motor control module and the Raspberry Pi. The power budget was calculated to sustain continuous autonomous operation for **over 1 hour** on a single charge.

## High-Level Processing

This subsystem handles the computationally intensive tasks required to classify objects in front of the robot as nature versus trash.

### Raspberry Pi 5

Serves as the robot's primary computer. Executes the YOLOv8 ML model to classify objects as "trash" or "nature". Makes high-level navigation decisions and sends commands via serial connection to the Arduino.

### Webcam

Connected directly to the Raspberry Pi. Captures a high-resolution image only when triggered, providing the visual data necessary for the ML model to differentiate between trash and natural elements.

## Low-Level Control

This subsystem manages real-time sensor data and hardware protocols.

### Arduino Microcontroller

Acts as the hardware interface. Manages real-time input/output by reading data from the ultrasonic distance sensors and sending signals to the motor control module and the scooper's servo motor.

### Distance Sensors

Ultrasonic sensors connected to the Arduino continuously monitor the path for obstacles within a 3-inch range. These sensors serve as the hardware "trigger" that wakes the vision system.

### Motor Control Module

An intermediate driver that interprets signals from the Arduino and uses power from the battery to control the motors.

## Actuators

This subsystem converts electrical signals into physical motion to navigate and clean the beach.

### Drivetrain Motors

High-torque DC motors operating between 200-300 RPM. These motors drive a tank-tread chassis designed to maintain traction on soft sand while achieving a speed of approximately 2 km/hr.

### Servo Motor (Scooper Lift)

Controls the vertical articulation of the custom 3D-printed scooper. Lowers the mechanism to collect identified trash and raises it to avoid drag or navigate over natural obstacles.
