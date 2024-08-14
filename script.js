const menuToggle = document.getElementById('mobile-menu');
const navUl = document.querySelector('nav ul');

menuToggle.addEventListener('click', () => {
    navUl.classList.toggle('active');
});

function openWhatsApp() {
    window.open('https://wa.me/628172320099', '_blank');
}

function openWhatsApp2() {
    window.open('https://wa.me/6281288172775', '_blank');
}

function sendEmail() {
    window.location.href = 'mailto:dvsaudit@gmail.com';
}


