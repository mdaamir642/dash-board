function signUp(){
console.log("hello world")
var fullName = document.getElementById("fullName").value;
var phoneNumber = document.getElementById("phoneNumber").value;
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var userObj = {
fullName,
phoneNumber,
email,
password,
}
var getUsers = JSON.parse(localStorage.getItem("users"))

if(getUsers === null){
var array = [];
array.push(userObj)
localStorage.setItem("users", JSON.stringify(array))
alert("user signup")



}
else{
var findUser = getUsers.find(function(value){
if (value.email === email) {
    return true
}



})

if (findUser === undefined) {
    getUsers.push(userObj)
    localStorage.setItem("users", JSON.stringify(getUsers))
    alert("user signup")
   window.location.href = "./index.html"
}
else{
    alert("email address already exists")
window.location.href = "./index.html"
}

}

}

function logIn(){
console.log("hello world")
var email = document.getElementById("email").value;
var password = document.getElementById("password").value;

var getUser = JSON.parse(localStorage.getItem("users"))
var user = getUser.find(function (value){
if (value.email === email && value.password === password) return true 



})
if (user != -1) {
    alert("success fully login")
    localStorage.setItem("logInUser", JSON.stringify(user))
    window.location.replace ("./dash-board.html")
}
else{
    console.log("hello world")
alert("Email or password does not match")

}



}



