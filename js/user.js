const user_id = document.getElementById("user");
const user = JSON.parse(localStorage.getItem("user"));
const registo = document.getElementById("largo");


if(localStorage.getItem("user")){
registo.innerHTML = user.name_user; 
registo.href = "user.html";
user_id.innerHTML = `<div class="card" style="width: 18rem;">
   <img src="..." class="card-img-top" alt="...">
   <div class="card-body">
     <h5 class="card-title">Nombre: ${user.name_user}</h5>
     <p class="card-text">Apellido: ${user.a_user}</p>
   </div>
</div> `
    
}

