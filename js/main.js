cad = `
<div class="logo">
<a href="index.html"><img src="./img/logoempresa/ensigna1.png" alt="imagen"></a>

</div>
<div class="nav">
<a class="navheader" href="index.html">Inicio</a>
<a class="navheader" href="productos.html">Productos</a>
<a class="navheader" href="contacto.html">Contactanos</a>
<a class="navheader" href="nosotros.html">Nosotros</a>                
</div>

<div class="registro">

<a id="largo" href="login.html"><i class="fa-solid fa-user"></i> Iniciar sesión</a>
<a id="solo" href="login.html"><i class="fa-solid fa-user"></i></a>

</div>

<div class="slogan">
<h2>Tu cosecha, nuestro compromiso.</h2>
</div>  
    `
    document.querySelector("header").innerHTML = cad




cad = `
<div class="redsocial">
            <a id="ig" href="https://www.instagram.com/" target="_blank">
                <img src="img/instagram.png" alt="Instagram">
            </a>
            <a id="face" href="https://www.facebook.com/">
                <img src="./img/facebook.png" alt="Facebook">
            </a>
            <a id="tw" href="https://twitter.com/">
                <img src="./img/logotipo-de-twitter.png" alt="Twitter">
            </a>

        </div>

        <div class="links">
            <ul>
                <li><a href="index.html">Inicio</a></li>
                <li><a href="productos.html">Productos</a></li>
                <li><a href="contacto.html" target="_blank">Contactanos</a></li>
                <li><a href="nosotros.html">Nosotros</a></li>
                
                              
            </ul>

        </div>
        <div class="copyright">
            <p>Copyright 2023 - E N S I G N A </p>
            <p>Developed by Grupo Maquinarias Agrícolas </p>
        </div>
`
document.querySelector("footer").innerHTML = cad
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

