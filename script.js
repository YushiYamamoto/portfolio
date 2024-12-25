document.addEventListener('DOMContentLoaded', function() {
  const header = document.querySelector('.header');
  const hero = document.querySelector('.hero');
  const headerHeight = header.offsetHeight;
    
  window.addEventListener('scroll', function() {
      if (window.scrollY > headerHeight) {
          header.classList.add('header--scrolled');
      } else {
          header.classList.remove('header--scrolled');
      }
  });
  
   const swiper = new Swiper(".portfolio__swiper", {
    slidesPerView: 3,
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
       breakpoints: {
           768: {
             slidesPerView: 2,
          },
         480: {
             slidesPerView: 1,
         },
       }
  });
 
});