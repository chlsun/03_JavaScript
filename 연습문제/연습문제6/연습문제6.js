const titleInput = document.querySelector("#titleInput");


titleInput.addEventListener("click", (e)=>{
  const before = titleInput.innerHTML;
  const beforeText = titleInput.innerText;

  const input = document.createElement("input");
  input.type = "text";

  if(beforeText !== '식당명을 입력하세요'){
    input.value = beforeText;
  }

  input.addEventListener("blur", (e)=>{
    if(e.target.value.length === 0){
      titleInput.innerHTML = before;
      return;
    }
    const h1 = document.createElement("h1");

    h1.textContent = e.target.value;

    titleInput.innerHTML = '';
    titleInput.append(h1);
  })

  e.target.innerHTML = '';
  e.target.append(input);
  input.focus();
});

/* 수정버튼 클릭이벤트트 */
const updateBtn = document.querySelector("#updateBtn");

updateBtn.addEventListener("click", ()=>{

  const removeBtn = document.createElement("button");
  const appendBtn = document.createElement("button");
  const endBtn = document.createElement("button");


  /* 종료btn 요소 */
  endBtn.textContent = '종료';

  endBtn.addEventListener("click", ()=>{
    const menus = document.querySelectorAll(".menu");

    for(let menu of menus){
      const menuName = document.createElement("p");
      const price = document.createElement("p");

      menuName.className = "menuName";
      if(menu.children[1].value !== ''){
        menuName.textContent = menu.children[1].value;
      }else{
        menuName.textContent = "미입력"
      }

      price.className = "price";
      if(menu.children[2].value !== ''){
        price.textContent = menu.children[2].value + '원';
      }else{
        price.textContent = '0원';
      }
      
      menu.innerHTML = '';

      menu.append(menuName, price);
    }

    removeBtn.remove();
    appendBtn.remove();
    endBtn.remove();

    updateBtn.style.display = 'block';
  });


  /* 삭제Btn 요소 */
  removeBtn.textContent = '삭제';

  removeBtn.addEventListener("click", ()=>{

    const checkMenu = document.querySelectorAll("[name=menu]:checked");

    for(let menu of checkMenu){
      menu.parentElement.remove();
    }
  });


  /* 추가Btn 요소 */
  appendBtn.textContent = '추가';

  appendBtn.addEventListener("click", ()=>{
    const menus = document.querySelectorAll(".menu");
    if(menus.length >= 15){
      alert("더 이상 메뉴를 추가할 수 없습니다.");
      return;
    }

    const article =  document.querySelector("article");

    const menu = document.createElement("div");
    const checkbox = document.createElement("input");
    const menuInput = document.createElement("input");
    const priceInput = document.createElement("input");

    menu.className = "menu";

    checkbox.type = "checkbox";
    checkbox.name = "menu";

    menuInput.type = "text";
    menuInput.placeholder = '메뉴명';
    menuInput.style.width = '60%';
    menuInput.style.fontSize = "20px";

    priceInput.type = "text";
    priceInput.placeholder = '가격';
    priceInput.style.width = '30%';
    priceInput.style.fontSize = "20px";

    menu.append(checkbox, menuInput, priceInput);

    article.append(menu);
  });

  
  /* 추가, 삭제, 종료 버튼 추가 || 수정 버튼 none 처리  */
  updateBtn.parentElement.prepend(appendBtn, removeBtn, endBtn);
  updateBtn.style.display = 'none';

  /* 기존 menu(p태그) -> input태그로 변경 */
  const menus = document.querySelectorAll(".menu");

  for(let menu of menus){
    const menuName = menu.children[0].textContent;
    const menuprice = menu.children[1].textContent;

    const checkbox = document.createElement("input");
    const menuInput = document.createElement("input");
    const priceInput = document.createElement("input");

    checkbox.type = "checkbox";
    checkbox.name = "menu";

    menuInput.type = "text";
    if(menuName !== '미입력'){
      menuInput.value = menuName;
    }
    menuInput.placeholder = '메뉴명';
    menuInput.style.width = '60%';
    menuInput.style.fontSize = "20px";

    priceInput.type = "text";
    if(menuName !== '미입력'){
      priceInput.value = menuprice.replace('원', '');
    }
    priceInput.placeholder = "가격";
    priceInput.style.width = '30%';
    priceInput.style.fontSize = "20px";

    menu.innerHTML = '';

    menu.append(checkbox, menuInput, priceInput);
  }
});