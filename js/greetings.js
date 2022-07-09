const loginForm = document.querySelector('#login-form');
const loginInput = document.querySelector('#login-form input');
const greeting = document.querySelector('#greeting');

// string만 포함된 변수는 string을 저장하고 싶을 때 사용하며,
// 대문자로 표기하는 게 관습
// 중요한 정보가 아니므로 차이를 위해 대문자로 표기
const HIDDEN_CLASSNAME='hidden';
const USERNAME_KEY = 'username';

function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username= loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    paintGreetings(username);
}

function paintGreetings (username){
    greeting.innerText = `Hello, ${username} !`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

loginForm.addEventListener('submit', onLoginSubmit);

const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    //show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener('submit', onLoginSubmit);
}else{
    //show the greetings
    paintGreetings(savedUsername); 
}

