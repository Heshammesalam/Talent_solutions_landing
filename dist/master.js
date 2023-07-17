
window.onscroll = () => {

  if (window.pageYOffset >= 30) {
    document.getElementById("navbar").style.backgroundColor =" #ffff";

  } else {
    document.getElementById("navbar").style.backgroundColor ="transparent";

  }
};

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'vertical',
  loop: true,

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


