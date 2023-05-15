
// ------------------ hero-slide-start ------------------
let swiper = new Swiper('.hero', {
  
    // Optional parameters
    effect:'fade',
    loop: true,
    speed: 500,
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

// ------------------ hero-slide-end ------------------


// ------------------ AOS.js-start ------------------
AOS.init();
// ------------------ AOS.js-end ------------------

// ------------------ testimoni-slide-start ------------------
// const progressCircle = document.querySelector(".autoplay-progress svg");
// const progressContent = document.querySelector(".autoplay-progress span");
let testimoni_slide = new Swiper ('.testimoni',{
      // Optional parameters
      effect:'cube',
      loop: true,
      speed: 500,
      allowTouchMove: false,
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },

      keyboard: {
        enabled: true,
      },

      pagination: {
        el: ".swiper-pagination",
      },
   
      
    
});

// ------------------ testimoni-slide-end ------------------

// ------------------ top-member-slide-start ------------------

let top_member_slide = new Swiper ('.member-card-bar',{
  // Optional parameters
  effect:'coverflow',
  coverflowEffect: {
    rotate: 30,
    slideShadows: false,
    depth: 150,
    stretch: -70,
  },
  loop: true,
  speed: 500,
  slidesPerView: 2,
  spaceBetween: 10,
  centeredSlides: true,
  allowTouchMove: false,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}


  

});
// ------------------ top-member-slide-end ------------------







