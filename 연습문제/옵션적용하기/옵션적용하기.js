const btn = document.querySelector("#btn");
const fontWeights = document.querySelectorAll("#fontWeight input");
const box = document.querySelector("#box");


// const fw = document.querySelector("[name=fw]:checked");
// 이렇게 전역변수로 선언시
// 처음 HTML 로딩 시 체크된 요소가 없어서 null이 저장된 상태가 고정

let fw;
for(let i of fontWeights){
  i.addEventListener("change", (e)=>{
    fw = e.target.value;
  })
}
const rows = document.querySelectorAll("#row>input");
let row;
for(let i of rows){
  i.addEventListener("change", (e)=>{
    row = e.target.value;
  })
}
const cols = document.querySelectorAll("#col>input");
let col;
for(let i of cols){
  i.addEventListener("change", (e)=>{
    col = e.target.value;
  })
}

btn.addEventListener("click", ()=>{
  const width = document.querySelector("#width input");
  const height = document.querySelector("#height input");
  const fontSize = document.querySelector("#fontSize input");
  const color = document.querySelector("#color input");
  const backgroundColor = document.querySelector("#backgroundColor input");
  // const fw = document.querySelector("[name=fw]:checked");
  // :checked -> 체크된 요소만 선택(상태 선택자)
  
  const string = document.querySelector("#string input");
  if(width.value !== ''){
    box.style.width = `${Number(width.value)}px`;
  }
  if(height.value !== ''){
    box.style.height = `${Number(height.value)}px`;
  }
  if(fontSize.value !== ''){
    box.style.fontSize = `${Number(fontSize.value)}px`;
  }
  box.style.fontWeight = fw;
  box.style.color = color.value;
  box.style.backgroundColor = backgroundColor.value;
  box.style.justifyContent = row;
  box.style.alignItems = col;

  box.innerText = string.value;
});