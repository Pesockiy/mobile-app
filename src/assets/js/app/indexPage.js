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

    document.body.classList.remove('body--hidden');
    document.querySelector('.header-mobile-wrap').classList.remove('active');
    hamburgerButton.classList.remove('active');

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

if (document.documentElement.scrollTop >= 1) {
  document.querySelector('.header-inner').classList.add('header-inner--notrans');
  document.querySelector('.top-block-wrap').classList.add('top-block-wrap--hidden');
}

window.addEventListener('scroll', () => {
  if (document.documentElement.scrollTop > 1) {
    document.querySelector('.header-inner').classList.add('header-inner--notrans');
    document.querySelector('.top-block-wrap').classList.add('top-block-wrap--hidden');
  } else {
    document.querySelector('.header-inner').classList.remove('header-inner--notrans');
    document.querySelector('.top-block-wrap').classList.remove('top-block-wrap--hidden');
  }
})



//hamburger button
let hamburgerButton = document.querySelector('.hamburger');
hamburgerButton.addEventListener('click', (e) => {
  hamburgerButton.classList.toggle('active');
  document.body.classList.toggle('body--hidden');
  document.querySelector('.header-mobile-wrap').classList.toggle('active')
})

// Signup Form.
(function () {

  const form = document.querySelector('#subscribe-form'),
    submit = subscribe - form.querySelector('#input-email'),
    button = subscribe - form.querySelector('#button-email');
  let message;

  // Message.
  message = document.createElement('span');
  message.classList.add('message');
  form.appendChild(message);

  message._show = function (type, text) {

    message.innerHTML = text;
    message.classList.add(type);
    message.classList.add('visible');

    window.setTimeout(function () {
      message._hide();
    }, 3000);

  };

  message._hide = function () {
    message.classList.remove('visible');
  };

  // Events.
  // Note: If you're *not* using AJAX, get rid of this event listener.
  form.addEventListener('submit', function (event) {

    event.stopPropagation();
    event.preventDefault();

    // Hide message.
    message._hide();

    // Disable submit.
    submit.disabled = true;

    // Process form.
    // Note: Doesn't actually do anything yet (other than report back with a "thank you"),
    // but there's enough here to piece together a working AJAX submission call that does.
    window.setTimeout(function () {


      //Отправка сообщения
      var msg = $('#signup-form').serialize();
      $.ajax({
        type: 'POST',
        url: 'assets/subscribe.php',
        data: msg,
        success: function (data) {
          $('#results').html(data);
        },
        error: function (xhr, str) {
          alert('Возникла ошибка: ' + xhr.responseCode);
        }
      });


      // Reset form.
      $form.reset();

      // Enable submit.
      $submit.disabled = false;

      // Show message.
      $message._show('success', 'Спасибо!');
      //$message._show('failure', 'Something went wrong. Please try again.');

    }, 750);

  });

})();