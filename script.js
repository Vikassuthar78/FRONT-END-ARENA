// Smooth Scroll for nav links
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Dark/Light Mode Toggle
const modeToggle = document.createElement('button');
modeToggle.textContent = '🌓';
modeToggle.style.position = 'fixed';
modeToggle.style.top = '20px';
modeToggle.style.right = '20px';
modeToggle.style.padding = '10px';
modeToggle.style.borderRadius = '50%';
modeToggle.style.border = 'none';
modeToggle.style.cursor = 'pointer';
document.body.appendChild(modeToggle);

modeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Scroll to Top Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '20px';
scrollBtn.style.right = '20px';
scrollBtn.style.padding = '10px';
scrollBtn.style.borderRadius = '50%';
scrollBtn.style.display = 'none';
scrollBtn.style.cursor = 'pointer';
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

window.addEventListener('scroll', () => {
  scrollBtn.style.display = window.scrollY > 200 ? 'block' : 'none';
});

// Typing Effect
const tagline = document.querySelector('.tagline');
const text = "Aspiring Software Developer | AI/ML Enthusiast";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    tagline.textContent += text.charAt(index);
    index++;
    setTimeout(typeEffect, 50);
  }
}
tagline.textContent = "";
typeEffect();

// Form validation
const form = document.querySelector('form');
form.addEventListener('submit', function (e) {
  const name = form.querySelector('[name="name"]');
  const email = form.querySelector('[name="email"]');
  const message = form.querySelector('[name="message"]');
  if (!name.value || !email.value || !message.value) {
    e.preventDefault();
    alert("Please fill in all fields.");
  }
});
