const createBtn = document.querySelector("#create-btn");
const sumBtn = document.querySelector("#sum-btn");

const inputContainer = document.querySelector(".inputContainer");

sumBtn.addEventListener("click", () => {
  let sum = 0;
  const inputNums = document.querySelectorAll(".inputNum");

  for(let num of inputNums){
    sum += Number(num.value);
  }

  const result = document.querySelector("#result");
  result.innerText = sum;
});

createBtn.addEventListener("click", () => {
  const createNum = document.querySelector("#createNum");

  const inputboxes = document.querySelectorAll(".inputNum");
  for(let inputbox of inputboxes){
    inputbox.remove();
  }
  
  for(let i=0; i<Number(createNum.value); i++){
    const inputbox = document.createElement("input");
    inputbox.type = "number";
    inputbox.className = "inputNum";
    inputContainer.append(inputbox);
  }
});