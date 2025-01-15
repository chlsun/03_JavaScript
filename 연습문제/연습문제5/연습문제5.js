const keys = document.querySelectorAll(".keypad .key");
const showNumber = document.querySelector(".showNumber");

for(let key of keys){
  key.addEventListener("click", (e)=>{
    if(showNumber.textContent.length > 13){
      alert("13자 이상 입력 불가능");
      return;
    }
    showNumber.textContent += e.target.textContent;
  });  
}

const resetBtn = document.querySelector("#resetBtn");

resetBtn.addEventListener("click", ()=>{
  showNumber.textContent = '';
});

const rightContainer = document.querySelector(".rightContainer");
const appendBtn = document.querySelector("#appendBtn");

appendBtn.addEventListener("click", ()=>{

  const div = document.createElement("div");
  const span = document.createElement("span");
  const star = document.createElement("p");
  const remove = document.createElement("p");

  span.textContent = showNumber.textContent;
  star.textContent = '☆'
  star.addEventListener("click", (e)=>{
    if(e.target.textContent === '☆'){
      e.target.textContent = '★'
      e.target.style.color = "yellow";

      e.target.previousElementSibling.style.color = "red";
      return;
    }
    e.target.textContent = '☆'
    e.target.style.color = "black";
    e.target.previousElementSibling.style.color = "black";
    
  });
  remove.textContent = 'x';
  remove.addEventListener("click", (e)=>{
    e.target.parentElement.remove();
  });

  div.append(span, star, remove);
  rightContainer.append(div);
  showNumber.textContent = '';

});