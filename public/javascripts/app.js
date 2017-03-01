$(document).ready(function(){
  $('.switch').on('click', function(e) {
    $('.picker-wave-display-wrapper').toggleClass("picker-display-below picker-display-over"); //you can list several class names
    if ($('.switch').find("span").text() == "Blend" ){
      $('.switch').find("span").text("Plants");
    }
    else{
      $('.switch').find("span").text("Blend")
    }
    e.preventDefault();
  });

  var counter = 0;

  $('.inner-orb').on('click', function(e) {
    $(this).find('.orb').toggleClass('selected');

    var bg = $(this).find('.orb').css('background-image');
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "").split("/");
    imgURL = bg[3] + "/" + bg[4] + "/" + bg[5];

    var nm = $(this).find('h4').text();
    counter = (counter + 1) % 3;

    $("#sliders").find('p').remove();
    $("#wave-wrapper").append('<div class="wave' + counter + '"></div>');
    $("#sliders").append(
          '<div class="small-12 columns">'
        +   '<div class="small-12 large-6 columns right">'
        +     '<img src="' + imgURL + '" alt="">'
        +     '<h2>' + nm + '</h2>'
        +   '</div>'
        +   '<div class="small-12 large-6 columns left">'
        +     '<div id=".wave' + counter + '" class="slider"></div>'
        +   '</div>'
        + '</div>'
    );
    $(".slider").slider();

    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('head');
    }
    reload_js('javascripts/sliders.js');

    e.preventDefault();
  });
});
