$(document).ready(function(){
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"> <span class="side">'+ (index + 1) + '</span></span>';
      },
    },
    autoplay: {
      delay: 3000,
    },
  });
  $('.yükle').click(function(){
    $('.file-upload').trigger( "click" );
  });

  $('.search-button').click(function() {
    $('.search-box').addClass('ses');
  });

  $('.cross').click(function() {
    $('.search-box').removeClass('ses');
  });
});