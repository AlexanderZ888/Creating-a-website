var currentPlayer = "O";
var won = false;
function place(box) {
    if(box.innerText != "" || won) return;
    box.innerText = currentPlayer;
    currentPlayer == "O" ? currentPlayer = "X" : currentPlayer = "O";
    checkGameBoard();
}

function checkGameBoard() {
    for(var i = 0; i <= 2; i++) {   
        checkWinner(document.getElementById(i + "_0").innerText,
            document.getElementById(i + "_1").innerText,
            document.getElementById(i + "_2").innerText);
        checkWinner(document.getElementById("0_" + i).innerText,
            document.getElementById("1_" + i).innerText,
            document.getElementById("2_" + i).innerText);
    }
         checkWinner(document.getElementById("0_0").innerText,
             document.getElementById("1_1").innerText,
             document.getElementById("2_2").innerText);
        checkWinner(document.getElementById("0_2").innerText,
            document.getElementById("1_1").innerText,
            document.getElementById("2_0").innerText);
     
    var firstD1 = document.getElementById("0_0").innerText;
    var secondD1 = document.getElementById("1_1").innerText;
    var thirdD1 = document.getElementById("2_2").innerText;

    if(firstD1 != "" && firstD1 == secondD1 && secondD1 == firstD1 && firstD1 == thirdD1) {
        alert("Победитель!");
    }
    function checkWinner(first, second, third) {
        if(first != "" && first == second && first == third) {
            alert("Победитель!")
            won = true;
        }
    }
}
  




