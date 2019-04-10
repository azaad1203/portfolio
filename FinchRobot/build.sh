#!/bin/sh
LIBS=/home/pi/dev/BBTechSoftwareForPi/FinchJava
javac -classpath .:$LIBS/finch.jar FinchTest.java Forward.java Backward.java Left.java Right.java Kick.java Camera.java
