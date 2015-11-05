$(document).ready(function() {

  function close_accordion_section() {
    // Close everything up
    $('.accordion .accordion-section-title').removeClass('active');
    $('.accordion .accordion-section-content').slideUp(300).removeClass('open');
  }

  $('.accordion-section-title').click(function(e) {
    // Grab current anchor value
    var currentAttrValue = $(this).attr('href');
    //Change the icon
    $(this).find('i').toggleClass('fa-angle-down fa-angle-up')
    // Open and close here

    if($(this).is('.active')) {
      close_accordion_section();
    }
    else {
      close_accordion_section();
      $(this).addClass('active');
      $('.accordion ' + currentAttrValue).slideDown(300).addClass('open');
    }

    e.preventDefault();

  });
});
