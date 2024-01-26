let i = 1;
function playerMark(className) {
    if (i % 2) {
        document.getElementById(className).innerHTML = "X";
    } else {
    document.getElementById(className).innerHTML = "O";
    }
    i++;
    // document.getElementById(className).innerHTML = "X";
    // "X" = gameArray
}

let gameArray=[
    {
        topLeft:    "",
        topMiddle:  "",
        topRight:   "",
    },
    {
        middleLeft: "",
        middleMiddle:"",
        middleRight:"",
    },
    {
        bottomLeft: "",
        bottomMiddle:"",
        bottomRight:"",
    },
]
console.log(gameArray[0].topLeft);