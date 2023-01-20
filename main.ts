let distance_to_object = 0
let strip: neopixel.Strip = null
input.onButtonPressed(Button.A, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
    if (distance_to_object > 30) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (distance_to_object < 10) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.clear()
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(392, music.beat(BeatFraction.Whole))
    if (distance_to_object > 30) {
        music.playTone(523, music.beat(BeatFraction.Whole))
    } else if (distance_to_object < 10) {
        music.playTone(131, music.beat(BeatFraction.Whole))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.clear()
    }
})
input.onButtonPressed(Button.B, function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    if (distance_to_object > 30) {
        music.playTone(659, music.beat(BeatFraction.Whole))
    } else if (distance_to_object < 10) {
        music.playTone(165, music.beat(BeatFraction.Whole))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.White))
        strip.show()
        strip.clear()
    }
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Blue))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Yellow))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Purple))
        strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Yellow))
        basic.pause(100)
        strip.shift(1)
        strip.show()
    }
    music.playMelody("E D G F B A C5 B ", 500)
    strip.clear()
})
basic.forever(function () {
    basic.showNumber(distance_to_object)
    music.setVolume(144)
    strip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
    distance_to_object = sonar.ping(
    DigitalPin.P1,
    DigitalPin.P2,
    PingUnit.Centimeters
    )
    if (distance_to_object <= 5) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 0)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 10) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 15) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 20) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 0)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 25) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 30) {
        pins.digitalWritePin(DigitalPin.P13, 0)
        pins.digitalWritePin(DigitalPin.P14, 0)
        pins.digitalWritePin(DigitalPin.P15, 1)
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    } else if (distance_to_object <= 35) {
        pins.digitalWritePin(DigitalPin.P13, 1)
        pins.digitalWritePin(DigitalPin.P14, 1)
        pins.digitalWritePin(DigitalPin.P15, 1)
        strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
        strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
        strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Blue))
        strip.show()
        strip.clear()
    }
    // This part adds an alarm if the distance read on the ultrasonic distance sensor is less than 5 cm
    if (distance_to_object == 3) {
        for (let index = 0; index < 8; index++) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            strip.clear()
            basic.pause(100)
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            strip.clear()
        }
        music.playMelody("C C5 C - C C5 C - ", 220)
    } else if (distance_to_object == 2) {
        for (let index = 0; index < 8; index++) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            strip.clear()
            basic.pause(50)
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            strip.clear()
        }
        music.playMelody("C C5 C - C C5 C - ", 300)
    } else if (distance_to_object == 1) {
        for (let index = 0; index < 8; index++) {
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
            strip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
            strip.show()
            strip.clear()
            basic.pause(10)
            strip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            strip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
            strip.show()
            strip.clear()
        }
        music.playMelody("C C5 C - C C5 C - ", 400)
    }
})
basic.forever(function () {
	
})
