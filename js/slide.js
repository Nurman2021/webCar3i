
// ------------------ hero-slide-start ------------------
const swiper = new Swiper('.hero', {
    // Optional parameters
    effect:'fade',
    loop: true,
    speed: 500,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  

     
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  


    // And if we need scrollbar 
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

// ------------------ hero-slide-end ------------------
 


// ------------------ AOS.js-start ------------------
AOS.init();
// ------------------ AOS.js-end ------------------

// ------------------ testimoni-slide-start ------------------
 const swiper2 = new Swiper ('.rcmd-card-bar',{
      // Optional parameters
      effect:'fade',
      loop: true,
      speed: 500,
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
      },
    
  
       
      // Navigation arrows
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    
  
  
      // And if we need scrollbar 
      scrollbar: {
        el: '.swiper-scrollbar',
      },



 })
// ------------------ testimoni-slide-end ------------------






