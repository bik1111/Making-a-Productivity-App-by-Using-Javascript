
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("#login-form a");


//event(parameter) => information about the event that just happend
function onLoginSubmit(event) {
    event.preventDefault();
    //const username = loginInput.value; //항상 내가 지정하고 하는 값을 어떤 특정 변수에 할당해서 가지고 있는것이 관리적 측면에서 좋음
    console.log(loginInput.value);
}

function handleLinkClikc(event) {
    event.preventDefault(); //brower의 행동 차단
    console.log(event);
}



loginForm.addEventListener("submit", onLoginSubmit);
//onLoginSubmit() 처럼 () 를 안써주는 이유는 가로를 쓰면 함수를 바로 실행하기 떄문에
// submit이라는 조건이 수행될때만 해당 함수를 실행시키기 위해서이다.

link.addEventListener("click", handleLinkClikc);