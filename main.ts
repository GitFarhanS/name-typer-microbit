input.onButtonPressed(Button.A, function () {
    if (index == 26) {
        index = 0
    } else {
        basic.showString("" + (text_list[index]))
        index += 1
    }
})
input.onButtonPressed(Button.AB, function () {
    name = "" + name + text_list[index]
})
input.onButtonPressed(Button.B, function () {
    if (index == 0) {
        index = 26
    } else {
        basic.showString("" + (text_list[index]))
        index += -1
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
index = 0
name = ""
basic.forever(function () {
	
})
