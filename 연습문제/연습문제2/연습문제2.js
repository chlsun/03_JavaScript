const boxes = document.querySelectorAll(".numBox");

const result = document.querySelector("#result");


for(let box of boxes){
  box.addEventListener("click", (e)=>{

    if(result.textContent.length  >= 10){
      alert("10자 까지만 입력할 수 있습니다");
      return;
    }
    result.append(Number(e.target.innerText));
  })
}

const removeBtn = document.querySelector("#remove");

const resultContainer = document.querySelector(".result-container");

removeBtn.addEventListener("click", ()=>{
  result.innerText = '';
});