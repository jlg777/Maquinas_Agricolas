document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente
var url = "https://maquinas-6f795-default-rtdb.firebaseio.com/user1.json";
var loginName = document.getElementById("loginNombre").value;
var loginApp = document.getElementById("loginApellido").value;
var user = document.getElementById("email").value;
var pass = document.getElementById("password").value;
var datos = {
  name_user: loginName,
  a_user: loginApp, 
  email_user: user,
  pass_user: pass
};
console.log(datos)

if (user==" "|| pass==" "){
  alert("Complete los datos!");
}else{
  fetch(url, {
    method: "POST",
    body: JSON.stringify(datos)
    })
    .then(function(response) {
        alert("Registro exitoso!");
        document.getElementById("registroForm").reset();
    });
}





});

var btn = document.getElementById("btnlogin");

var loginModal = document.getElementById("loginForm1");

btn.addEventListener("click",function() {
    loginModal.style.display = "block";
  });



  var loginbtn = document.getElementById("loginForm");


loginbtn.addEventListener("submit", function(event) {
event.preventDefault(); // Evitar que se envíe el formulario automáticamente


var loginUser = document.getElementById("loginEmail").value;
var loginPass = document.getElementById("loginPassword").value;

console.log(loginUser);
console.log(loginPass)

// Realizar la petición GET a la API para obtener los registros
fetch("https://maquinas-6f795-default-rtdb.firebaseio.com/user1.json")
.then(function(response) {
  return response.json();
})
.then(function(data) {
    // Buscar el registro que coincida con el DNI y la contraseña ingresados
    for (var key in data) {
      console.log(data[key])
        if (data.hasOwnProperty(key) && data[key].email_user === loginUser && data[key].pass_user === loginPass) {
           
          alert("Credenciales correctas!!");
          localStorage.setItem('user',JSON.stringify(data[key]))
          console.log(localStorage.getItem('user'));
            // Redirigir al usuario a login.html
          window.location.href = "index.html";
          break;
        }
        else{
          alert("Credenciales Incorrectas!!");
          document.getElementById("loginForm").reset();
          break;
        }
      } 
})

  });