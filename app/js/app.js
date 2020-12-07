import $ from 'jquery'; window.jQuery = $; window.$ = $ // import module example (npm i -D jquery)
// import magnificPopup from 'magnific-popup'

// import './vendor/magnific-popup/magnific-popup.min.js')

// require('./vendor/magnific-popup/magnific-popup.min.js') // Pravilno
// require('./vendor/swiper/swiper-bundle.min.js') 
// import './vendor/swiper/swiper-bundle.min.js'

document.addEventListener('DOMContentLoaded', () => {

	// $('body').hide();
  // $('.popup').magnificPopup({ type: 'image' });



  var swiperMousquetaires = $(".sect__slider");
  swiperMousquetaires.each(function(){
    var swiper = new Swiper(this, {
      loop: false,
      autoplay: false,
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
      spaceBetween: 45,
      watchSlidesProgress: true,
      watchSlidesVisibility: true,
      autoHeight: true,
      navigation: {
        nextEl: ".sect__slider-next",
        prevEl: ".sect__slider-prev"
      },
      breakpoints: {
        1024: {
          slidesPerView: 2,
          spaceBetween: 20,      
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,     
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,       
        },
        320: {
          slidesPerView: 2,
          spaceBetween: 20,       
        }
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: false
      },
    });
  });

  $('.swiper-mousquetaires-name').matchHeight();
  $('.lift-text-wrapper').matchHeight();
});

