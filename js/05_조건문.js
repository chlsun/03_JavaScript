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