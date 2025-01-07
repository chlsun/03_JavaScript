function createTable(){
    const inputStart = document.getElementById("start");
    const inputEnd = document.getElementById("end");

    const thead = document.getElementById("thead");
    const tbody = document.getElementById("tbody");

    if(inputStart.value.length === 0 || inputEnd.value.length === 0){
        alert("시작 단과 종료 단을 입력해주세요");
        return;
    }

    const start = Number(inputStart.value);
    const end = Number(inputEnd.value);

    if(start <= 0 || end <= 0){
        alert("1 이상의 수를 입력해주세요");
        return;
    }

    if(start > end){
        alert("시작 단이 종료 단 보다 클 수 없습니다.");
        return;
    }

    thead.innerHTML = '';
    tbody.innerHTML = '';

    let theadLine = '<tr>';
    for(let i=start ; i<=end ; i++){
        theadLine += `<th>${i}단</th>`;
    }
    theadLine += '</tr>';

    let tbodyLine = '';
    for(let i = 1 ; i<=9 ; i++){
        tbodyLine += '<tr>';
        for(let j=start ; j<=end ; j++){
            tbodyLine += `<td>${i} x ${j} = ${i*j}</td>`;
        }
        tbodyLine += '</tr>';
    }
    
    thead.innerHTML = theadLine;
    tbody.innerHTML = tbodyLine;
}