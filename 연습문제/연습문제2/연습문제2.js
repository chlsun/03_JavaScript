const boxes = document.querySelectorAll(".numBox");

const result = document.querySelector("#result");


for(let box of boxes){
  box.addEventListener("click", (e)=>{
    result.append(Number(e.target.innerText));
  })
}

const removeBtn = document.querySelector("#remove");

const resultContainer = document.querySelector(".result-container");

removeBtn.addEventListener("click", ()=>{
  result.innerText = '';
});