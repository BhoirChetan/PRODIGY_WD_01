document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
const hamburger = document.querySelector('.nav-icon');
const navMenu = document.querySelector('.header-navigation');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
});

document.querySelectorAll('.header-navigation a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('is-active');
        navMenu.classList.remove('is-active');
    });
});
window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0);
});
const form = document.getElementById('contact');
const name = document.getElementById('name');
const email = document.getElementById('email');
const subject = document.getElementById('subject');
const message = document.getElementById('message');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (name.value === '') {
        alert('Please enter your name');
        return;
    }

    if (email.value === '') {
        alert('Please enter your email');
        return;
    }

    if (subject.value === '') {
        alert('Please enter a subject');
        return;
    }

    if (message.value === '') {
        alert('Please enter a message');
        return;
    }

    alert('Your message has been sent!');
    form.reset();
});