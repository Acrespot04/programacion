input.onButtonPressed(Button.A, function () {
    radio.setGroup(14)
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(0)
})
radio.onReceivedString(function (receivedString) {
    if (receivedString == "GUILLERMO") {
        basic.showString("OK")
        music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    }
})
input.onButtonPressed(Button.B, function () {
    radio.setGroup(13)
    radio.sendString("AITANA")
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.play(music.tonePlayable(880, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    basic.clearScreen()
})
