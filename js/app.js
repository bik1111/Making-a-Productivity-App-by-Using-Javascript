//const loginFrom = document.querySelector("#login-form");
//querySelector로 검색시에는 '#'를 넣어서 아이디를 찾는다고 표시해야함
//그렇지않으면 classname , tagname 등 모두 검색함.

const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");


function handleLoginBtnClick() {
    console.log(loginInput.value);
 
}

loginButton.addEventListener("click", handleLoginBtnClick);
