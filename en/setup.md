---
title: Setup
json_ld:
  "@context": "https://schema.org"
  "@type": "Article"
  headline: "Technical setup"
  url: "https://maison-hina.com/en/setup"
  inLanguage: "en"
---

# Technical setup

## Nest box

The nest box is hand-built. The entrance hole is 28mm in diameter — the right size for Japanese tits but too small for sparrows. It's mounted under the roof of our car port.

After each nesting season, we remove the old nest material and sterilise the box with boiling water.

## Camera

We use a camera module with an OV5647 sensor and no infrared filter, so it can see inside the dark nest box. Maximum resolution is 2592×1944 pixels.

An infrared LED is mounted on each side of the lens, each on its own small circuit board that screws onto the camera board. Brightness is adjusted manually with a small screw on each LED. The LEDs give off a faint red glow, but birds can't see it so it doesn't disturb nesting.

The camera connects to the Raspberry Pi with a ribbon cable.

## Raspberry Pi

We use a Raspberry Pi 4 Model B (8GB RAM, ARM 64-bit).

The operating system is Raspberry Pi OS Lite "Trixie" (released December 2025, based on Debian 13). It's the lightweight version with no desktop environment.

## Software

Video capture is handled by `rpicam-vid`. For streaming we use [MediaMTX](https://github.com/bluenviron/mediamtx).

We considered motion detection software such as Motion, but it doesn't work well with the current OS (Trixie), so we don't use it.

## Streaming

The video stream runs over Wi-Fi on our local home network. We watch it at home. There is no external or public stream.

## Power and network

The Raspberry Pi is powered by mains electricity via a long cable running to the car port. Network connection is Wi-Fi.
