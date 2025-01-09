/** class를 이용한 요소(DOM 객체) 접근 방법 */
function classTest(){

    /* 유사 배열이란?
      배열 처럼 index, length를 제공하지만
      배열 전용 함수(메서드)를 제공하지 않음
     */

    // class 속성 값이 "cls-test"인 요소를 모두 얻어와
    // (유사)배열 형태로 반환 
    const divs = document.getElementsByClassName("cls-test");
    console.log(divs);

    // divs에 저장된 요소를 하나씩 순차 접근
    for(let i=0; i<divs.length; i++){
      // 각 요소에 작성된 내용 얻어와 콘솔에 출력
      console.log(divs[i].innerText);

      divs[i].style.backgroundColor = divs[i].innerText;
    }
}

/** 배경색 초기화(흰색) */
function classInit(){
  const divs = document.getElementsByClassName("cls-test");

  for(let i=0; i<divs.length; i++){
    divs[i].style.backgroundColor = "white";
  }
}

function classTest2(){
  // "cls-input" 클래스를 가지는 요소를 모두 얻어와 저장
  const inputs = document.getElementsByClassName("cls-input");

  // 합계를 저장할 변수 선언
  let sum = 0;

  for(let i = 0; i<inputs.length; i++){
    // 각 요소(input)에 작성된 값을 얻어와
    // number 타입으로 변환하여 sum에 누적

    sum += Number(inputs[i].value);
  }

  document.getElementById("sumResult").innerText = sum;
}


function tagNameTest(){

  // 문서 내에 존재하는 모든 li 태그 선택
  const lists = document.getElementsByTagName("li");

  for(let i = 0; i<lists.length; i++){
    // 각 요소에 저장된 값을 얻어와 rgb 변경에 이용

    // li 요소에 작성된 내용을 숫자로 변환
    const num = lists[i].innerText;

    lists[i].style.backgroundColor = `rgb(240, 0, ${num * 20} )`;
  }
}


function nameTest(){
  const hobbyList = document.getElementsByName("hobby");


  let content = ''; // 화면에 출력할 내용을 누적할 변수
  let count = 0; // 체크된 체크박스의 개수를 세기위한 변수

  for(let i=0; i<hobbyList.length; i++){

    // 체크박스.checked -> 체크 여부를 true/false로 반환
    // console.log(hobbyList[i].checked);

    if(hobbyList[i].checked === true){
      // 체크박스의 vlaue 속성 값 얻어와 출력하기
      console.log(hobbyList[i].value);

      count++;  // count 1 증가
      content += `${hobbyList[i].value} `; // 내용 누적
    }
  }

  content += `<br><br>선택된 취미 개수 : ${count}`;

  const div = document.getElementsByClassName("name-result");

  div[0].innerHTML = content;
}

/** css 선택자를 이용한 요소 접근 */
function cssTest(){
  // target-div 속성 값이 css-div인 요소 하나 선택
  const container = document.querySelector("[target-div = css-div]");

  // 요소가 얻어져 왔는지 확인
  console.log(container);

  container.style.width = "200px";
  container.style.height = "200px";
  container.style.border = "10px solid orange";

  // document.querySelector("css선택자")
  // -> 여러 요소가 선택된 경우 "첫번쨰" 요소만 얻어옴

  const first = document.querySelector("[target-div = css-div] > div");

  // 첫 번째만 선택되었는지 확인
  console.log(first);
  first.style.color = "red";
  first.style.fontSize = "30px";


  // document.querySelectorAll("css선택자")
  // -> 모든 요소를 선택해서 (유사)배열로 형태로로 반환
  const divs = document.querySelectorAll("[target-div = css-div] > div");

  console.log(divs);

  const colors = ['yellow', 'pink'];

  for(let i=0; i<divs.length; i++){
    divs[i].style.height = "50%";
    divs[i].style.display = "flex";
    divs[i].style.justifyContent = "center";
    divs[i].style.alignItems = "center";
    divs[i].style.backgroundColor = colors[i];
  }

}



function readValue(){
  const chat = document.getElementById("chattingBg");
  // chat.innerHTML = '';
  const inputVal = document.querySelector("#chattingInput > #userInput");

  // 1) 입력된 값이 없을 경우
  //    - 아무 값도 입력 X
  //    - 작성된 내용이 공백 문자(띄어쓰기, 탭, 엔터)만 있을 경우
  
  // * 문자열.trim() : 문자열 좌우 공백 제거
  if(inputVal.value.trim().length === 0){
    alert("채팅 내용을 입력 해주세요");

    inputVal.value = ""; // 입력된 공백을 모두 제거

    inputVal.focus(); // inputVal 요소에 초점을 맞춤
    return;
  }

  /* 입력된 값을 읽어와 채팅 화면에 누적 */
  chat.innerHTML += `<p><span>${inputVal.value}</span></p>`;

  inputVal.value = '';

  // input 요소에 inputVal 유지
  inputVal.focus();

  /* 채팅 화면의 스크롤을 제일 아래로 이동 */

  // 요소.scrollHeight
  //  -> 스크롤되어 가려진 부분까지 포함한 요소 전체 높이 

  // 요소.scrollTop
  //  -> 스크롤 제일 위에서 부터 현재 위치 

  // 요소.scrollTop = 값;
  //  -> 스크롤을 위헤서 지정된 값 만큼 떨어진 위치로 이동

  // 스크롤을 제일 아래로 이동
  chat.scrollTop = chat.scrollHeight;
}


// #userInput인 요소에 "Enter" 키가 입력 된 경우 채팅 추가
document.querySelector("#userInput").addEventListener("keydown", (e)=> {
  console.log(e.key);
  if(e.key === "Enter"){
    readValue();  // 함수 호출
  }
})

// document.querySelector("#clickEvent").addEventListener("click", (e) =>{
//   readValue();
// })