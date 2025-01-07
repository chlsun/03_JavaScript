function check1(){
    const stopNumber = Number(prompt("1~20 사이 멈추고 싶은 숫자 입력"));

    for(let i=1; i<=20; i++){
        console.log(i);
        if(i === stopNumber){
            break;
        }
    }
}

function check2(){

    let count = 1;
    while(true){
        console.log(count++);

        if(count > 100){
            break;
        }
    }
}


function check3(){
    // prompt에 취소가 입력 될 때 까지 숫자를 입력 받아
    // 합계 구하기
    let sum = 0;

    while(true){
        let val = prompt("숫자를 입력해주세요(취소 클릭 시 종료)");

        if(val === null){
            break;
        }

        sum += Number(val);
    }

    alert(`합계 : ${sum}`);
}

function check4(){

    for(let i = 1 ; i<=3 ; i++){
        let result = '';
        for(let j=1 ; j<=5 ; j++){
            result += j;

            if(j === 4){
                break; // 안쪽 for문에 작용
            }
        }
        console.log(result);
        console.log('');

        if(i === 2){
            break;
        }
    }
}

function check5(){
    // 1부터 20에서 1씩 증가하는 반복문을 이용해서 숫자 출력
    // 단, 3과 5의 배수는 건너뛰기

    for(let i=1; i<=20; i++){
        if(i%3 === 0 || i%5 === 0){
            continue;
        }
        console.log(i);
    }
}

function check6(){
    for(let i=1; i<=5; i++){

        let result = '';

        for(let j=1; j<=9; j++){

            if(j === i){
                continue;
            }

            result += j;
        }

        console.log(result);
    }

    console.log("------------------------------");

    // "문자열".replace("검색어", "바꿀단어")
    // -> 문자열 내에 검색어를 찾아서 "바꿀단어"로 변경
    for(let i=1; i<=5; i++){
        let str = "123456789";
        str = str.replace(i, '');
        console.log(str);
    }
}

function startGame(){
    let count = 0;
    let promptStr = "UP & DOWN 게임 시작!! 숫자를 맞춰봐요!!";

    // Math.floor(실수) -> 소수점 내림 처리(정수로 변함)   
    const answer = Math.floor(Math.random() * 200 + 1);

    while(true){

        let inputNum = prompt(promptStr);

        if(inputNum === null){
            alert(`${count}번째에서 포기 하셨습니다(정답:${answer})`);
                break; // 함수 종료
        }

        if(inputNum === ''){
            promptStr = "다시 입력해주세요";
            continue;
        }

        inputNum = Number(inputNum);
        if(inputNum < 0 || inputNum > 200){
            promptStr = "1 ~ 200 사이 숫자만 입력";
            continue;
        }

        count++;

        if(inputNum === answer){
            alert(`정답!!! ${answer} / 시도 횟수 : ${count}`);
            break;
        }

        if(inputNum !== answer && count > 7){
            alert(`7회 초과로 실패! (정답:${answer})`);
            break;
        }

        if(inputNum > answer){
            promptStr = `DOWN (현재${count}회)`;
        }

        if(inputNum < answer){
            promptStr = `UP (현재${count}회)`;
        }

        
    }

}