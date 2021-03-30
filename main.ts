let noise = 0
pins.servoWritePin(AnalogPin.P0, 0)
basic.forever(function () {
    noise = smarthome.ReadNoise(AnalogPin.P2)
    if (noise > 60) {
        pins.servoWritePin(AnalogPin.P0, 0)
        basic.pause(2000)
        pins.servoWritePin(AnalogPin.P0, 100)
        basic.pause(500)
    }
})
