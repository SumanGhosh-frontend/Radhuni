
// chefs-slider 
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  slidesPerView: 3,
  autoplay: true,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 1,
      spaceBetween: 30
    },
    // when window width is >= 640px
    640: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      spaceBetween: 40
    }
  }
});

// testimonial swiper

var swiper = new Swiper(".testimonialSwiper", {
  // autoplay: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});


// navbar toggeler
const mobile_nav = document.querySelector(".mobile-version");
const nav_header = document.querySelector(".header-upper");
const toggleNavbar = () => {
  nav_header.classList.toggle('active');
};

mobile_nav.addEventListener('click', () => toggleNavbar());
