input.onButtonPressed(Button.A, function () {
    radio.sendString(" ROXXANNNEEEE")
})
radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
radio.setGroup(1)
