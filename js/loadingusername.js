// 우리가 브라우저에게 공짜로 뭔가로 기억할 수 있게 해주는것 : API

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");


//반복적으로 나올 String은 대문자의 변수로 지정해주는 것이 좋음.
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
//일반적으로 String만 포함된 변수는 대문자로 표시 

function onLoginSubmit(event) {
    //브라우저의 기본동작을 차단시킴 (새로고침)
    event.preventDefault();
    //유저네임을 입력받았으니 Form은 숨키기.
    loginForm.classList.add(HIDDEN_CLASSNAME);
    //입력된 유저네임 변수로 저장.
    const username = loginInput.value;
    //username에 입력된 값이 USERNAME_KEY에 저장됨.
    localStorage.setItem(USERNAME_KEY, username);
    //input에 입력한 이름을 인자로 받아 함수실행.
    paintGreetings(username); 

}

function paintGreetings(username) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
    greeting.innerText = `Hello ${username}`;
}

//username 입력시 로컬 스토리지에 저장됨
const savedUsername = localStorage.getItem(USERNAME_KEY);


//처음으로 수행
//저장된 유저네임이 없을 때 (유저가 처음 브라우저에 들어왔을 때)
if (savedUsername === null) {
    //show the form (유저네임 입력하기 위해서)
    //최초에 hidden으로 숨겨놨었는데 유저가 처음에 들어왔을땐 유저이름을 입력해야하므로 remove 시켜 입력하게한다.
    loginForm.classList.remove(HIDDEN_CLASSNAME); //hidden을 제거해줘야 브라우저에 나타남.
    //submit하기를 기다림. submit하면 onLoginSubmi 실행
    loginForm.addEventListener("submit", onLoginSubmit);

} else {
    //show the greetings 
    paintGreetings(savedUsername);
}