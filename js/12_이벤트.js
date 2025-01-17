
// 전달 인자(Argument) : 함수 호출 시 () 안에 작성하는 값
//                       함수 매개변수로 전달됨

// 매개 변수(Parameter) : 함수 정의 시 ()에 작성하는 변수
//                        호출 시 전달된 값을 저장

/** 인라인 이벤트 모델 확인 + this 확인 */
function check1(div){
  /* 클릭이 되면 클릭된 숫자를 버튼(div)에 출력 */

  // 1) 버튼에 작성된 내용 얻어오기
  let num = Number(div.innerText);

  // 2) 얻어온 내용이 숫자가 아닌 경우
  // isNaN(값) : 값이 NaN 인 경우 ture, 숫자면 false
  // Number(값) => 값에 숫자 아닌 문자열이 들어가면 NaN으로 반환
  if(isNaN(num)){
    div.innerText = 1;
    return;
  }

  // 3) 얻어온 내용이 숫자인 경우
  div.innerText = ++num; // 1씩 증가
}



/** 고전 이벤트 모델 확인 */
const testA = document.getElementById("testA");

/* 고전 이벤트 모델 작성법

  요소.이벤트리스너 = 이벤트 핸들러
*/
testA.onclick = function(){ 
  // testA 요소가 가지고 있는 onclick 변수 --> (이벤트 리스너)에 
  // function(){}을 대입 --> (이벤트 핸들러)

  /* 고전 이벤트 모델에서 this === 이벤트가 발생한 요소 */
  console.log(this);  
  alert("고전 이벤트 모델 확인됨");
}



/* 고전 이벤트 모델 제거 */
// #testB 버튼 클릭 시 #testA의 클릭 이벤트 핸들러 제거
const testB = document.querySelector("#testB");
testB.onclick = function(){
  // testA가 클릭 되었을 때의 동작(핸들러)을 null로 덮어씌움
  //  -> 이벤트 핸들러가 사라짐(제거)
  testA.onclick = null; 

  alert("확인 버튼 클릭 이벤트 핸들러 제거");
}




/* 고전 이벤트 모델 단점 확인 */
const testC = document.querySelector("#testC");

// onclick 이벤트 리스너에 이벤트 핸들러 대입
testC.onclick = function(){
  testC.style.backgroundColor = "pink";
}

// onclick 이벤트 리스너에 이벤트 핸들러 다시 대입(덮어쓰기)
testC.onclick = function(){
  testC.style.fontSize = "30px";
}


/** 표준 이벤트 모델
 * 클릭할수록 투명 + 클릭 횟수증가 */
const test1 = document.querySelector("#test1");

// 클릭할수록 투명
test1.addEventListener("click", ()=>{
  // click : 감지할 이벤트 종류
  // function(){} -> 이벤트가 감지 되었을 때 수행할 이벤트 핸들러

  // opacity : 불투명 정도를 설정하는 속성
  let current = test1.style.opacity;
  console.log("현재 투명도 : ", current); // 처음엔 "" (빈칸)

  if(current === ""){
    current = 1;
  }

  // 투명도가 0미만이 된 경우(완전히 투명해진 이후) 
  if(test1.style.opacity < 0){
    current = 1;
  }

  // 투명도를 0.05 감소
  test1.style.opacity = current - 0.05;
})

// 클릭 시 숫자 1씩 증가
test1.addEventListener("click", ()=>{
  // #test1에 작성된 내용 얻어와 숫자로 변경
  let num = Number(test1.innerText);

  // #test1에 num을 1 증가 시킨 값을 대입
  test1.innerText = ++num;
})


/* 버튼 배경색 변경 */

// querySelectorAll() -> 서낵자가 일치하는 요소를 모두 반환(배열)
const colorBtn = document.querySelectorAll(".btn-container > button");

const result2 = document.getElementById("result2");

for(let i=0; i<colorBtn.length; i++){
  colorBtn[i].style.backgroundColor = colorBtn[i].innerText;
  // 각 버튼에 클릭 되었을 때(이벤트 리스너)의 
  // 동작(이벤트 핸들러)을 추가

  colorBtn[i].addEventListener("click", ()=>{
    console.log(colorBtn[i].innerText);
    result2.style.backgroundColor = `${colorBtn[i].innerText}`;

    // result2.style.backgroundColor = `${this.innerText}`; 
    // 람다 함수로 접근 하면 this가 window를 가르킴 
    // => 그래서 안됨
    console.log(this);  
  });
}




/* 실습 문제 */

/*
  "변경하기" 버튼 클릭 시
  input 요소에 작성된 색상 값을 얻어와
  바로 위 .display 요소의 배경색 변경하기
 */
const changeBtn = document.querySelector("#changeBtn");
const boxDiv = document.querySelectorAll(".box");
const display = document.querySelectorAll(".display");
const inputColor = document.querySelectorAll(".inputColor");

/** button이 클릭 되었을때 한번에 변경 */
changeBtn.addEventListener("click", ()=>{
  for(let i=0; i<boxDiv.length; i++){
    display[i].style.backgroundColor = inputColor[i].value;
    inputColor[i].value = '';
  }
});

/** input태그에서 Enter가 눌렸을때 배경색 변경  */
for(let i=0; i<boxDiv.length; i++){
  inputColor[i].addEventListener("keydown", (e)=>{
    if(e.key === 'Enter'){
      display[i].style.backgroundColor = inputColor[i].value;
      inputColor[i].value = '';
    }
  });
}

/** input태그 안에 value값이 변경 될때마다 확인해서 배경색 변경 */
for(let i=0; i<boxDiv.length; i++){
  inputColor[i].addEventListener("input", (e)=>{
    display[i].style.backgroundColor = inputColor[i].value;
  })
};






