window.state={
  downloadLinks:{
    android:"./android",
    ios:"./ios"
  }
}

window.__proto__.getOS = function () {
  var userAgent = window.navigator.userAgent,
    platform = window.navigator.platform,
    macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
    windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
    iosPlatforms = ['iPhone', 'iPad', 'iPod'],
    os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'mac_s';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'ios';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'windows';
  } else if (/Android/.test(userAgent)) {
    os = 'android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'linux';
  }

  return os;
}
const acardion = document.querySelectorAll('.right-flex');
const acardionLeft = document.querySelectorAll('.img');

acardion.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".right-flex.active").classList.remove("active");
    item.classList.add("active");
  });
});

const open_bar = document.querySelector('.open-btn');
const mobil_list = document.querySelector('.listMobil');
const Body = document.querySelector('#body');
open_bar?.addEventListener('click', () => {
  mobil_list.classList.toggle('active');
  Body.classList.toggle('active');
});


window.sr = new ScrollReveal()
ScrollReveal({
  reset: false
});

sr.reveal('.banner-left', {
  origin: "top",
  distance: "-300px",
  delay: 400
})

sr.reveal('.banner-right', {
  origin: "bottom",
  distance: "-300px",
  delay: 400
})

sr.reveal('.logo', {
  scale: 0.8,
  interval: 200
})

sr.reveal('.app-top-img', {
  origin: "left",
  distance: "300px",
  delay: 400
})

sr.reveal('.span', {
  origin: "top",
  distance: "200px",
  delay: 400
})

sr.reveal('.anime', {
  origin: "top",
  distance: "200px",
  delay: 400
})

sr.reveal('.right-item', {
  origin: "left",
  distance: "200px",
  delay: 400
})

sr.reveal('.emer-left', {
  duration: 1500
})

sr.reveal('.emer-right', {
  duration: 1500
})

sr.reveal('.card-flex', {
  scale: 0.8,
  interval: 200
})

sr.reveal('.coment', {
  origin: "top",
  distance: "100px",
  interval: 200
})

sr.reveal('.last-item', {
  origin: "top",
  distance: "100px",
  interval: 200
})

const swiper = new Swiper(".mySwiper", {
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    140: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  }
});


const navLink = document.querySelectorAll('.nav-link');

function deleteNavLink() {
  mobil_list.classList.remove("active");
}

navLink.forEach((n) => n.addEventListener("click", deleteNavLink));


