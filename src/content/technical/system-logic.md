---
title: "How a survey works"
description: "How DuneBroom surveys a beach plot: calibrated downward imaging, YOLOv8 debris detection, phase-correlation ground tracking, and lane logic that counts every item exactly once to report trash density in items/m²."
---

DuneBroom doesn't pick trash up. It drives a plot of sand in parallel lanes, photographs the ground ahead of its tracks, and reports how many pieces of debris are there per square meter. The whole survey runs on the rover. It needs no internet connection and nobody has to count items by hand.

## Calibration

Before any survey, the camera is calibrated with objects of known size at heights between 25 and 50 cm. Calibration fixes how much ground each image covers and how many pixels make up a centimeter. The chosen height balances two needs: making 5 mm debris visible and covering enough ground per image. That height then stays fixed for every test.

## Driving the lanes

The rover covers a plot, such as a 3 m × 3 m test area, in parallel lanes driven in the same direction. It turns around outside the plot. Lane spacing is set so the tracks only roll over ground the camera has already imaged. That way the rover never disturbs debris in a lane it hasn't surveyed yet.

## Capture and detection

As the rover moves, the Raspberry Pi 5 captures images from the downward-facing camera and runs a debris detector fine-tuned from YOLOv8 on each one. The model is trained to separate litter such as plastic fragments, bottle caps, wrappers and foam from shells, rocks, seaweed and twigs. It aims to find items down to 5 mm across.

## Counting each item once

Consecutive images overlap, and neighboring lanes share an edge. A naive count would record the same bottle cap several times. DuneBroom prevents this in two steps:

### Measuring ground shift

Phase correlation in OpenCV compares each image with the one before it to measure how far the ground moved between frames.

### New-ground strips and lane bands

Only detections centered in the strip of ground that is new in this frame, and inside the current lane's band, are counted. An item that shows up in three overlapping images is counted once, in the first image where it appears.

Each counted item is logged with its size, type and position, and each new strip is added to the running total of surveyed area.

## Results

When the last lane is done, the rover computes **density = unique items ÷ surveyed area** in items/m². It saves the counts, the density estimate and a detection map showing where each item was found.
