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

  AOS.init();

  




