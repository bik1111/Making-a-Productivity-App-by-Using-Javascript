const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];



//로컬스토리지에 toDos(array형태) 집어넣기
function saveToDos() {
    //JSON.stringify => object, array 또는 어떤 코드든 string타입으로 바꿔줌.
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));

}


//삭제버튼 눌렀을때 실행되는 함수
function deleteToDo(event) {
   const li = event.target.parentElement; //button의 부모(li)
   li.remove();

   //toDos는 새로운 array값을 받음. (조건: li 아이디와 각 원소들의 아이디가 다른것들.)
   //filter은 toDos의 원본자체를 바꾸는것이 아니라 새로운 배열을 조건에 맞게 생성함.
   //toDo는 toDos 데이터베이스에 있는 요소 들 중 하나.
   // parseInt -> string타입을 숫자로 바꿔줌.
   toDos = toDos.filter(toDo => toDo.id !== parseInt(li.id));
   savedToDos();
}



function paintToDo(newTodo) {
  //li 생성
  const li = document.createElement("li");
  li.id = newTodo.id;
  //span 생성
  const span = document.createElement("span");
  //span자리에 내가 할 todolist 생성
  span.innerText = newTodo.text;
  //버튼키 생성
  const button = document.createElement("button");
  //버튼에 이모티콘 넣기
  button.innerText = "❌";
  //버튼(삭제) 클릭하면 deleteTODO 함수 실행
  button.addEventListener("click", deleteToDo);
  //li에 span,button 삽입
  li.appendChild(span);
  li.appendChild(button);
  //todolist에 li 삽입
  toDoList.appendChild(li);
}


//todolist 기록하고 엔터눌렀을때.
//envet => "submit"클릭시 움직임 의미.
function handleToDoSubmit(event) {
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";

  //입력한 todolist array들의 각각의 원소들에게 id를 부여해줘서 관리를 용이하게함.
  const newTodoObject = {
      text: newTodo,  
      id: Date.now(),
  };
  toDos.push(newTodoObject);
  //화면에 todolist 보여주기.
  paintToDo(newTodoObject);
  //todolist 저장시키기.
  saveToDos();
}



toDoForm.addEventListener("submit", handleToDoSubmit);


//단순 string 형태
const savedToDos = localStorage.getItem(TODOS_KEY);         

if (savedToDos !== null) {
    //parse 시키면 array 형태로 깔끔하게 바뀜.
    const parsedToDos = JSON.parse(savedToDos);

    //toDos array에 parse된 array를 저장하고 시작.
    //그러면 새로고침해도 저장된 parsed array가 사라지지않고 계속 유지됨.
    toDos = parsedToDos;

    //array의 각각의 인덱스원소들이 paintodo 함수의 인자로 들어감.
    //따라서 브라우저화면에 리스트들이 나타나게됨.
    parsedToDos.forEach(paintToDo);
}


