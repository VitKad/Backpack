$(function(){

  $(".popular-blog__items").slick({
    infinite: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: '<button type="button" class="slick-prev"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="px" viewBox="0 0 100 100" version="1.1"> <path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 32.355469 50.023438 L 75.808594 6.566406 C 77.308594 5.066406 77.308594 2.628906 75.808594 1.128906 C 74.304688 -0.375 71.871094 -0.375 70.367188 1.128906 L 24.191406 47.300781 C 22.691406 48.804688 22.691406 51.242188 24.191406 52.746094 L 70.367188 98.917969 C 71.894531 100.394531 74.332031 100.355469 75.808594 98.824219 C 77.246094 97.332031 77.246094 94.96875 75.808594 93.480469 Z M 32.355469 50.023438 "/> </svg></button>',
    nextArrow: '<button type="button" class="slick-next"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="100px" height="px" viewBox="0 0 100 100" version="1.1"><path style=" stroke:none;fill-rule:nonzero;fill:rgb(0%,0%,0%);fill-opacity:1;" d="M 75.863281 47.253906 L 29.613281 1.128906 C 28.097656 -0.378906 25.644531 -0.378906 24.128906 1.136719 C 22.617188 2.652344 22.621094 5.109375 24.136719 6.621094 L 67.636719 50 L 24.136719 93.378906 C 22.621094 94.890625 22.617188 97.34375 24.128906 98.859375 C 24.886719 99.621094 25.878906 100 26.871094 100 C 27.863281 100 28.855469 99.621094 29.613281 98.867188 L 75.863281 52.746094 C 76.59375 52.019531 77.003906 51.027344 77.003906 50 C 77.003906 48.972656 76.59375 47.984375 75.863281 47.253906 Z M 75.863281 47.253906 "/> </svg></button>'
    
  });
  
  var mixer = mixitup('.popular-products__items');
  /* $(".popular-products__tab-link").on("click", function(e){
    e.preventDefault();
    $(".popular-products__tab-link").addClass("popular-products__tab-link--active")
    $(this).addClass("popular-products__tab-link--active")
  }); */
  
  $(".star").rateYo({
    starWidth: "20px",
    normalFill: "#c4c2c2",
    ratedFill: "#3ab845",
    readOnly: true

  });


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


});
  

