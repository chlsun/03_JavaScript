/** if 예제 - 양수인지 검사 */
function check1(){
    // id가 "input1"인 요소를 얻어와 in1 상수에 저장
    const in1 = document.getElementById("input1");

    // id가 "input1"인 요소에 작성된 값을 얻어와 숫자로 변환하여
    // val 변수에 저장
    const val = Number(in1.value);

    // 양수가 맞는지 검사
    if(val > 0){
        alert(`${val} 은/는 양수 입니다.`);    //alert : 브라우저 알림창 띄우기
    }
    
    // 양수가 아닌 경우
    if(val <= 0){
        alert(`${val} 은/는 양수가 아닙니다.`);
    }
}

/** 1 ~ 100사이의 난수를 발생 시켜 홀/짝 판별하기 */
function check2(){

    // 난수 발생 : Math.random();
    // 0.0 <= 난수 < 1.0

    // 1 ~ 100 사이 난수 발생

    // Math.random() * 100 + 1;

    // 내림 처리 : Math.floor(실수);

    const randomNumber = Math.floor(Math.random() * 100 + 1);

    // 발생된 난수가 홀수인지 검사
    if(randomNumber % 2 === 1){
        alert(`${randomNumber}는 홀수 입니다`);
    }else{
        alert(`${randomNumber}는 짝수 입니다`);
    }
}

function whileCheck2(){
    const CONSNUM = 100;
    let randomNum;

    let i = 0;
    let j = 0;
    while(true){
        randomNum = Math.floor(Math.random() * 100 + 1);
        i++;
        console.log(`${randomNum}`);

        if(randomNum == CONSNUM){ ++j }
        else{ j = 0 }

        if(j >= 2){ break; }
        
    }
    
    console.log(`숫자 ${CONSNUM}을 연속 2번 찾기 위해 총 ${i}번 돌았습니다`)
}

/** 양수, 음수, 0 판별기 */
function check3(){
    const input3 = document.getElementById("input3");

    const val = Number(input3.value);

    let result; //결과를 저장할 변수 선언 (현재 undefined)
    
    if(val > 0){
        result = "양수";
    }else if(val < 0){
        result = "음수";
    }else{
        result = "0";
    }

    alert(`${val}은/는 ${result} 입니다`);
}


function ageCheck(){
    const input = document.getElementById("inputAge");

    const age = Number(input.value);
    let result;


    if(age < 0 || age > 120){
        
    }else if(age <= 13){
        result = "어린이";
    }else if(age <= 19){
        result = "청소년";
    }else{
        result = "성인";
    }
    
    alert(`${result ? result + "입니다." : "잘못 입력 하셨습니다."}`);
}


function ageCheck2(){
    const input = document.getElementById("inputAge");

    const age = Number(input.value);
    let result;

    if(age < 0 || age > 120){
        result = "잘못 입력 하셨습니다.";
    }else if(age <= 13){
        result = "어린이";
    }else if(age <= 19){
        result = "청소년";
    }else{
        result = "성인";
    }

    alert(result);
}

// input 요소에 작성된 값 얻어오기 : input요소.value
// html 요소에 작성된 내용 얻어오기 : html요소.innerText
function check4(){
    const inputA = document.getElementById("inputA");
    const inputB = document.getElementById("inputB");

    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);



    //"string".length : 문자열의 길이 반환
    if(inputA.value.length === 0 || inputB.value.length === 0){
        alert("입력 되지 않은 값이 존재합니다");
        return; // 함수를 즉시 종료하고 호출한 곳으로 돌아감
    }else if(v1 < v2){
        alert("A가 B보다 작습니다");
        return;
    }

    if(v1 % v2 === 0){
        alert(`${v1}은 ${v2}의 배수가 맞습니다`);
        return;
    }

    alert(`${v1}은 ${v2}의 배수가 아닙니다`);
}

function check5(){
    const input = document.getElementById("input5");
    const value = Number(input.value);

    if(input.value.length === 0){
        alert("숫자를 입력해주세요");
        return;
    }

    let result; //결과 저장용 변수수
    switch(value){
        case 3: 
            result = "3이 입력 되었습니다.";
            break;
        case 4: 
            result = "입력된 숫자는 4입니다";
            break;
        case 5: 
            result = "5를 입력하셨습니다.";
            break;
        default : result = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다.";
    }

    alert(result);

    // switch문 -> if else문으로 변경

    let result2;
    if(value === 3){
        result = "3이 입력 되었습니다.";
    }else if(value === 4){
        result = "입력된 숫자는 4입니다";
    }else if(value === 5){
        result = "5를 입력하셨습니다.";
    }else{
        result = "3,4,5 가 아닌 다른 숫자가 입력 되었습니다.";
    }

    alert(result2);
}

//매개 변수(Parameter)
// - 함수가 호출될 때 전달된 값(전달 인자, Argument)을 저장하기 위한 변수

/** switch 문을 이용한 계산기기 */
function calc(op){
    console.log(op);

    const input1 = document.getElementById("number1");
    const input2 = document.getElementById("number2");

    if(input1.value.length === 0 || input2.value.length === 0){
        alert("숫자를 모두 입력 해주세요");
        return;
    }

    const num1 = Number(input1.value);
    const num2 = Number(input2.value);

    let result;

    switch(op){
        case "+" : 
            result = num1 + num2;
            break;
        case "-" : 
            result = num1 - num2;
            break;
        case "*" : 
            result = num1 * num2;
            break;
        case "/" : 
            result = num1 / num2;
            break;
        case "%" : 
            result = num1 % num2;
            break;
        default :
            result = "잘못된 연산자";
            break;  
    }

    document.getElementById("calcResult").innerText = result;

}

/** 입력 받은 월(달)의 알맞은 계절 출력(break; 관련 예제) */
function check6(){
    const input6 = document.getElementById("input6");

    if(input6.value.length === 0){
        alert("월(달)을 입력해 주세요");
        return; 
    }

    // break(멈추다) : 현재 case까지만 해석하고 switch문을 멈춤

    // -> break 미작성 시
    //   현재 case 수행 후 멈추지 않고 다음 case를 연달아서 수행
    //   (break 또는 switch 끝 } 를 만날 때 까지 계속 연달아 수행)

    let result;
    switch(Number(input6.value)){
        // case 3,4,5 :     // Java만 사용 가능(JS 안됨)

        case 3: case 4: case 5: result = "봄"; break;

        case 6: case 7: case 8: result = "여름"; break;

        case 9: case 10: case 11: result = "가을"; break;

        case 12: case 1: case 2: result = "겨울"; break;

        default : result = "잘못 입력";
    }

    alert(result);
}
