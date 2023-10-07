document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evitar que se envíe el formulario automáticamente
var url = "https://maquinas-agricolas-default-rtdb.europe-west1.firebasedatabase.app/users.json";
var user = document.getElementById("email").value;
var pass = document.getElementById("password").value;

var datos = {
    email_user: user,
    pass_user: pass
};
console.log(datos)

fetch(url, {
    method: "POST",
    body: JSON.stringify(datos)
    })
    .then(function(response) {
        alert("Registro exitoso!");
    });
});