/** 콘솔에 12345 출력하기 */
function check1(){
    for(let i = 1; i <= 5; i++){
        console.log(i);
        // [초기식] let i = 1;
        //  -> 1이 저장된 변수 i을 선언

        // [조건식] i < 5
        //  -> i 변수에 저장된 값이 5 이하면 true
        //    -> 반복 0 == for문 {} 내부 코드를 수행해라
        
        // [증감식] i++
        //  -> i 변수에 저장된 반복 때 마다 값을 1 증가
    }
}

function check2(){
    for(let i = 1; i <= 10; i++){
        console.log(i);
    }
}

function check3(){
    for(let i = 5; i <= 13; i++){
        console.log(i);
    }
}

function check4(){
    let result = '';
    for(let i = 1; i <= 7; i++){
        result += i;
    }
    console.log(result);
}

function check5(){
    let result = '';
    // result에 ""(빈칸)을 대입하는 이유
    //  -> 변수 선언 시 아무런 값도 대입하지 않으면 undefined
    //      -> undefined는 산술 연산의 대상이 될 수 없음
    //          -> 산술 연산을 수행하면 NaN(Not a Number) 결과가 반환됨
    for(let i = 4; i <= 11; i++){
        result += i;
    }
    console.log(result);
}

function check6(){
    let sum = 0; // 합계를 저장할 변수를 선언, 0을 대입

    for(let i = 1; i <= 10; i++){
        sum += i;
    }
    console.log(sum);
}

function check7(){
    const inputA = document.getElementById("input7a");
    const inputB = document.getElementById("input7b");

    const v1 = Number(inputA.value);
    const v2 = Number(inputB.value);

    if(v2 <= v1){
        alert("2번 숫자가 1번 숫자보다 같거나 크면 안됩니다");
        return;
    }

    let sum = 0;
    for(let i = v1; i <= v2; i++){
        sum += i;
    }

    alert(`${v1} 부터 ${v2} 사이 정수 합 : ${sum}`);
}

function check8(){
    let sum = 0;

    for(let i=1; i<=10; i+=2){
        console.log(i);
        sum += i;
    }
    console.log("합계 : ", sum);
}

function check9(){
    // 1) 증감식 변경
    let result = '';
    for(let i=3; i<=30; i+=3){
        result += i + " ";
    }
    console.log(result);

    // 2) for문 + if문
    let result2 = '';
    for(let i=1; i<=30; i++){
        if(i % 3 === 0){
            result2 += i + " ";
        }
    }
    console.log(result2);
}

function check10(){
    const input1 = document.getElementById("start10");
    const input2 = document.getElementById("end10");
    const input3 = document.getElementById("multiple10");

    const startNum = Number(input1.value);
    const endNum = Number(input2.value);
    const multipleNum = Number(input3.value);

    let sum = 0;
    let result = '';

    for(let i = startNum; i <= endNum; i++){
        if(i % multipleNum === 0){
            sum += i;
            result += i + ' ';
        }
    }

    console.log(result);
    console.log("합계 : ", sum);
}

function check11(){
    const NUM = 2;

    for(let i = 1; i <= 9; i++){
        console.log(`${NUM} x ${i} = ${NUM*i}`);
    }
}

function check12(){
    const inputDan = document.getElementById("input12");
    const resultDiv = document.getElementById("result12");

    if(inputDan.value.length === 0){
        alert("단을 입력 해주세요");
        return;
    }

    const dan = Number(inputDan.value);
    let result = "" ;

    if(2 > dan || dan > 9){
        alert("2 ~ 9단 사이만 입력 해주세요");
        inputDan.value = '';
        return;
    }

    for(let i = 1; i <= 9; i++){
        result += `<span>${dan} x ${i} = ${dan*i}</span><br/>`
        // console.log(`${dan} x ${i} = ${dan*i}`);
    }
    resultDiv.innerHTML = result;
}

function check13(){
    for(let i=10; i >= 1; i--){
        console.log(i);
    }
}

function check14(){
    for(let i=20; i >= 3; i-=3){
        console.log(i);
    }
}

function check15(){
    const NUM = 3;

    for(let i = 9; i >= 1; i--){
        console.log(`${NUM} x ${i} = ${NUM*i}`);
    }
}

function check16(){
    const resultDiv = document.getElementById("result16");

    let result = "";

    for(let i = 1; i <= 30; i++){
        if(i % 5 === 0){
            result += "@ ";
        }else{
            result += i + " ";
        }

        if(i % 10 === 0){
            result += "<br/>"
        }
    }

    resultDiv.innerHTML = result;
}