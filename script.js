const carousel = document.getElementById('carousel');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateCarousel() {
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : carousel.children.length - 1;
    updateCarousel();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < carousel.children.length - 1) ? currentIndex + 1 : 0;
    updateCarousel();
});


//java de index2
function toggleInfo(teamId) {
    // Oculta todos los contenedores de información
    var infos = document.querySelectorAll('.team-info');
    infos.forEach(info => info.style.display = 'none');

    // Muestra la información del equipo seleccionado
    var selectedInfo = document.getElementById(teamId);
    if (selectedInfo.style.display === "none" || selectedInfo.style.display === "") {
        selectedInfo.style.display = "block";
    } else {
        selectedInfo.style.display = "none";
    }
}
