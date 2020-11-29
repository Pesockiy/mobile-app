import Swiper from 'swiper/bundle'
import 'swiper/swiper-bundle.css'



//slider
const mySwiper = new Swiper('.swiper-container', {
  speed: 1000,
  setWrapperSize: true,
  loop: true,
  autoplay: {
    delay: 1000,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    slidesPerView: 'auto'
  },
});


//video slider
const videoSlider = new Swiper('.slider-player', {
  loop: true,
  speed: 0,
  loop: true,
  pagination: {
    el: '.slider-playlist',
    type: 'custom',
    clickable: true,
    bulletActiveClass: 'active',
    bulletClass: 'playlist__item',
    slidesPerView: 1
  }
});


//smooth scroll to section
document.querySelectorAll('.nav__link[href^="#"').forEach(link => {

  link.addEventListener('click', e => {
      e.preventDefault();

      let href = e.target.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = document.querySelector('.header').offsetHeight;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
          top: offsetPosition,
          behavior: 'smooth'
      });
  });
});

if(document.documentElement.scrollTop >= 1) {
  document.querySelector('.header-inner').classList.add('header-inner--notrans');
  document.querySelector('.top-block-wrap').classList.add('top-block-wrap--hidden');
}

window.addEventListener('scroll', () => {
  if(document.documentElement.scrollTop > 1) {
    document.querySelector('.header-inner').classList.add('header-inner--notrans');
    document.querySelector('.top-block-wrap').classList.add('top-block-wrap--hidden');
  } else {
    document.querySelector('.header-inner').classList.remove('header-inner--notrans');
    document.querySelector('.top-block-wrap').classList.remove('top-block-wrap--hidden');
  }
})