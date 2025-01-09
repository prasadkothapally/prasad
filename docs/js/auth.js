const username = "admin";
const password = "secret";

const enteredUsername = prompt("Enter username:");
const enteredPassword = prompt("Enter password:");

if (enteredUsername !== username || enteredPassword !== password) {
    document.body.innerHTML = "<h1>Access Denied</h1>";
}

