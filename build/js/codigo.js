// AOS ANIMACION
document.addEventListener('DOMContentLoaded', function () {
    AOS.init();
});

// MAPA
function iniciarMap() {
    const coord = { lat: 10.9878, lng: -74.7889 };
    const map = new google.maps.Map(document.getElementById('map'), {
        zoom: 10,
        center: coord
    });
    const marker = new google.maps.Marker({
        position: coord,
        map: map
    });
}

// MENU DESPLEGADO
const submenus = document.querySelectorAll('.submenu');

submenus.forEach(submenu => {
    submenu.addEventListener('click', function () {
        this.classList.toggle('active');
    });
});

// BOTON DESLIZAR
window.addEventListener('scroll', function () {
    showScrollButton();
});

function showScrollButton() {
    const botonTop = document.getElementById("boton-top");
    const scrollPosition = window.scrollY;

    botonTop.style.display = (scrollPosition > 20) ? "block" : "none";
}

// BOTON WHATSAPP
function scrollToTop() {
    let botonPosition = document.documentElement.scrollTop || document.body.scrollTop;

    if (botonPosition > 0) {
        window.requestAnimationFrame(scrollToTop);
        window.scrollTo(0, botonPosition - botonPosition / 8);
    }
}

function shareOnWhatsApp() {
    // Reemplaza esto con tu lógica para compartir en WhatsApp
    alert("Dirección de WhatsApp aquí");
}

// MENU RESPONSIVE
document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon a');
    const nav = document.querySelector('.navegacion');

    menuIcon.addEventListener('click', function (event) {
        event.preventDefault();
        console.log('Clic en el icono del menú');

        // Cambia el contenido del ícono del menú
        if (menuIcon.classList.contains('cerrar')) {
            // Si ya tiene la clase 'cerrar', cambiar a las barras
            menuIcon.innerHTML = '<i class="fas fa-bars"></i>';
        } else {
            // Si no tiene la clase 'cerrar', cambiar a la X
            menuIcon.innerHTML = '<i class="fas fa-times"></i>';
        }

        // Alterna la clase 'menu-abierto' en la navegación
        nav.classList.toggle('menu-abierto');
        console.log('Clase menu-abierto aplicada:', nav.classList.contains('menu-abierto'));
        
        // Alterna la clase 'cerrar' en el ícono del menú
        menuIcon.classList.toggle('cerrar');
    });
});


//SLIDER 

const slider = document.querySelector('.slider');
const imagesWrapper = document.querySelector('.img-slider');
const images = document.querySelectorAll('.img-slider img');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;
const slideWidth = images[0].clientWidth;

function nextSlide() {
  currentIndex++;
  if (currentIndex >= images.length) {
    currentIndex = 0;
  }
  const offset = -slideWidth * currentIndex;
  imagesWrapper.style.transform = `translateX(${offset}px)`;
}

function prevSlide() {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  const offset = -slideWidth * currentIndex;
  imagesWrapper.style.transform = `translateX(${offset}px)`;
}

nextButton.addEventListener('click', nextSlide);
prevButton.addEventListener('click', prevSlide);

setInterval(nextSlide, 5000); 