const clock = document.querySelector("#clock");


function sayHello() {
    console.log("Hello");
}


//반복적으로 이뤄지는 행동을 만들고 싶을때 사용
setInterval(sayHello, 5000)//5000ms -> 5s 
