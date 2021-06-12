const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const loginBtn = document.querySelector("#login-form button");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);

    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}


function paintGreetings(username){
    greeting.innerText = `Hi, ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME); 
}


const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null) {
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    //greeting.classList.add(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", handleLoginSubmit);
}
else {
    //console.log(`loginForm.classList.contains(HIDDEN_CLASSNAME) = ${loginForm.classList.contains(HIDDEN_CLASSNAME)}`);
    if(loginForm.classList.contains(HIDDEN_CLASSNAME) === false){
        loginForm.classList.add(HIDDEN_CLASSNAME);
    }
    paintGreetings(savedUsername);
}