let i = 1;
// const checkBox = document.getElementById("cb").innerText;
// console.log(checkBox);
// const classNameText = document.getElementById(className).innerHTML;
function playerMark(className) {
    const classNameText = document.getElementById(className).innerHTML;
    if (classNameText == ""){
        if (i % 2) {
            document.getElementById(className).innerHTML = "X";
        } else {
            document.getElementById(className).innerHTML = "O";
        }
        i++;
    }
    else{}
    // document.getElementById(className).innerHTML = "X";
    // "X" = gameArray
}
function resetGame() {
    // document.getElementsByClassName("checkbox").innerText = "";
    // console.log("e")
    location.reload()
}
// let gameArray=[
//     {
//         topLeft:    "",
//         topMiddle:  "",
//         topRight:   "",
//     },
//     {
//         middleLeft: "",
//         middleMiddle:"",
//         middleRight:"",
//     },
//     {
//         bottomLeft: "",
//         bottomMiddle:"",
//         bottomRight:"",
//     },
// ]
// console.log(gameArray[0].topLeft);