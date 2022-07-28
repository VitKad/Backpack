$(function(){

  



 /*  if (window.matchMedia('screen and (max-width: 1000px)').matches) {
      const scene = document.querySelectorAll('.video-popup');
  window.addEventListener("scroll", function(){
      scene.forEach(function(userItem) {
          let offset = this.window.pageYOffset;
          userItem.style.backgroundPositionY = offset * 0 + "px";
        });
     
  });


  }


 */

/*   $(document).ready(function(){function a(){$("#video").parallax("100%",.2)}}); */


  /* $(window).load(function(){$(".preloader").fadeOut(1e3)}),$(document).ready(function(){$(".popup-youtube").magnificPopup({type:"iframe",mainClass:"mfp-fade",removalDelay:160,preloader:!1,fixedContentPos:!1})}),jQuery(document).ready(function(a){if(a(".iso-box-wrapper").length>0){var b=a(".iso-box-wrapper"),c=a(".iso-box img");b.imagesLoaded(function(){b.isotope({layoutMode:"fitRows",itemSelector:".iso-box"}),c.load(function(){b.isotope("reLayout")})}),a(".filter-wrapper li a").click(function(){var c=a(this),d=c.attr("data-filter");if(b.isotope({filter:d,animationOptions:{duration:750,easing:"linear",queue:!1}}),c.hasClass("selected"))return!1;var e=c.closest(".filter-wrapper");return e.find(".selected").removeClass("selected"),c.addClass("selected"),!1})}}),$(document).ready(function(){function a(){$("#about").parallax("100%",.1),$("#feature").parallax("100%",.3),$("#about").parallax("100%",.1),$("#video").parallax("100%",.2),$("#menu").parallax("100%",.3),$("#team").parallax("100%",.3),$("#gallery").parallax("100%",.1),$("#contact").parallax("100%",.2)}$(".navbar-collapse a").click(function(){$(".navbar-collapse").collapse("hide")}),$(function(){$("#home a, .navbar-default a").bind("click",function(a){var b=$(this);$("html, body").stop().animate({scrollTop:$(b.attr("href")).offset().top-49},1e3),a.preventDefault()})}),$(function(){jQuery(document).ready(function(){$("#home").backstretch(["assets/images/home-bg-slideshow1.jpg","assets/images/home-bg-slideshow2.jpg","assets/images/home-bg-slideshow3.jpg"],{duration:2e3,fade:750})})}),$(window).load(function(){$(".flexslider").flexslider({animation:"slide"})}),a(),$("#gallery .col-md-4 a").nivoLightbox({effect:"fadeScale"}),new WOW({mobile:!1}).init()});
 */



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
  

