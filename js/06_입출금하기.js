const output = document.getElementById("output");

const amount = document.getElementById("amount");

let balance = 10000;       
const password = '1234';

//  ㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡㅡ

// 함수 내부에 작성되지 않은 코드
// -> HTML 페이지 로딩(랜더링) 시
//   script 파일이 전체 해석되면서 같이 해석/수행 된다


output.innerText = balance;

// 금액 입력 input 태그의 value 값을 ""(빈칸)으로 변경
amount.value = "";  // input에 작성된 값을 삭제하는 효과

/** 연습용 함수 */
function test(){
    // prompt("내용")
    // - 알림창에 값을 입력할 수 있는 형태

    // - 확인 클릭 : 입력된 값 반환
    // - 취소 클릭 : null 반환
    const pw = prompt("비밀번호를 입력하세요");
}



function deposit(){
    const amountVal = Number(amount.value);

    if(amount.value.length === 0){
        alert("입금을 원하는 금액을 입력하고 다시 시도해주세요");
        return;
    }

    balance += amountVal;
    output.innerText = balance;
    alert(`${amountVal}원이 입금 되었습니다. 잔액 : ${balance}원`);
    amount.value = "";
}


function withdrawal(){
    const amountVal = Number(amount.value);

    const pw = prompt("비밀번호를 입력하세요");

    if(pw === null){
        alert("비밀번호 입력 취소");
        return;
    }
    if(pw !== password){
        alert("비밀번호가 일치하지 않습니다.");
        return;
    }

    if(amount.value.length === 0){
        alert("출금을 원하는 금액을 입력하고 다시 시도해주세요");
        return;
    }

    if(balance < amountVal){
        alert("출금 금액이 잔액보다 클 수 없습니다");
        amount.value = "";
        return;
    }

    
    balance -= amountVal;
    output.innerText = balance;
    alert(`${amountVal}원이 출금 되었습니다. 남은 잔액 : ${balance}원`);
    amount.value = "";
}