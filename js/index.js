const registo = document.getElementById("largo");
const user = JSON.parse(localStorage.getItem("user"));
console.log(user.email_user)

if(localStorage.getItem("user")){
    registo.innerHTML = user.email_user; 
    registo.href = "user.html";
}


