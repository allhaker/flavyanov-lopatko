$(document).ready(function() {
  slideShow('#demoreel .slideshow');
  slideShow('#about .slideshow');
  slideShow('#other-works .slideshow');
});

function slideShow(id) {
  $(id).cycle({
    fx: 'fade',
    speed: 800,
    timeout: 1000
  }).cycle('pause');

  $(id).hover(function() {
      $(id).cycle('resume', true);
    },
    function() {
      $(id).cycle('pause');
    });

}
