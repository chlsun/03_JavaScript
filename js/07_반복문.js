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

function check17(){
    for(let i = 1; i<=3; i++){
        let result = '';

        for(let j = 1; j<=4; j++){
            result += j;
        }

        console.log(result);
        console.log('');
    }
}

function check18(){
    for(let i = 1; i<=4; i++){
        let result = '';

        for(let j = 1; j<=5; j++){
            result += j;
        }

        console.log(result);
        console.log('');
    }
}

function check19(){
    for(let i = 1; i<=3; i++){
        let result = '';

        for(let j = 6; j>=1; j--){
            result += j;
        }

        console.log(result);
        console.log('');
    }
}

function check20(){
    for(let i = 1; i<=5; i++){
        let result = '';

        for(let j = 1; j<=i; j++){
            result += j;
        }

        console.log(result);
    }
}

function check21(){
    for(let i = 3; i<=7; i++){
        let result = '';

        for(let j = 3; j<=i; j++){
            result += j;
        }

        console.log(result);
    }
}

function check22(){
    for(let i = 1; i<=3; i++){
        let result = '';

        for(let j = 1; j<=i; j++){
            result += '*';
        }

        console.log(result);
    }
}

function check23(){
    const input = document.getElementById("inputNum23");

    if(input.value.length === 0){
        alert("숫자를 입력해주세요");
        return;
    }

    const valNum = Number(input.value);

    // 입력된 숫자가 0 이하일 경우
    if(valNum <= 0){
        alert("0보다 큰 수를 입력하세요");
        return;
    }

    for(let i = 1; i<=valNum; i++){
        let result = '';

        for(let j = 1; j<=i; j++){
            result += '*';
        }

        console.log(result);
    }
}


function check24(){
    for(let i = 4; i >= 1; i--){
        let result = '';

        for(let j = 1; j <= i; j++){
            result += '*';
        }

        console.log(result);
    }
}

function check25(){
    let count = 0;
    for(let i = 1; i <= 30; i++){
        if(i % 4 === 0){
            count++
        }
    }

    alert(`1부터 30 사이의 정수 중 4의 배수 ${count}개 입니다`);
}

function check26(){
    const val = Number(document.getElementById("input26").value);

    let count = 0;

    for(let i = 1; i <= 100; i++){
        if(i % val === 0){
            count++
        }
    }

    alert(`1부터 100 사이의 정수 중 ${val}의 배수 ${count}개 입니다`);
}

function check27(){
    let count = 1;

    for(let i=1 ; i<= 3 ; i++){

        let result = '';

        for(let j=1 ; j<=4 ; j++){
            // result += count++ + ' ';
            result += `${count++} `;
        }

        console.log(result);
    }
}

function check28(){
    let sum = 0;
    let val;

    while( (val = prompt("숫자 입력(취소 클릭 시 종료)")) !== null){
        // promprt 
        //  -> 확인 클릭 : 입력한 내용 반환
        //  -> 취소 클릭 : null 반환

        sum += Number(val);
    }

    alert(`합계 : ${sum}`);
}


function check29(){
    const gimbap = 4000;
    const ramen = 4500;
    const donkkaseu = 9000;

    let gCount = 0;
    let rCount = 0;
    let dCount = 0;

    let total = 0;

    let val;

    while(val !== null){
        val = prompt("메뉴 번호 입력(1.김밥 2.라면 3. 돈까스)");

        switch(val){
            case "1" : gCount++; break;
            case "2" : rCount++; break;
            case "3" : dCount++; break;
            case null : alert("주문 완료!"); break;
            default: alert("잘못 입력 하셨습니다");
        }
    }

    let outputHtml = '';

    if(gCount > 0){
        outputHtml += `<li>김밥(${gCount}개) : ${gimbap * gCount}</li>`
    }

    if(rCount > 0){
        outputHtml += `<li>라면(${rCount}개) : ${ramen * rCount}</li>`
    }

    if(dCount > 0){
        outputHtml += `<li>돈까스(${dCount}개) : ${donkkaseu * dCount}</li>`
    }

    const sum = (gimbap * gCount) + (ramen * rCount) + (donkkaseu * dCount);

    outputHtml += `<li>합계 : ${sum}원</li>`

    const output = document.getElementById("result29");
    output.innerHTML = outputHtml;
}