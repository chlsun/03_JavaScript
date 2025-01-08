function check1(){

    // 배열 선언

    const arr1 = new Array();   // 0칸 배열

    const arr2 = new Array(3);  // 3칸 배열(요소 모두 비어있음)

    const arr3 = [];    // 0칸 배열

    const arr4 = ['사과', '딸기', '바나나']; // 3칸 배열 + 초기화 
                                             // 초기화 : 변수에 처음 값을 대입하는것

    // 배열 확인
    console.log(arr1);
    console.log(arr2);
    console.log(arr3);
    console.log(arr4);

    console.log(arr1.length);
    console.log(arr2.length);
    console.log(arr3.length);
    console.log(arr4.length);

    // 배열의 각 요소 접근 방법 : 배열명[index]
    console.log(`arr4[0] : ${arr4[0]}`);
    console.log(`arr4[1] : ${arr4[1]}`);
    console.log(`arr4[2] : ${arr4[2]}`);

    // 존재하지 않는 index번째 요소 접근
    console.log(`arr4[3] : ${arr4[3]}`);    // undefined

    // 배열 요소에 값 대입 : 배열명[index] = 값;
    // (여러 자료형 저장 가능 확인)
    arr2[0] = 123;
    arr2[1] = "27일은 임시공휴일";
    arr2[2] = true;

    // * 존재하지 않는 index에 값 대입 -> 가능? 불가능?
    arr2[3] = '하이';
    arr2[6] = '하이2';

    console.log(`arr2[0] : ${arr2[0]}`);
    console.log(`arr2[1] : ${arr2[1]}`);
    console.log(`arr2[2] : ${arr2[2]}`);

    // * 존재하지 않는 index에 값 대입 -> 가능!
    // + 배열 길이가 자동으로 증가
    console.log(`arr2[3] : ${arr2[3]}`);

    // 6번 인덱스 대입됨
    // + 건너뛴 4, 5번 인덱스가 비어있음 상태가 되어있음
    console.log(`arr2[6] : ${arr2[6]}`);

    console.log("arr2 : ", arr2);
}


function check2(){
    const weeks = ['월', '화', '수', '목', '금', '토', '일'];

    // weeks.length === 7
    // weeks의 시작 인덱스 번호 : 0
    // weeks의 마지막 인덱스 번호 : 6 === weeks.length - 1
    // index는 0 이상의 정수
    // index는 1씩 증가

    for(let i=0; i<weeks.length; i++){
        console.log(weeks[i]);
    }

    console.log("---------------");

    for(let i=weeks.length-1; i>=0; i--){
        console.log(weeks[i]);
    }
}


function check3(){
    /* prompt로 입력 받은 값을 배열 요소에 순차적으로 초기화 */

    const arr = new Array();

    for(let i=0; i<4; i++){
        arr[i] = prompt(`${i}번째 요소에 저장할 값 입력`);
    }

    console.log(arr); 
}

/*
    prompt를 이용해 숫자 5개를 입력 받아 배열에 저장한 후
    1) 저장된 값 출력
    2) 합계 출력
    3) 평균 출력
    4) 짝수(0,2,4) 번째 index 요소의 합계 출력
    5) 홀수(1,3) 번째 index 요소의 합계 출력
 */
function check4(){
    const arr = new Array(5);

    for(let i=0; i<arr.length; i++){
        arr[i] = Number(prompt(`${i}번째 요소에 저장할 숫자 입력`));
    }

    console.log(arr); // 확인

    let sum = 0;
    let oddSum = 0;
    let evenSum = 0;
    for(let i=0; i<arr.length; i++){
        sum += arr[i];

        if(i%2 === 0){
            evenSum += arr[i];
        }else{
            oddSum += arr[i];
        }        
    }

    console.log("합계 : ", sum);
    console.log("평균 : ", sum / arr.length);

    console.log("짝수 합계 : ", evenSum);
    console.log("홀수 합계 : ", oddSum);

}
/* 배열 길이를 입력 받아 배열을 생성하고 생성 배열 각 요소에 0~에서 배열 길이 미만의 난수를 저장장 */
function check5(){
    const len = Number(prompt("생성할 배열 길이 입력"));

    const arr = new Array(len);

    for(let i=0; i<len; i++){
        const num = Math.floor(Math.random() * arr.length);

        arr[i] = num;
    }

    for(let i=0; i<len; i++){
        console.log(arr[i]);
    }
}

