












var postsCont = document.getElementById("cont")
var loginUser;
window.addEventListener("load", function(){
var userLogin = this.localStorage.getItem("loginUser")
if(!userLogin){
    this.window.location.replace("./index.html")
    return
}
var getUser = JSON.parse(this.localStorage.getItem("loginUser"))
loginUser = getUser
var fullName = document.getElementById("fullName")
if(fullName){
    fullName.innerHTML = loginUser.fullName
}













    if (postsCont){
var getPosts = JSON.parse(localStorage.getItem("posts")) || []
for (var value of getPosts) {
    postsCont.innerHTML += `<div id="allPost" class="all-post" >  

<h2>${value.title}</h2>
<p>${value.desc}</p>
<div class="btns">
    <button onclick="editPost(${value.id} , this)"  >Edit</button>
    <button onclick="deletePost(${value.id} , this)">Delete</button>   

</div>
</div> `

}
}

})

function addPost(){
    var invalid = document.getElementById("invalid")
    var title = document.getElementById("title");
    var desc = document.getElementById("desc");
    if(!title.value && !desc.value){
    invalid.innerHTML = "Invalid please write something"
    setTimeout(function() {invalid.innerHTML = ""},2000 )
    return
    }
    var id;
    var getPosts = JSON.parse(localStorage.getItem("posts")) || []
    
    
    if (getPosts.lenght > 0   ){
    id  = getPosts[0].id + 1
    }
    else{
    id = 1
   
    }
 
    var allPOst =`<div id="allPost" class="all-post" >  
    
<h2>${title.value}</h2>
<p>${desc.value}</p>
<div class="btns">
    <button onclick="editPost(${id} , this)" >Edit</button>
    <button onclick="deletePost(${id} , this)">Delete</button>   

</div>
</div> `
    postsCont.innerHTML = allPOst + postsCont.innerHTML
    var postData = {
        id: id,
        title: title.value,
        desc: desc.value
    }
    
    getPosts.unshift(postData)
    localStorage.setItem("posts", JSON.stringify(getPosts))
    
    title.value =""
    desc.value =""

}    


function deletePost(id , element){
var getPosts = JSON.parse(localStorage.getItem("posts"))
var indexNum = getPosts.findIndex(function(value){
if(value.id === id ) return true
})
getPosts.splice(indexNum, 1)
localStorage.setItem("posts", JSON.stringify(getPosts))
element.parentNode.parentNode.remove()


}


function editPost(id ,element){
var indexNum;
var getPosts = JSON.parse(localStorage.getItem("posts") )
var data = getPosts.find(function (value, index){
if (value.id === id){
indexNum = index
return true
}

})
var editTitle = prompt("edit title" , data.title)
var editDesc = prompt("edit desc" , data.desc)
const editData = {
id: data.id,
title:editTitle,
desc:editDesc

}
getPosts.splice(indexNum, 1, editData)
localStorage.setItem("posts", JSON.stringify(getPosts))

var h2Title = element.parentNode.parentNode.firstElementChild
var pDesc = element.parentNode.parentNode.firstElementChild.nextElementSibling
h2Title.innerHTML = editTitle
pDesc.innerHTML = editDesc

}

function logOut(){
setTimeout(setTime , 3000 )
var loader = document.querySelector(".loader")
loader.style.display = "block"
}

function setTime(){
    localStorage.removeItem("loginUser")
    window.location.replace("./index.html")
    
    }




