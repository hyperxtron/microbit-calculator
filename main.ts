input.onButtonPressed(Button.A, function () {
    if (Switch == 0) {
        Switch += 1
        basic.showNumber(Number_1)
    }
    if (Switch) {
        Number_2 += 1
        basic.showNumber(Number_2)
    }
})
input.onButtonPressed(Button.AB, function () {
    OP += 1
    if (0 == 0) {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (OP == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                # # # # #
                . . . . .
                . . . . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            if (OP == 0) {
                basic.showLeds(`
                    # . . . #
                    . # . # .
                    . . # . .
                    . # . # .
                    # . . . #
                    `)
                basic.pause(100)
                basic.clearScreen()
            } else {
                if (OP == 0) {
                    basic.showLeds(`
                        . . # . .
                        . . . . .
                        # # # # #
                        . . . . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                } else {
                    OP = 0
                    basic.showLeds(`
                        . . # . .
                        . . # . .
                        # # # # #
                        . . # . .
                        . . # . .
                        `)
                    basic.pause(100)
                    basic.clearScreen()
                }
            }
        }
    }
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    Switch += 1
    if (Switch == 0) {
        if (OP == 0) {
            basic.showNumber(Number_1 + Number_2)
        } else {
            if (OP == 0) {
                basic.showNumber(Number_1 - Number_2)
            } else {
                if (OP == 0) {
                    basic.showNumber(Number_1 * Number_2)
                } else {
                    basic.showNumber(Number_1 / Number_2)
                }
            }
        }
    }
})
let Number_2 = 0
let Switch = 0
let Number_1 = 0
let OP = 0
OP = 0
Number_1 = 0
Number_1 = 0
Switch = 0
