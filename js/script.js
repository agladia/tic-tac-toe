let board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]

let player = "O"

let cells = document.getElementsByClassName("cell")
let text = document.getElementById("text")

let gameEnd = false
initText()


function selectCell(index, cell)
{
    if(board[index] != " " || gameEnd == true)
    {
        return
    }

    board[index] = player
    if(player == "O")
        cell.innerHTML = "<i class='far fa-circle'></i>"
    else
        cell.innerHTML = "<i class='fas fa-times'></i>"

    checkForWin()  
    changePlayer()
}   

for (let i = 0 ; i < cells.length; i++)
{
    cells[i].onclick = function() {selectCell(i, cells[i])}
}

function changePlayer()
{
    if(player == "X")
        player = "O"
    else
        player = "X"

    if(gameEnd == false)
        text.innerHTML = "Player " + player + " turn"
}   

function checkForWin()
{
    if(board[0] == player && board[1] == player && board[2] == player
        || board[3] == player && board[4] == player && board[5] == player
        || board[6] == player && board[7] == player && board[8] == player
        || board[0] == player && board[3] == player && board[6] == player
        || board[1] == player && board[4] == player && board[7] == player
        || board[2] == player && board[5] == player && board[8] == player
        || board[0] == player && board[4] == player && board[8] == player
        || board[6] == player && board[4] == player && board[2] == player)
    {
        text.innerHTML = "PLAYER " + player + " WINS !!!"
        gameEnd = true
    }
}

document.getElementById("restart").onclick = restart

function restart()
{
    board = [" ", " ", " ", " ", " ", " ", " ", " ", " "]
    player = "X"
    initText()
    for (let i = 0 ; i < cells.length; i++)
    {
        cells[i].innerHTML = " "
    }
    gameEnd = false
}


function initText()
{
    text.innerHTML = "Player " + player + " starts"
}