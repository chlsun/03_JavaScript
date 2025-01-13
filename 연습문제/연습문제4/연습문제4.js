const startBtn = document.querySelector("#startBtn");

const userBtn = document.querySelectorAll(".btn:not(#startBtn)");

const winTh = document.querySelector("#winCount");
const drawTh = document.querySelector("#drawCount");
const loseTh = document.querySelector("#loseCount");

const userImg = document.querySelector("#user");
const comImg = document.querySelector("#com");

const gameHistory = document.querySelector("#gameHistory");


let computer = 0;

let gameCount = 0;

let winCount = 0;
let loseCount = 0;
let drawCount = 0;

winTh.innerText = winCount;
drawTh.innerText = drawCount;
loseTh.innerText = loseCount;

let userclick = '';

let comclick = '';

startBtn.addEventListener("click", ()=>{
  gameCount = Number(prompt("진행할 판 수를 입력하세요"));

  if(gameCount === 0){
    alert("숫자 입력 후 확인을 눌러주세요");
    return;
  }

  computer = Number(Math.floor(Math.random() * 3 + 1));

  winCount = 0;
  loseCount = 0;
  drawCount = 0;

  winTh.innerText = winCount;
  drawTh.innerText = drawCount;
  loseTh.innerText = loseCount;
  
  userImg.src = '';
  comImg.src = '';

  userclick = '';

  comclick = '';

  gameHistory.innerHTML = '';
  
}); 

for(let btn of userBtn){
  btn.addEventListener("click", (e)=>{

    if(gameCount < 1){
      alert("게임이 종료 되었습니다. 다시 하시려면 GAME START 버튼을 눌러주세요");
    
      return;
    }
    
    userclick = e.target.innerText;

    switch(computer){
      case 1: comclick = '가위'; break;
      case 2: comclick = '바위'; break;
      case 3: comclick = '보'; break;
    }

    userImg.src = `images/${userclick}L.png`;
    comImg.src = `images/${comclick}R.png`;

    const li = document.createElement("li");
    const span = document.createElement("span");

    if(comclick === userclick){
      drawCount++;
      span.className = "drow";
      span.innerText = "drow"

    }else if(userclick === '가위'){
      switch(comclick){
        case '바위': 
          loseCount++; 
          span.className = "lose";
          span.innerText = "lose"
          break;
        case '보':
          winCount++; 
          span.className = "win";
          span.innerText = "win"
          break;
      }
    }else if(userclick === '바위'){
      switch(comclick){
        case '보': 
          loseCount++; 
          span.className = "lose";
          span.innerText = "lose"
          break;
        case '가위': 
          winCount++; 
          span.className = "win";
          span.innerText = "win"
          break;
      }
    }else if(userclick === '보'){
      switch(comclick){
        case '가위': 
          loseCount++; 
          span.className = "lose";
          span.innerText = "lose"
          break;
        case '바위': 
          winCount++; 
          span.className = "win";
          span.innerText = "win"
          break;
      }
    }

    li.append(span);
    li.innerHTML += `<span>${userclick}</span> VS <span>${comclick}</span>`; 
    gameHistory.prepend(li);
    winTh.innerText = winCount;
    drawTh.innerText = drawCount;
    loseTh.innerText = loseCount;

    computer = Number(Math.floor(Math.random() * 3 + 1));

    gameCount--;
  })
}