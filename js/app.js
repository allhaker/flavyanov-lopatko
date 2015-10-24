$(document).ready(function() {
  callPopUp();
  slideShow('#demoreel .slideshow');
  slideShow('#about .slideshow');
  slideShow('#other-works .slideshow');
  centerMessage();
  //Active Language
  $('#lang > div > a').click(function(e) {
    e.preventDefault();
    $('#lang > div > a').removeClass('lang-active');
    $(this).addClass('lang-active');
  });
});

function callPopUp() {
  $('.popup-vimeo').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});
  console.log("success");
}

function centerMessage () {
  var spanOffset = $("footer span").offset().left - $('.block').first().offset().left - parseInt($(".main").css("padding-left"), 10);
  $('#message').css('margin-left', spanOffset)
}

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
