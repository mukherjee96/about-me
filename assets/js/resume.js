(function($) {
  'use strict'; // Start of use strict

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });
})(jQuery); // End of use strict

// Hide loader on page load
window.onload = function() {
  document.getElementsByClassName('load-bar')[0].style.display = 'none';
};
