const loginForm = document.getElementById("login-form");
const loginInput = loginForm.querySelector("input");
const greeting=document.getElementById("greeting");
console.log(greeting);

const HIDDEN_CLASSNAME="hidden";
const USERNAME_KEY="username";
/* 본인이 생성한 string을 반복해서 사용할 경우에는
    대문자변수로 정해 놓는 것이 좋다. => 
    실수를 만들고 싶지 않은 string 이라는 사실을 
    기억하고 상기시키는 것이 좋다. 그래야
    나중에 오타가 나도 컴퓨터에서 알려준다...!*/
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username=loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    // greeting.innerText="Hello"+username;
    greeting.innerText= `Hello ${username}`;

    greeting.classList.remove(HIDDEN_CLASSNAME);
    
    /* alert를 사용하므로써 html에서 만든 link
        기능이 잠깐 일시정지 되었다가 다시 실행된다.
        => 그레서 아무도 alert를 사용하지 않는다.*/

}


function paintGreetings(username){
    greeting.innerText= `Hello ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


const savedUsername=localStorage.getItem(USERNAME_KEY);
console.log(savedUsername);


if(savedUsername===null){
    //show the form   
    loginForm.classList.remove(HIDDEN_CLASSNAME);  
    loginForm.addEventListener("submit",onLoginSubmit);
}else{
    //show the greetings=>hidden
    paintGreetings(savedUsername);
    
}



// link.addEventListener("click",handleLinkClick);
/* 중요한 것은 handleLinkClick를 실행시키는 것은 
    내가 아니라 자바스크립트!!handleLinkClick()는
    한번만 실행시키겠다는 뜻=>클릭을 해야한다는뜻!
    나는 handleLinkClick이라는 이름만 주고
    실제로 실행시키는 것은 자바스크립트!!!(매우중요)
*/





// function BtnClick(){
//     const username=loginInput.value;
//     console.log("username");
//     // if(username===""){
//     //     alert("please write your name");
//     // }else if(username.length > 15){
//     //     alert("your name is too long.")
//     // }
// }



// loginButton.addEventListener("click",BtnClick);