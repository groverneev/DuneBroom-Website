---
title: "Technical architecture"
description: "The hardware and software behind DuneBroom: a tracked rover with a downward-facing camera on a forward boom, a Raspberry Pi 5 running YOLOv8 debris detection onboard, and an Arduino for motor control, all for under $350."
---

DuneBroom is built to be cheap and simple to copy. The rover, camera, computer and electronics are budgeted at **under $350** in total, and all survey processing runs onboard.

## Chassis and camera mount

### Tracked chassis

An off-the-shelf tracked chassis with two DC motors. Tracks spread the rover's weight on soft sand. The chassis is the only part carried over from the earlier version of DuneBroom.

### Mast and boom

A PVC mast rises from the front of the chassis, and a boom reaches forward from it. A USB camera hangs from the end of the boom, facing straight down. This puts the camera's field of view ahead of the tracks, so debris is photographed before the rover can drive over it or move it. The camera height can be adjusted during calibration and is then fixed somewhere between 25 and 50 cm.

## Onboard computing

### Raspberry Pi 5

The Raspberry Pi 5 is the rover's main computer. It does image capture, ground-shift measurement, debris detection, duplicate removal, density calculation and data logging, and it sends drive commands to the Arduino over USB serial. Camera resolution, model input size and image tiling are tuned so 5 mm debris stays visible without slowing processing too much.

### Arduino

The Arduino runs the motor-control firmware. It takes commands from the Pi and drives the left and right track motors through a motor driver board.

## Debris detection model

### Why a trained detector

Simple rule-based image processing can't reliably tell varied litter apart from shells, rocks and seaweed. A YOLO object detector finds every object in an image in a single pass, which is fast enough to run on the rover. At least two YOLOv8 model sizes and input resolutions are compared to find the best balance of small-item recall and speed on the Pi.

### Training data

The model is fine-tuned from pretrained YOLOv8 weights. It is trained on TACO, a public labeled litter dataset, plus at least 500 images taken by DuneBroom's own camera of debris and natural objects on sand. Debris is labeled with bounding boxes in Roboflow, and natural objects are left unlabeled.

### Keeping evaluation honest

Self-collected images are split into training and validation sets by capture session. Every image used to test the design criteria comes from separate sessions with new debris layouts and is never used for training or tuning.

## Software stack

- **Onboard:** Python, OpenCV, NumPy and pySerial; Ultralytics YOLOv8 with an inference runtime optimized for the Pi 5
- **Analysis:** Pandas and Matplotlib
- **Firmware:** Arduino IDE
- **Training:** done on a separate laptop. Only the finished model runs on the rover.
