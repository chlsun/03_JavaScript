const startBtn = document.querySelector("#startBtn");
const resetBtn = document.querySelector("#resetBtn");
const randomBtn = document.querySelector("#randomBtn");

const numberPad = document.querySelector(".numberPad");

let randLoop;

startBtn.addEventListener("click", ()=>{
  startBtn.classList.add('hidden');
  resetBtn.classList.remove('hidden');
  randomBtn.classList.remove('hidden');

  for(let i=1; i<=45; i++){
    const div = document.createElement("div");
    div.className = "num";
    div.textContent = i;
    div.addEventListener("click", (e)=>{
      const checkNum = document.querySelectorAll(".active");

      if(checkNum.length >= 6){
        alert("6개까지만 선택이 가능합니다");
        return;
      }

      e.target.classList.add("active");
    });

    numberPad.append(div);
  }
});

randomBtn.addEventListener("click", ()=>{
  const numbers = document.querySelectorAll(".num");

  const ranTime = Math.floor(Math.random() * 2990 + 11);

  

  randLoop = setInterval(()=>{
    let numList = [];

    for(let number of numbers){
      number.classList.remove("active");
    }
    
    for(let i=0; i<6; i++){
      let randNum = Number(Math.floor(Math.random() * 45));

      if(numList.includes(randNum)){
        console.log(numList, randNum);
        i--;
        continue;
      }

      numList.push(randNum);
      numbers[randNum].classList.add("active");
    }

  }, 100);

  setTimeout(()=>{
    clearInterval(randLoop);
  }, ranTime);
  
});

resetBtn.addEventListener("click", ()=>{
  const numbers = document.querySelectorAll(".num");

  for(let number of numbers){
    number.classList.remove("active");
  }
});



