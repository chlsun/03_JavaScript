const container = document.querySelectorAll(".container");
const boxes = document.querySelectorAll(".box");
const inputColor = document.querySelectorAll(".color-input");

for(let i=0; i<container.length; i++){
  inputColor[i].addEventListener("keyup", (e)=>{
    boxes[i].style.backgroundColor = inputColor[i].value;
  });
}


// radio 버튼 + change 이벤트

// * change 이벤트 :
//  input에 작성된 값 또는 체크박스/라디오 체크 여부가 변했을 때
const radio = document.getElementsByName("opacity-btn");

for(let i=0; i<radio.length; i++){
  radio[i].addEventListener("change", (e)=>{
    // e : 이벤트 객체(이벤트 관련 졍보가 담겨있음)
    /* console.log(e); */

    // radio 버튼은 체크 X -> 체크 O
    // change 이벤트가 감지된다

    // e.target : 이벤트가 발생한 요소

    // 체크된 라디오 버튼의 value를 얻어오기
    /* console.log(e.target.value); */

    let opacity = e.target.value;

    /* 향상된 for문
      - 배열에 저장된 모든 요소를 순차 접근하는 용도의 for문
      - 순차 접근 상황이 빈번히 발생하여 작성법을 간단하게 변화

      [for of 구문]
      for(let 변수명 of 배열명){}

      - for문이 반복될 때 마다 배열 내 요소를 0번 부터 하나씩
        꺼내서 of 앞에 변수에 대입하는 for문
    */
    for(let box of boxes){
      // for문이 반복 될 때 마다 boxes[0] ~ boxed[4] 까지
      // 1개씩 차례대로 box 변수에 대입
      box.style.opacity = opacity;
    }
  });
}