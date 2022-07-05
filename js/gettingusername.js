
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 String만 포함된 변수는 대문자로 표시 

function onLoginSubmit(event) {
    event.preventDefault(); //browser의 행동 차단
    const username = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    
}



loginForm.addEventListener("submit", onLoginSubmit);
