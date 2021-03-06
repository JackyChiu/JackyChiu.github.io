var opacity = 1;
var lastScrollTop = 0;

$(window).scroll(function() {
  var st = $(this).scrollTop();
  if (st == 0)
    $('.navbar').css('opacity', '1');

  if (opacity > 0.7 && (st > lastScrollTop)) {
    $('.navbar').css('opacity', '-=0.01');
    opacity -= 0.01;
  } else if (opacity < 1) {
    $('.navbar').css('opacity', '+=0.01');
    opacity += 0.01;
  }
  lastScrollTop = st;
});

$(document).ready(function() {

  function close_accordion_section() {
    // Close everything up
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function(e) {
    var currentAttrValue = $(this).attr('href');

    if ($(this).is('.active')) {
      $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
      close_accordion_section();
    } else {
        $(this).find('i').toggleClass('fa-angle-right fa-angle-down');
        close_accordion_section();
        $(this).addClass('active');
        $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
      }
    e.preventDefault();
    });
});
