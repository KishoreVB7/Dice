const area = document.getElementById("area")
const player1 = document.getElementById("player1")
const player2 = document.getElementById("player2")
const otp = document.getElementById("otp")
const btn = document.getElementById("btn")
const dice = [[5],[1,9],[1,5,9],[1,9,3,7],[1,3,5,7,9],[1,3,4,6,7,9]]

btn.addEventListener("click", clicked)

function clicked(){
    let rollnums = [roll(6),roll(6)]
    let temp;
    if(rollnums[0] == rollnums[1]){
        temp = "Draw"
    }else if(rollnums[0] > rollnums[1]){
        temp = "Player 1 Wins"
    }else{
        temp = "Player 2 Wins"
    }
    otp.innerText = temp
    update(player1,rollnums[0])
    update(player2,rollnums[1])
}

function update(el,num){
    let holder = builder(num)
    if(el.children[0]){
        el.children[0].remove()
    }  
    el.appendChild(holder)
}

function roll(n){
    let num = Math.floor(Math.random() * n) + 1
    return num
}

function builder(n){
    let div = document.createElement("div")
    let dieArray = dice[n-1]
    for(let x =1; x < 10; x++){
        let dot = document.createElement("div");
        dot.setAttribute("class","dot")
        if(dieArray.includes(x)){
            dot.classList.add("black")
        }
        div.appendChild(dot)
    }
    div.setAttribute("class","dice")
    return div
}