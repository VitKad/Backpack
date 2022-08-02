$(function(){
  $('.article__navigation-link').on('click', function(e){
    e.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top}, 1000);
  });

  $('.tabs__link').on('click', function(e){
    e.preventDefault();
    $('.tabs__link').removeClass('tabs__link--active');
    $(this).addClass('tabs__link--active');
    $('.tabs__block').removeClass('tabs__block--active');
    $($(this).attr('href')).addClass('tabs__block--active');
  });

  
  $(".article__slider").slick({
    infinite: true,
   
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="px" height="50px" viewBox="0 0 28 50" version="1.1"> <g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(18.431373%,18.823529%,20.784314%);fill-opacity:1;" d="M 3.441406 24.46875 L 26.148438 2.367188 C 26.707031 1.824219 26.707031 0.953125 26.148438 0.40625 C 25.589844 -0.136719 24.695312 -0.136719 24.136719 0.40625 L 0.417969 23.496094 C -0.140625 24.039062 -0.140625 24.910156 0.417969 25.453125 L 24.136719 48.53125 C 24.410156 48.796875 24.777344 48.941406 25.136719 48.941406 C 25.496094 48.941406 25.863281 48.808594 26.136719 48.53125 C 26.695312 47.988281 26.695312 47.117188 26.136719 46.574219 Z M 3.441406 24.46875 "/> </g> </svg> </button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="px" height="50px" viewBox="0 0 28 50" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(18.431373%,18.823529%,20.784314%);fill-opacity:1;" d="M 23.125 24.472656 L 0.417969 46.574219 C -0.140625 47.117188 -0.140625 47.992188 0.417969 48.535156 C 0.976562 49.078125 1.875 49.078125 2.429688 48.535156 L 26.148438 25.445312 C 26.707031 24.902344 26.707031 24.03125 26.148438 23.488281 L 2.429688 0.410156 C 2.15625 0.144531 1.789062 0 1.429688 0 C 1.074219 0 0.703125 0.132812 0.429688 0.410156 C -0.128906 0.953125 -0.128906 1.824219 0.429688 2.371094 Z M 23.125 24.472656 "/> </g> </svg> </button>'
    
  });

  $('.slider-product__full').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    draggable: false,
    asNavFor: '.slider-product__thumb'
  });
  $('.slider-product__thumb').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.slider-product__full',
    dots: false,
    centerMode: true,
    focusOnSelect: true,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="ui-g1" style="transform:rotate(180deg);"><path fill="currentColor" d="M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z"></path></svg></button>',

    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" class="ui-g1" ><path fill="currentColor" d="M5.293 12.293a1 1 0 1 0 1.414 1.414l5-5a1 1 0 0 0 0-1.414l-5-5a1 1 0 0 0-1.414 1.414L9.586 8l-4.293 4.293Z"></path></svg></button>'

  });


  $(".star").rateYo({
    starWidth: "20px",
    normalFill: "#c4c2c2",
    ratedFill: "#3ab845",
    readOnly: true
  });
  $(".reviews__evaluation-star").rateYo({
    starWidth: "16px",
    normalFill: "#c4c2c2",
    ratedFill: "#3ab845",
    readOnly: true
  });
  $(".reviews__form-star").rateYo({
    starWidth: "16px",
    normalFill: "#c4c2c2",
    ratedFill: "#3ab845",
    fullStar: true
    
  });


 

  $(".filter-price__input").ionRangeSlider({
    type: "double",
    postfix: " руб.",
    step: 1000
});


  $(".filter-category__accordion").accordionjs({
    activeIndex: false
  
  });

  $('.top-filters__select, .product__count-input').styler();

  $('.top-filters__btn--grid').on('click', function(){
    $('.top-filters__btn--list').removeClass('top-filters__btn--active');
    $(this).addClass('top-filters__btn--active');
    $('.shop__content-items').removeClass('shop__content-items--list');
  });

  $('.top-filters__btn--list').on('click', function(){
    $('.top-filters__btn--grid').removeClass('top-filters__btn--active');
    $(this).addClass('top-filters__btn--active');
    $('.shop__content-items').addClass('shop__content-items--list');
  });
  
  $(".popular-blog__items").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><?xml version="1.0" encoding="UTF-8"?><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="px" height="50px" viewBox="0 0 28 50" version="1.1"> <g id="surface1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(18.431373%,18.823529%,20.784314%);fill-opacity:1;" d="M 3.441406 24.46875 L 26.148438 2.367188 C 26.707031 1.824219 26.707031 0.953125 26.148438 0.40625 C 25.589844 -0.136719 24.695312 -0.136719 24.136719 0.40625 L 0.417969 23.496094 C -0.140625 24.039062 -0.140625 24.910156 0.417969 25.453125 L 24.136719 48.53125 C 24.410156 48.796875 24.777344 48.941406 25.136719 48.941406 C 25.496094 48.941406 25.863281 48.808594 26.136719 48.53125 C 26.695312 47.988281 26.695312 47.117188 26.136719 46.574219 Z M 3.441406 24.46875 "/> </g> </svg> </button>',
    nextArrow: '<button type="button" class="slick-next"><?xml version="1.0" encoding="UTF-8"?> <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="px" height="50px" viewBox="0 0 28 50" version="1.1"><g id="surface1"> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(18.431373%,18.823529%,20.784314%);fill-opacity:1;" d="M 23.125 24.472656 L 0.417969 46.574219 C -0.140625 47.117188 -0.140625 47.992188 0.417969 48.535156 C 0.976562 49.078125 1.875 49.078125 2.429688 48.535156 L 26.148438 25.445312 C 26.707031 24.902344 26.707031 24.03125 26.148438 23.488281 L 2.429688 0.410156 C 2.15625 0.144531 1.789062 0 1.429688 0 C 1.074219 0 0.703125 0.132812 0.429688 0.410156 C -0.128906 0.953125 -0.128906 1.824219 0.429688 2.371094 Z M 23.125 24.472656 "/> </g> </svg> </button>'
    
  });


  
  
  var mixer = mixitup('.popular-products__items, .blog__items');

  /* $(".popular-products__tab-link").on("click", function(e){
    e.preventDefault();
    $(".popular-products__tab-link").addClass("popular-products__tab-link--active")
    $(this).addClass("popular-products__tab-link--active")
  }); */
 


  function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const seconds = Math.floor((total / 1000) % 60);
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));
    
    return {
      total,
      days,
      hours,
      minutes,
      seconds
    };
  }
  
  function initializeClock(id, endtime) {
    const clock = document.querySelector('.promo__timer');
    const daysSpan = clock.querySelector('.promo__timer-num--days');
    const hoursSpan = clock.querySelector('.promo__timer-num--hours');
    const minutesSpan = clock.querySelector('.promo__timer-num--minutes');
    const secondsSpan = clock.querySelector('.promo__timer-num--seconds');
  
    function updateClock() {
      const t = getTimeRemaining(endtime);
  
      daysSpan.innerHTML = t.days;
      hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
      minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
      secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
  
      if (t.total <= 0) {
        clearInterval(timeinterval);
      }
    }
  
    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
  }
  
  const deadline = $('.promo__timer').attr('data-time');
  initializeClock('promo__timer', deadline);


  $('.popular-products__btn').on('click', function(){
    $('.popular-products__btn').css({'display':'none'});
  });

  $('.popular-products__tab-link:first-child').on('click', function(){
    $('.popular-products__btn').css({'display':'flex'});
  });


  

});
  

