const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");
/*submit의 기본동작은 제출을 함으로써 새로고침을 시킨다.
    그래서 submit을 막아야 한다. preventDefault*/

// * 반복되는 todos를 대문자 변수로 저장하기
const TODOS_KEY = "todos";


    //4. todos array
let todos =[];

// 4-2. localstrage에 저장
function saveToDos(){
    localStorage.setItem(TODOS_KEY,JSON.stringify(todos));
}

    //3. button을 click 후 삭제
    function DeleteTodo(event){
        // console.log("lalal");
        // 여기서 문제점은 클릭했을때 어떤것을 클릭했는지 알수 없음
        // console.log(event);
        const li = event.target.parentElement;
        // console.log(li);
        // console.log(li.id);
        li.remove();
        todos = todos.filter((todo) =>todo.id !== parseInt(li.id) );
        saveToDos();
        /* 위 문장의 의미는 => 우리가 클릭한 li.id와 다른 toDo는 남겨두고 싶다는 의미..!
        todo.id(string)이고, li.id(number)이기 때문에 li.id를 숫자로 바꿔야한다.
        4. todolist 저장하기
        4-1. a,b,c를 입력
        4-2. localstrage에 저장
        4-3. 새로고침하면 localstrage에 저장된것들을 화면에 그려줌.

            */

    }


    /*2.list에 값 저장하기
     문제점..! 새로고침하면 list가 reset된다.
     그리고 삭제버튼이 없다..!
    */
    function paintTodo(newTodo){
        // console.log("I will paint",newTodo);
        const li = document.createElement("li");
        //5-8.각각의 li를 구별하기위해 id를 사용한것
        li.id = newTodo.id;
        const span = document.createElement("span");
        // 5-6.앞에서 한 span.innerText=newTodo; 를 변경해야 한다.
        span.innerText = newTodo.text;
        const button = document.createElement("button");
        button.innerText= "❌";
        button.addEventListener("click",DeleteTodo);
        li.appendChild(span);
        li.appendChild(button);
        todoList.appendChild(li);
        
    }


    //1. 새로고침 방지버튼
    function handleToDoSubmit(event){
        event.preventDefault();
        const newTodo = todoInput.value;
        todoInput.value="";
        // 5-5. newTodo 배열에 obj(객체로) text를 추가
        const newTodoObj = {
            text: newTodo,
            id: Date.now(),

        };
        //5-7.위에서 선언한 newTodoObj를 괄호에 넣어준다.
        todos.push(newTodoObj);
        paintTodo(newTodoObj);
        saveToDos();
       
    }
    todoForm.addEventListener("submit",handleToDoSubmit);
    const savedToDos = localStorage.getItem(TODOS_KEY);


    /* 5-1. 방법1 
    function sayHello(item){
        console.log("this is turn off item",item);
    }
    */

    // 5. localstrage에 항상 todolist가 있는것은 아니다=> 조건문
    const paresedtodos = JSON.parse(savedToDos);
    if(savedToDos !== null){
        // 배열에 저장된 객체 하나하나를 꺼내는것 => 방법2
        // paresedtodos.forEach((item) => console.log("this is turn off item",item));
        // paintTodo(item);
        // 5-3. 그래서 const todos=> let todos로 고치고 저장된것들을 같이 보여준다.
        todos = paresedtodos; 
        // 5-2. 저장된 배열들 꺼내서 보여주기 =>그러나 새로고침을하면 덮어씌어짐
        paresedtodos.forEach(paintTodo);
        /*5-4.문제발생! 새로고침하면 삭제버튼을 누른것들은 삭제가 안됨...
        여기서 중요한 점은 todos array와 localstrage는 같은 개념이 아님
        */
    }
    /* item을 지울때, 실제로 item을 지우는게 아니라 
    지울 item을 제외하고 목록을 새로 만드는것..!
    6. 그래서 필요한것이 filter method..! 작동순서는 forEach와 비슷하다.
    function sexyFilter(){
        console.log("sexyFilter!!")
    }
    [1,2,3,4].filter(sexyFilter);

    
    [1,2,4].filter(sexyFilter){false;}

    const arr = ["pizza,"banana","tomato"];
    function sexyFilter(food){ return food !== "banana"}
    arr.filter(sexyFilter);
    */
