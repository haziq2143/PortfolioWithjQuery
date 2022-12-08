const navHeight = $('nav#nav').height();
console.log({ navHeight });
const $navGroup = $('nav .nav-group');
const navOrigPadding = ($navGroup.innerWidth() - $navGroup.width()) / 2;

$('.hamburger').on('click', function () {
  $('.menus.nav-group').toggleClass('show');
});

const minNavPadding = 10;
$('nav').css({ 'background-color': 'rgba(256, 256, 256, 0)' });

$(window).scroll(function () {
  const windowScroll = $(window).scrollTop();
  if (windowScroll < navHeight) {
    const padding = navOrigPadding - windowScroll / 2;
    let newPadding = padding >= minNavPadding ? padding : minNavPadding;
    newPadding = newPadding > navOrigPadding ? navOrigPadding : newPadding;
    const opacity = 1 - (newPadding - minNavPadding) / (navOrigPadding - minNavPadding);

    const newOpacity = opacity >= 1 ? 1 : opacity;
    const boxShadowOpacity = opacity >= 1 ? 0.75 : opacity;

    $('nav').css({ 'background-color': `rgba(252, 163, 17, ${newOpacity})` });
    $('nav .nav-group').css({ padding: `${newPadding}px` });
  }
});

const typedTextSpan = document.querySelector('.typed-text');
const cursorSpan = document.querySelector('.cursor');

const textArray = ['Front-End Developer', 'Freelancer', 'Student'];
const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains('typing')) cursorSpan.classList.add('typing');
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove('typing');
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// end
$(window).scroll(function () {
  const scrolled = $(this).scrollTop();
  console.log(scrolled);
  if ($(window).width() > 1200) {
    if (scrolled < 300 && scrolled > 224) {
      $('.title-second').addClass('animasi-1');
    }
    if (scrolled > 95) {
      $('.image').css('animation', 'fadeInRight 2s 0.7s both');
    }
    if (scrolled > 398) {
      $('.biodata').css('animation', 'fadeIn 2s 0.2s both');
    }
    if (scrolled > 828) {
      $('.title-skill').css('animation', 'fadeIn 1s 0.2s both');
    }

    if (scrolled > 1047) {
      $('.persentase-1').css('animation', 'skillsHtml 1s .2s both');
    }
    if (scrolled > 1123) {
      $('.persentase-2').css('animation', 'skillsCss 1s .2s both');
    }
    if (scrolled > 1223) {
      $('.persentase-3').css('animation', 'skillsJs 1s .2s both');
    }
    if (scrolled > 1323) {
      $('.persentase-4').css('animation', 'skillsBootstrap 1s .2s both');
    }
    if (scrolled > 1423) {
      $('.persentase-5').css('animation', 'skillsReact 1s .2s both');
    }
    if (scrolled > 1522) {
      $('.persentase-6').css('animation', 'skillsjQuery 1s .2s both');
    }
    if (scrolled > 1620) {
      $('.persentase-7').css('animation', 'skillsUiUx 1s .2s both');
    }
    if (scrolled > 1720) {
      $('.title-fourth').css('animation', 'fadeIn 1s 0.2s both');
    }
    if (scrolled > 1860) {
      $('.img1').css('animation', 'fadeIn 1.5s 0.2s both');
      $('.img2').css('animation', 'fadeIn 1.5s 0.5s both');
    }
    if (scrolled > 2265) {
      $('.img3').css('animation', 'fadeIn 1.5s 0.2s both');
    }
    if (scrolled > 2762) {
      $('.title-fifth').css('animation', 'fadeIn 1.5s 0.5s both');
    }
    if (scrolled > 2890) {
      $('.certificate').css('animation', 'fadeIn 1.5s 0.5s both');
    }

    if (scrolled > 3546 && scrolled < 4566) {
      parallax();
    }
    if (scrolled > 3800) {
      $('.form').css('animation', 'fadeIn 1.5s 0.5s ease-in');
    }
  }

  function parallax() {
    $('.sixth-component').css('background-positionY', scrolled * -0.6 + 'px');
  }
});

$(window).scroll(function () {
  const scrolled = $(this).scrollTop();
  console.log(scrolled);
  if ($(window).width() > 600 && $(window).width() < 1200) {
    if (scrolled > 200) {
      $('.title-second').addClass('animasi-1');
    }
    if (scrolled > 110) {
      $('.image').addClass('animasi-1');
    }

    if (scrolled > 400) {
      $('.biodata').css('animation', 'fadeIn 2s 0.2s both');
    }
    if (scrolled > 1190) {
      $('.title-skill').css('animation', 'fadeIn 1s 0.2s both');
    }

    if (scrolled > 1270) {
      $('.persentase-1').css('animation', 'skillsHtml 1s .2s both');
    }
    if (scrolled > 1330) {
      $('.persentase-2').css('animation', 'skillsCss 1s .2s both');
    }
    if (scrolled > 1380) {
      $('.persentase-3').css('animation', 'skillsJs 1s .2s both');
    }
    if (scrolled > 1430) {
      $('.persentase-4').css('animation', 'skillsBootstrap 1s .2s both');
    }
    if (scrolled > 1480) {
      $('.persentase-5').css('animation', 'skillsReact 1s .2s both');
    }
    if (scrolled > 1530) {
      $('.persentase-6').css('animation', 'skillsjQuery 1s .2s both');
    }
    if (scrolled > 1580) {
      $('.persentase-7').css('animation', 'skillsUiUx 1s .2s both');
    }
    if (scrolled > 1760) {
      $('.title-fourth').css('animation', 'fadeIn 1s 0.4s both');
    }
    if (scrolled > 1900) {
      $('.img1').css('animation', 'fadeIn 1.5s 0.2s both');
    }
    if (scrolled > 2270) {
      $('.img2').css('animation', 'fadeIn 1.5s 0.5s both');
    }
    if (scrolled > 2670) {
      $('.img3').css('animation', 'fadeIn 1.5s 0.2s both');
    }
    if (scrolled > 3150) {
      $('.title-fifth').css('animation', 'fadeIn 1.5s 0.5s both');
    }
    if (scrolled > 3280) {
      $('.certificate').css('animation', 'fadeIn 1.5s 0.5s both');
    }
    if (scrolled > 4690) {
      $('.form').css('animation', 'fadeIn 1.5s 0.5s ease-in');
    }

    $('.modal-dialog').removeClass('modal-xl');
    $('.modal-dialog').addClass('modal-xl');
    $('.img-modal').removeClass('size-img');
    $('.img-modal').addClass('img-tablet');
  }
});
