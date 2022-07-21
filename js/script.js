let menuBtn = document.querySelector('.menu-btn');
let overlay = document.querySelector('.overlay');
let container = document.querySelector('.menu-container');
menuBtn.addEventListener('click', function () {
   document.body.classList.toggle('lock');
   menuBtn.classList.toggle('active');
   overlay.classList.toggle('active');
   container.classList.toggle('active');
});

const swiper = new Swiper('.hero__swiper', {
   // Optional parameters
   direction: 'horizontal',
   loop: true,
   speed: 1000,
   parallax: true,

   // If we need pagination

   // Navigation arrows
   navigation: {
      nextEl: '.slide__arrow-next',
      prevEl: '.slide__arrow-prew',
   },

   // And if we need scrollbar

});
const swiper2 = new Swiper('.projects__swiper', {
   // Optional parameters
   direction: 'horizontal',
   speed: 200,
   slidesPerView: 2,
   spaceBetween: 30,
   loop: true,
   pagination: {
      el: ".swiper-pagination",
      clickable: true,
   },
   observeParents: true,
   observeSlideChildren: true,
   observer: true,
   navigation: {
      nextEl: '.projects-button-next',
      prevEl: '.projects-button-prev',
   },
   breakpoints: {
      320: {
         slidesPerView: 1,
      },
      992: {
         slidesPerView: 2,
      }
   },

});

$(document).ready(function () {
   $('.projects__link-item').click(function (e) {
      e.preventDefault();

      $('.projects__link-item').removeClass('active');
      $('.projects__tabs-item').removeClass('active');

      $(this).addClass('active');
      $($(this).attr('href')).addClass('active');
   });
   $('.projects__link-item:first').click();
})
//sdasd
