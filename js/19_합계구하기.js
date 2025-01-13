
const container = document.querySelector(".container");
const addBtn = document.querySelector("#add");
const calcBtn = document.querySelector("#calc");


calcBtn.addEventListener("click", ()=>{
  const rows = document.querySelectorAll(".container > .row");

  // 계산 버튼이 클릭되는 시점에 존재하는
  // .input.number 요소를 모두 얻어와
  // 작성된 값의 합계를 구해서 출력하기
  let sum = 0;
  for(let row of rows){
    sum += Number(row.firstElementChild.value);
  }
  alert("합계 : " + sum);
});

addBtn.addEventListener("click", ()=>{
  // div요소 생성
  const div = document.createElement("div");
  div.className = "row"

  // input요소 생성
  const input = document.createElement("input");
  input.className = "input-number";
  input.type = "number";

  // span요소 생성
  const span = document.createElement("span");
  span.className = "remove-row";
  span.innerHTML = "&times;" // HTML 특수 문자는 innerHTML 사용

  /* 만들어진 span(x버튼) 요소에 이벤트 리스너 추가 */
  span.addEventListener("click", (e) => {
    // e.target : 클릭된 요소(x버튼)
    e.target.parentElement.remove();  // 한 줄(.row) 제거
  })

  /* ***************************************************** */

  // div, input, span을 알맞게 조립
  div.append(input, span);

  // 조립된 div를 container의 마지막 자식으로 추가
  container.append(div);
});
