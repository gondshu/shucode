let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });

    
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 99);

    /*********************Remove Toggle Icon Navbar when click navbar link(scroll)********************/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

/*********************Sticky Navbar********************/
ScrollReveal({
    // reset:true,
    distance: '82px',
    duration: 3080,
    delay: 18,
});



ScrollReveal().reveal('.home-content ', {
    origin: 'left'
});
ScrollReveal().reveal('.heading ', {
    origin: 'top'
});
ScrollReveal().reveal('.about-content, .services-container, .skills-container, .projects-container, .contact form, .social-media , .my-contact', {
    origin: 'bottom'
});
ScrollReveal().reveal('.home-img ', {
    origin: 'right'
});
ScrollReveal().reveal('.about-img ', {
    origin: 'left'
});

/*********************typed js********************/
const typed = new Typed('.multiple-Text', {
    strings: ['Web Developer', 'Android Developer', 'web designer', 'FreeLancer'],
    typeSpeed: 140,
    backSpeed: 200,
    backDelay: 1100,
    loop: true,
});