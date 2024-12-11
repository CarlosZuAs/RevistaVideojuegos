document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    let isValid = true;

    // Validación del Nombre
    const nameInput = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (nameInput.value.trim() === '') {
        nameError.textContent = 'El nombre es obligatorio.';
        nameError.style.display = 'block';
        isValid = false;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Validación del Correo
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
        emailError.textContent = 'Introduce un correo válido.';
        emailError.style.display = 'block';
        isValid = false;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Validación de la Contraseña
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (passwordInput.value.trim().length < 6) {
        passwordError.textContent = 'La contraseña debe tener al menos 6 caracteres.';
        passwordError.style.display = 'block';
        isValid = false;
    } else {
        passwordError.textContent = '';
        passwordError.style.display = 'none';
    }

    // Si el formulario es válido, enviarlo
    if (isValid) {
        alert('Formulario enviado correctamente!');
        this.submit();
    }
});



const carouselIndices = {};

function showSlide(carouselId, index) {
    const carouselContainer = document.getElementById(carouselId);
    const carousel = carouselContainer.querySelector('.carousel');
    const images = carousel.querySelectorAll('.carousel-image');

    if (index >= images.length) {
        carouselIndices[carouselId] = 0;
    } else if (index < 0) {
        carouselIndices[carouselId] = images.length - 1;
    } else {
        carouselIndices[carouselId] = index;
    }

    carousel.style.transform = `translateX(${-carouselIndices[carouselId] * 100}%)`;
}

function nextSlide(carouselId) {
    const currentIndex = carouselIndices[carouselId] || 0;
    showSlide(carouselId, currentIndex + 1);
}

function prevSlide(carouselId) {
    const currentIndex = carouselIndices[carouselId] || 0;
    showSlide(carouselId, currentIndex - 1);
}

document.querySelectorAll('.carousel-container').forEach(carousel => {
    const carouselId = carousel.id;
    carouselIndices[carouselId] = 0;
});