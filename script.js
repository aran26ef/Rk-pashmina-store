document.getElementById('year').textContent = new Date().getFullYear();

function showMessage(){
  alert('Thank you for contacting RK Pashmina Store! We will add your real WhatsApp number and contact details soon.');
}


const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.navbar nav');
if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    menuToggle.setAttribute('aria-expanded', 'false');
  }));
}
