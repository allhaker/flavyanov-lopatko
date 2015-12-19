$(document).ready(function() {
  pageInit();
  //Active Language
  $('#lang > div > a').click(function(e) {
    e.preventDefault();
    $('#lang > div > a').removeClass('lang-active');
    $(this).addClass('lang-active');
  });
});

function pageInit() {
  reorderBlock();
  callPopUp();
  slideShow('#demoreel .cycle-slideshow');
  slideShow('#about .cycle-slideshow');
  slideShow('#other-works .cycle-slideshow');
  centerMessage();
  onWinResize();
}

function callPopUp() {
  $('.popup-vimeo').magnificPopup({
    disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });
}

function centerMessage() {
  if (checkMobility()) {
    $('#message').css('margin-left', 0);
  } else {
    var spanOffset = 0;
    var checkElement = $('.block').first();
    var checkElement2 = $(".main");
    if (!checkElement.length) {
      checkElement = $('.portfolio').first();
      checkElement2 = $(".portfolio");
    }
    console.log(checkElement.offset());

    spanOffset = $("footer span").offset().left - checkElement.offset().left - parseInt(checkElement2.css("padding-left"), 10);
    console.log(parseInt($(".main").css("padding-left")));
    $('#message').css('margin-left', spanOffset);
  }
}

function reorderBlock() {
  if (checkMobility()) {
    $("#about .col-sm-4").before($("#about .col-sm-8"));
    $("#micha .block-text").before($("#micha .block-img"));
  } else {
    $("#about .col-sm-8").before($("#about .col-sm-4"));
    $("#micha .block-img").before($("#micha .block-text"));

  }
}

function onWinResize() {
  $(window).resize(function() {
    centerMessage();
    reorderBlock();
  });
}

function checkMobility() {
  return ((parseInt($(window).width())) < 750) ? true : false;
}

function checkSuperMobility() {
  return ((parseInt($(window).width())) < 493) ? true : false;
}

function checkMiddleMobility() {
  return ((parseInt($(window).width())) < 1440) ? true : false;
}

function slideShow(id) {
  $(id).cycle('pause');

  $(id).parent().parent().hover(function() {
      $(id).cycle('resume');
    },
    function() {
      $(id).cycle('pause');
    });
}
