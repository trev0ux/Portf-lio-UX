(function ($) {
  $(function () {

    $('.sidenav').sidenav();

  }); // end of document ready
})(jQuery); // end of jQuery name space

$(window).load(function () {
  $('.preloader').fadeOut('slow');

  $(document).ready(function () {
    $('.target').pushpin({
      top: 0,
      bottom: 600,
      offset: 400
    });
  });

});