function selectMenu(){
    const menus = [
        "알탕", "순대국", "칼국수", "쌀국수", "닭갈비", "찜닭", "햄버거", "샌드위치", "샐러드",
        "짬뽕", "라면", "김밥", "제육덮밥", "고등어 구이", "삼겹살", "돈까스", "백반", "우육면"
    ];

    const num = Math.floor( Math.random() * menus.length );

    const result = document.getElementById("menuResult");
    result.innerText = menus[num];
}

function createLottoNumber(){
    const output = document.getElementById("lotto");
    output.innerHTML = '';

    const lottoArr = new Array(6);

    for(let i=0; i<lottoArr.length; i++){
        const num = Math.floor(Math.random() * 45 + 1);

        console.log(num);
        
        // 배열.includes(값) : () 내 값이 배열에 존재하면 true, 없으면 false
        if(lottoArr.includes(num)){
            i--;
            continue;
        }

        lottoArr[i] = num;
    }

    // 배열 내 숫자 정렬(sort)
    // lottoArr.sort( function(a, b){ return a-b;} );   // 오른 차순 정렬
    lottoArr.sort( (a, b) => { return a-b; } ); // 람다함수 사용

    for(let i=0; i<lottoArr.length; i++){
        output.innerHTML += `<div>${lottoArr[i]}</div>`;
    }
}

function check6(){
    // 변수 선언
    const num1 = 10;
    const num2 = 20;
    const num3 = 30;

    // 1차원 배열 선언
    const arr1 = [num1, num2, num3]; // 10, 20, 30
    const arr2 = [40, 50, 60];
    const arr3 = [70, 80, 90];

    // 2차원 배열 선언
    const dArr1 = [
        [10, 20, 30],
        [40, 50, 60],
        [70, 80, 90]
    ];

    const dArr2 = [arr1, arr2, arr3];

    console.log("dArr1 : ", dArr1);
    console.log("dArr2 : ", dArr2);

    console.log("dArr2[0] : ", dArr2[0]);
    console.log("dArr2[0].length : ", dArr2[0].length);

    console.log("dArr2[1] : ", dArr2[1]);
    console.log("dArr2[1].length : ", dArr2[1].length);

    console.log("dArr2[2] : ", dArr2[2]);
    console.log("dArr2[2].length : ", dArr2[2].length);

    // 2차원 배열 내에 저장된 1차원 배열 요소의 개수
    console.log("dArr2.length : ", dArr2.length);


    // dArr2의 0행 2열에 저장된 값 얻어오기;
    console.log("dArr[0][2] : ", dArr2[0][2]);


    /* 2차원 배열 인덱스를 이용해서 값 대입 */

    // 0행 0열, 1행 0열, 2행 0열 값을 * 10 해서 대입
    dArr2[0][0] *= 10;
    dArr2[1][0] *= 10;
    dArr2[2][0] *= 10;

    console.log(dArr2);
}

/* 4행 4열 짜리 2차원 배열에 0~16 사이 난수 배치(중복x) 
    1) 배열 콘솔에 출력
    2) prompt를 이용해서 1~16 사이 숫자를 입력 받아 2차원 배열 어디에 위치하는지 검색해서 출력하기
*/
function check7(){

    // 중복 되지 않는 난수 16개를 저장하는 1차원 배열 생성
    const randomArr = [];
    for(let i=0; i<16; i++){
        const ranNum = Math.floor(Math.random() * 16 + 1);
        if(randomArr.includes(ranNum)){
            i--;
            continue;
        }
        randomArr[i] = ranNum;
    }




    // 2중 for문을 이용해서 2차원 배열 모든 요소 접근하기
    let count = 0;
    const arr = [];
    for(let i=0; i<4; i++){
        arr[i] = [];

        for(let j=0; j<4; j++){
            arr[i][j] = randomArr[count++];
        }
    }

    console.log(arr);

    const input = Number(prompt("1~16 사이 숫자를 입력해주세요"));

    for(let i=0; i<arr.length; i++){
        for(let j=0; j<arr[i].length; j++){
            if(arr[i][j] === input){
                alert(`${input}은/는 (${i}, ${j}에 있습니다.)`);
                return; // 값을 찾으면 함수를 종료
            }
        }
    }
}