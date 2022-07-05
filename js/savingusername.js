// 우리가 브라우저에게 공짜로 뭔가로 기억할 수 있게 해주는것 : API

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
//일반적으로 String만 포함된 변수는 대문자로 표시 

function onLoginSubmit(event) {
    event.preventDefault(); //browser의 행동 차단
    const username = loginInput.value;
    localStorage.setItem("username", username);
    loginForm.classList.add(HIDDEN_CLASSNAME); //form,h1에 hidden 클래스생성, login-form 숨김
    greeting.innerText = `Hello ${username}`; //Hello username 출력
    greeting.classList.remove(HIDDEN_CLASSNAME); //h1에 존재하는 hidden 클래스 삭제됨에 따라 h1이 보여지고 form은 여전히 hidden.
    
}



loginForm.addEventListener("submit", onLoginSubmit);