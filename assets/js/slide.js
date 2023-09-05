
// ------------------ hero-slide-start ------------------
let swiper = new Swiper('.hero', {
  
    // Optional parameters
    effect:'fade',
    loop: true,
    speed: 500,
    autoplay: {
      delay: 5000,
      disableOnInteraction: true,
    },
    allowTouchMove: false,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  

  });

// ------------------ hero-slide-end ------------------

// ------------------ testimoni-slide-start ------------------

let testimoni_slide = new Swiper ('.testimoni',{
      effect:'cube',
      loop: true,
      speed: 500,


      // autoplay: {
      //   delay: 3500,
      //   // disableOnInteraction: false,
      // },

      
      keyboard: {
        enabled: true,
      },

      allowTouchMove: true,

      pagination: {
        el: ".swiper-pagination",
      },
      // navigation: {
      //   nextEl: '.swiper-button-next',
      //   prevEl: '.swiper-button-prev',
      // }
      
   
    
});

// ------------------ testimoni-slide-end ------------------

// ------------------ top-member-slide-start ------------------

let top_member_slide = new Swiper ('.member-card-bar',{
  effect:'coverflow',
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 100,
    modifier: 2.5,
  },
  loop: true,
  speed: 500,
  slidesPerView: 'auto',
  spaceBetween: 10,
  centeredSlides: true,
navigation: {
  nextEl: '.swiper-button-next',
  prevEl: '.swiper-button-prev',
}


  

});
// ------------------ top-member-slide-end ------------------







