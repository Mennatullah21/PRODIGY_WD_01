window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.backgroundColor = '#78529a';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});
