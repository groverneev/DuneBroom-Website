---
title: "System Logic"
description: "How DuneBroom works end to end: autonomous patrol, event-driven debris identification, and discriminative actuation of the scooper-sieve system."
---

To achieve autonomous beach cleaning, the robot operates on a continuous decision-making loop designed to selectively target debris while actively ignoring natural elements. The system functions in an "Autonomous Patrol Mode," prioritizing energy efficiency and rapid reaction times to effectively cover large beach areas.

## Autonomous Patrol Mode

Upon activation, the robot enters its primary operational state, referred to as "Autonomous Patrol". In this mode, the robot continuously traverses the beach while maintaining a low-power surveillance state. The primary input comes from ultrasonic distance sensors that continuously poll the environment to detect the proximity of objects in the robot's path. This allows the robot to "watch" for potential targets without the heavy battery drain and computational cost of continuous video processing.

## Event-Driven Identification

The system shifts from "Patrol" to "Analysis" only when a physical object is detected within a specific range (approximately 3 inches). This detection acts as a hardware trigger to initiate the vision system:

### Visual Capture

The robot stops moving and captures a picture of the obstacle in front of it.

### Classification

A Machine Learning (ML) Model running on the robot analyzes the image to classify the object as either "Trash" (e.g., plastic bottles, wrappers) or "Nature" (e.g., rocks, seaweed).

## Discriminative Actuation

Based on the ML classification, the robot executes a specific physical response:

### Collection (Trash Detected)

If the object is classified as trash, the collection mechanism is lowered to scoop the item. As the robot resumes movement, a filtration system sifts out sand through a 2mm mesh while retaining debris in a storage bag.

### Preservation (Nature Detected)

If the object is classified as nature, the scooper remains raised, and the robot executes a navigation maneuver to go around the element, ensuring the ecosystem remains undisturbed.
