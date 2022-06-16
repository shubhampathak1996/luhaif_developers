function openheader() {
  var main_menu = document.getElementsByClassName('main_menu')
  console.log('hello')
}
const navchange = $('.navvvv')
$('.navvvv').mouseenter(function () {
  console.log($(this).next())
  $('#header').addClass('active-header')
  $(this).children('ul').css('display', 'block')
})
$('.navvvv').mouseleave(function () {
  $('#header').removeClass('active-header')
  $('.navvvv>ul').css('display', 'none')
})
//
$(window).scroll(function () {
  var scroll = $(window).scrollTop()
  if (scroll >= 600) {
    $('.header').addClass('bg')
  } else {
    $('.header').removeClass('bg')
  }
})
//
$(window).scroll(function () {
  var scroll = $(window).scrollTop()
  if (scroll >= 400) {
    $('.page-banner').addClass('navSlideDown')
  }
})
$('#slider .owl-carousel').owlCarousel({
  margin: 10,
  items: 1,
  responsiveClass: true,
  autoplay: 1000, //Set AutoPlay to 3 seconds
  dots: true,
  smartSpeed: 800,
  nav: true,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 2,
      nav: false,
    },
    1000: {
      items: 5,
      nav: true,
      loop: false,
    },
  },
})
$('.owl-carousel').owlCarousel({
  margin: 10,
  items: 1,
  responsiveClass: true,
  autoplay: 1000, //Set AutoPlay to 3 seconds
  dots: true,
  smartSpeed: 800,
  nav: true,

  responsive: {
    0: {
      items: 1,
      nav: true,
    },
    600: {
      items: 1,
      nav: false,
    },
    1000: {
      items: 1,
      nav: true,
      loop: false,
    },
  },
})
