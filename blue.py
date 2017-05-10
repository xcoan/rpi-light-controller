import RPi.GPIO as GPIO
import time

GPIO.setwarnings(False)
GPIO.setmode(GPIO.BCM)
GPIO.setup(23, GPIO.OUT)

for i in range (0, 51):
	GPIO.output(23, True)
	time.sleep(1)
	GPIO.output(23, False)
	time.sleep(1)
