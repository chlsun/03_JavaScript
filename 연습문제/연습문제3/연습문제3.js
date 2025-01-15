
const resultBtn = document.querySelector("#resultBtn");

const resultElement = document.querySelector("#result");

resultBtn.addEventListener("click", ()=>{
  const checkedMenu = document.querySelectorAll("input[name=menus]:checked");

  // const fruits = document.querySelectorAll("input[name=menus]")

  // for(let fruit of fruits){
  //   if(fruit.checked){
  //     console.log("여기서 실행시키는 방법도 있긴함");
  //   }
  // }

  let sum = 0;
  let result = '';
  for(let menu of checkedMenu){
    let price = menu.parentElement.nextElementSibling.innerText;
    price = Number(price.replace("원", ''));

    const count = Number(menu.parentElement.nextElementSibling.nextElementSibling.value);

    const menuName = menu.parentElement.innerText;

    sum += price * count;

    result += `${menuName} ${count}개 `
  }
  
  result += `총합 ${sum}원`;
  resultElement.innerText = result;
});