const registo = document.getElementById("largo");
const user = JSON.parse(localStorage.getItem("user"));


if(localStorage.getItem("user")){
    registo.innerHTML = user.name_user; 
    registo.href = "user.html";
}


