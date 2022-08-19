//Slick slider
// $(document).ready(function () {
//   $('.c-mainvisual').slick({
//     autoplay: true,
//     autoplaySpeed: 5000,
//     speed: 2000,
//     fade: true,
//     dots: false,
//     cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
//     pauseOnFocus: false,
//     pauseOnHover: false,
//     arrows: false,
//     swipe: false
//   });
// });
$('.c-mainvisual').not('.slick-initialized').slick({
  infinite: true,
  autoplay: true,
  speed: 500,
  fade: true,
  cssEase: 'cubic-bezier(0.25, 0.1, 0.25, 1)',
  dots: false,
  arrows: false,
  swipe: false
});



$(".c-mainvisual__scrolltexta").click(function () {

  $("#c-about").animate({
    scrollTop: 0
  }, 2000, "linear", function () {});

});


// Function click button open menu
const $menu = $('.c-menu')
$('.c-header__btnopen').click(function () {
  $menu.show(500);
  $('.c-header__btnopen').fadeOut(500);
  $('.c-header__btnclose').fadeIn(500);
});
$('.c-header__btnclose').click(function () {
  $menu.hide(500);
  $('.c-header__btnopen').fadeIn(500);
  $('.c-header__btnclose').fadeOut(500);
});
$('.c-menu li').click(function(){
  $menu.hide(500);
  $('.c-header__btnopen').fadeIn(500);
  $('.c-header__btnclose').fadeOut(500);
});
$('.c-menu__recruit').click(function(){
  window.location.href = './#c-recruit';
  $menu.hide(500);
  $('.c-header__btnopen').fadeIn(500);
  $('.c-header__btnclose').fadeOut(500);
});

//Function swap tab
$(function () {
  $('.c-tab li:first-child').addClass('is-active');
  $('.c-tabcontent').hide(500);
  $('.c-tabcontent:first').show(500);
  $('.c-tab li').click(function () {
    $('.c-tab li').removeClass('is-active');
    $(this).addClass('is-active');
    $('.c-tabcontent').hide();
    var activeTab = $(this).find('a').attr('href');
    $(activeTab).fadeIn();
    return false;
  });
});


//Function Backtotop
jQuery(function ($) {
  var $recruitBtn = $(".is-backtotop");
  $recruitBtn.addClass("is-hidetop");
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $recruitBtn.removeClass("is-hidetop");
    } else {
      $recruitBtn.addClass("is-hidetop");
    }
  });
});

$(".is-backtotop").click(function () {
  $("html, body").animate({
    scrollTop: 0
  }, 2000);
  return false;
});

//Function scroll mouse move up item
const items = document.querySelectorAll('.is-moveup');

const active = function (entries) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-view');
    } else {
      entry.target.classList.remove('is-view');
    }
  });
}
const io2 = new IntersectionObserver(active);
for (let i = 0; i < items.length; i++) {
  io2.observe(items[i]);
}

//Funtion click photo open popup photo
jQuery(function ($) {
  $(".c-photowrap__pickup").click(function () {
    $('.c-photowrap__popup').fadeIn();
    $('body').css("overflow","hidden");
    var img = $(this).parent().find("img").attr("src");
    var appearImage = "<div class='c-photowrap__popupimg'>";
    appearImage = appearImage.concat("<img id='is-img' src='" + img + "' alt='私たちの仕事内容の一部を動画と写真でお伝えします.'> <div class='c-btnclosephoto'><div class='c-btnclosephoto__wrapper'> <div class='c-btnclosephoto__wrapperclose c-btnclosephoto__wrapperclose1'></div> <div class='c-btnclosephoto__wrapperclose c-btnclosephoto__wrapperclose2'></div></div><p class='c-btnclosephoto__text'>閉じる</p></div></div>");
    $('.c-photowrap__popupimg').replaceWith(appearImage);
    $('.c-photowrap__popup').click(function () {
      $('.c-photowrap__popup').fadeOut();
      $('body').removeAttr( 'style');
    })
  });
});
$(document).on("click", ".c-btnclosephoto__text", function () {
  $('.c-photowrap__popup').fadeOut();
  $('body').removeAttr( 'style');
});

//Function click interview image 1 popup modal 1
$(document).ready(function () {
  var modal = $('#is-interview__popup1');
  var btn = $('.c-interview__img1');
  btn.click(function () {
    modal.show();
    $('body').css("overflow","hidden");
  });
  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup1')) {
      modal.hide();
      $('body').removeAttr( 'style');
    }
  });
});

//Function click interview image 2 popup modal 2
$(document).ready(function () {
  var modal = $('#is-interview__popup2');
  var btn = $('.c-interview__img2');
  btn.click(function () {
    modal.show();
    $('body').css("overflow","hidden");
  });
  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup2')) {
      modal.hide();
      $('body').removeAttr( 'style');
    }
  });
});

//Function click interview image 3 popup modal 3
$(document).ready(function () {
  var modal = $('#is-interview__popup3');
  var btn = $('.c-interview__img3');
  btn.click(function () {
    modal.show();
    $('body').css("overflow","hidden");
  });
  $(window).on('click', function (e) {
    if ($(e.target).is('#is-interview__popup3')) {
      modal.hide();
      $('body').removeAttr( 'style');
    }
  });
});

//Function close interview popup
$(document).on("click", ".is-close", function () {
  $('.c-interview__popup').fadeOut();
  $('body').removeAttr( 'style');
});
$(document).on("click", ".c-interview__popupwrapper", function () {
  $('.c-interview__popup').fadeOut();
  $('body').removeAttr( 'style');
});


//Function mouse over interview img

var interview = $('.c-interview__img1');
var interview2 = $('.c-interview__img2');
var interview3 = $('.c-interview__img3');
var show1 = $('.c-interview__hide1');
var show2 = $('.c-interview__hide2');
var show3 = $('.c-interview__hide3');
  $(interview).mouseover(function() {
          $(show1).css("visibility","visible");
  })
  .mouseout(function() {
    $(show1).css("visibility","hidden");
  });


  $(interview2).mouseover(function() {
    $(show2).css("visibility","visible");
})
.mouseout(function() {
$(show2).css("visibility","hidden");
});
$(interview3).mouseover(function() {
  $(show3).css("visibility","visible");
})
.mouseout(function() {
$(show3).css("visibility","hidden");
});


var recruit = $('.c-header__recruit');
$(recruit).mouseover(function(){
  $(recruit).css("cursor","pointer");
  $(recruit).css("opacity","0.7");
})
.mouseout(function(){
  $(recruit).removeAttr('style');
})
.click(function(){
  window.location.href = './#c-recruit';
    $menu.hide(500);
    $('.c-header__btnopen').fadeIn(500);
    $('.c-header__btnclose').fadeOut(500);
  
  
})

var recruitf = $('.c-footer__recruit');
$(recruitf).mouseover(function(){
  $(recruitf).css("cursor","pointer");
  $(recruitf).css("opacity","0.7");
})
.mouseout(function(){
  $(recruitf).removeAttr('style');
})
.click(function(){
  window.location.href = './#c-recruit';
  
})



$(document).ready(function(){
  $('.c-gnav li').click(function(){
    $('.c-gnav li').removeClass("is-menuactive");
    $(this).addClass("is-menuactive");

});
});

