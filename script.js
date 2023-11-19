let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let loginForm = document.querySelector('.header .login-form');
let contactInfo = document.querySelector('.contact-info');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');

    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
};

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    loginForm.classList.remove('active');
};

document.querySelector('#login-btn').onclick = () =>{
    loginForm.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
};

document.querySelector('#info-btn').onclick = () =>{
    contactInfo.classList.add('active');
}

document.querySelector('#close-contact-info').onclick = () =>{
    contactInfo.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    loginForm.classList.remove('active');
    contactInfo.classList.remove('active');
}

var swiper = new swiper(".home-slider", {
    loop: true,
    grapCursor: true,
    navigation: {
        nextE1: ".swiper-button-next",
        prevE1: ".swiper-button-prev",
    },
});

var swiper = new swiper(".reviews-slider", {
    loop:true,
    grapCursor: true,
    SpaceBetween: 20,
    breakpoints:{
        640:{
            SlidesPerViesw: 2,
            SpaceBetween: 20,
        },
        768:{
            SlidesPerViesw: 2,
        },
        991:{
            SlidesPerViesw: 3,
        },
    },
});

var swiper = new swiper(".blogs-slider", {
    loop:true,
    grapCursor: true,
    breakpoints:{
        640:{
            SlidesPerViesw: 1,
            // SpaceBetween: 20,
        },
        768:{
            SlidesPerViesw: 2,
        },
        991:{
            SlidesPerViesw: 3,
        },
    },
});

var swiper = new swiper(".logo-slider", {
    loop:true,
    grapCursor: true,
    breakpoints:{
        450:{
            SlidesPerViesw: 2,
        },
        640:{
            SlidesPerViesw: 3,
        },
        768:{
            SlidesPerViesw: 4,
        },
        1000:{
            SlidesPerViesw: 5,
        },
    },
});

