//                     dark mode theme
const themeBtn = document.querySelector(".theme-btn");

themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
});

const getCurrentTheme = () => document.body.classList.contains("dark-theme") ? "dark" : "light";
const getCurrentIcon = () => themeBtn.classList.contains("sun") ? "sun" : "moon";

const savedTheme = localStorage.getItem("saved-theme"); 
const savedIcon = localStorage.getItem("saved-icon");

if(savedTheme){
    document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
    themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
}

//                  header section
window.addEventListener("scroll", function() {
    const header = document.querySelector("header");
    header.classList.toggle("stick", window.scrollY > 0);
});

//                  Service section modul

const serviceModuls = document.querySelectorAll(".service-modal");
const learnMoreBtn = document.querySelectorAll(".learn-more-button");
const modalCloseBtn = document.querySelectorAll(".modal-close-btn");

let modal = function(modalClick){
    serviceModuls[modalClick].classList.add("active");
}

learnMoreBtn.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        modal(i);
    });
});

modalCloseBtn.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        serviceModuls.forEach((modalView) => {
           modalView.classList.remove("active");
        });
    });
});

//            work-section - Modal


const workModuls = document.querySelectorAll(".work-model");
const imgCards = document.querySelectorAll(".img-card");
const workCloseBtns = document.querySelectorAll(".work-close-btn");

let workModul = function(modalClick){
    workModuls[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
    imgCard.addEventListener("click", () => {
        workModul(i);
    });
});

workCloseBtns.forEach((workCloseBtn) => {
    workCloseBtn.addEventListener("click", () => {
        workModuls.forEach((workModulView) => {
            workModulView.classList.remove("active");
        });
    });
});


//       Our swiper clints

var swiper = new Swiper(".client-swiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //          To scroll to top button

  const scrollTopBtn = document.querySelector(".srollToTop-btn");
  window.addEventListener("scroll", function() {
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
  });

  scrollTopBtn.addEventListener("click", () =>{
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
  });

//            Responsive navigation menu toggle  

const menuBtn = document.querySelector(".burger");
const closeBtn = document.querySelector(".nav-items > i");
const navbar = document.querySelector(".navbar");
const navItems = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
});

closeBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
});

navItems.forEach((navItem) => {
    navItem.addEventListener("click", () => {
        navbar.classList.remove("active");
    });
});

//            scroll reveal animation

ScrollReveal({ 
   // reset: true,
    distance:'60px',
    duration:2500,
    delay:100 
});

ScrollReveal().reveal('.home .info h2, .class-title-01, .class-title-02', {delay: 500, origin: 'left'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.home .info .btn', {delay: 700, origin: 'bottom'});
ScrollReveal().reveal('.media-icons i, .contact-left li', {delay: 500, origin: 'left', interval:150});
ScrollReveal().reveal('.home-img, .about-img', {delay: 500, origin: 'bottom'});
ScrollReveal().reveal('.about .description, .contact-right', {delay: 600, origin: 'right'});
ScrollReveal().reveal('.about .professional-list li', {delay: 500, origin: 'right', interval:200});
ScrollReveal().reveal('.skill-description, .service-description, .contact-card, .client-swiper, .contact-left h2', {delay: 700, origin: 'left'});
ScrollReveal().reveal('.experienced-card, .service-card, .education, .work, .img-card', {delay: 800, origin: 'bottom', interval:200 });
ScrollReveal().reveal('footer, .group', {delay: 500, origin: 'top'});




