
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
    // 1024: {
    //   slidesPerView: 3,
    //   spaceBetween: 30
    // },
  },
});

// articleSwiper

var swiper = new Swiper(".articleSwiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  loop: true,

  breakpoints: {
    300: {
      slidesPerView: 1,
      spaceBetween: 20,
    },

    600: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
    }
  },
});


