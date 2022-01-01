const area = document.getElementById("area")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const otp = document.getElementById("otp")
const btn = document.getElementById("btn")

btn.addEventListener("click", clicked)

function clicked(){
    let vals = [roll(6),roll(6)]
    player1.innerHTML = vals[0]
    player2.innerHTML = vals[1]
    if (vals[1] === vals[0]){
        otp.innerHTML = "Draw"
    } else if(vals[0] > vals[1]){
        otp.innerHTML = "Player 1 wins"
    }else{
        otp.innerHTML = "Player 2 Wins"
    }
    console.log()
}

function roll(n){
    let num = Math.floor(Math.random() * n) + 1
    let dnum = 9855 + num;
    let char = "&#" + dnum
    return char
}