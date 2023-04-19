input.onButtonPressed(Button.A, function () {
    if (index == 25) {
        index = 0
    } else {
        index += 1
        basic.showString("" + (text_list[index]))
    }
})
input.onButtonPressed(Button.AB, function () {
    name = "" + name + text_list[index]
})
input.onButtonPressed(Button.B, function () {
    if (index == 0) {
        index = 25
    } else {
        index += -1
        basic.showString("" + (text_list[index]))
    }
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Hello!")
    basic.showString(name)
})
let name = ""
let index = 0
let text_list: string[] = []
text_list = [
"a",
"b",
"c",
"d",
"e",
"f",
"g",
"h",
"i",
"j",
"k",
"l",
"m",
"n",
"o",
"p",
"q",
"r",
"s",
"t",
"u",
"v",
"w",
"x",
"y",
"z"
]
basic.showString("Enter name")
index = 0
name = ""
basic.showString("" + (text_list[0]))
basic.forever(function () {
	
})
