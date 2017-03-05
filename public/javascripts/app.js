var waveColors = new Array(
  "#880e4f",
  "#ffcc80"
);

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

  // The whole interaction for adding ingredients
  $('.inner-orb').on('click', function(e) {
    // $(this).find('.orb').toggleClass('selected');

    var waves = "";

    for (var i = 0, len = waveColors.length; i < len; i++) {
      waves += waveColors[i] + ",";
    }
    waves = "linear-gradient("+waves+")";

    $('#wave1').css({
      background: "-webkit-gradient(linear, left top, right top, from("+waveColors[0]+"), to("+waveColors[1]+"))"}).css({
       background: "-moz-linear-gradient(left, "+waveColors[0]+" 0%, "+waveColors[1]+" 100%)"});

    // Find the bg image url
    var bg = $(this).find('.orb').css('background-image');
    bg = bg.replace('url(','').replace(')','').replace(/\"/gi, "").split("/");
    imgURL = bg[3] + "/" + bg[4] + "/" + bg[5];

    // Find the name of the ingredient and make a space collapsed version
    var nm = $(this).find('h4').text();
    var nmTrim = nm.replace(/ /g,'');

    // If the doesn't exist, add it, else, remove it
    $("#sliders").find('p').remove();
    if (!($("#sliders").find("#" + nmTrim).length)){
      $("#sliders").append(
            '<div class="small-12 columns slider-block" id="' + nmTrim + '">'
          +   '<div class="small-12 large-6 columns right">'
          +     '<a href="#" class="slide-close"><i class="fa fa-times" aria-hidden="true"></i></a>'
          +     '<img src="' + imgURL + '" alt="">'
          +     '<h2>' + nm + '</h2>'
          +   '</div>'
          +   '<div class="small-12 large-6 columns left">'
          +     '<div id=".wave' + counter + '" class="slider"></div>'
          +   '</div>'
          + '</div>'
      );
    }
    else{
      $("#sliders").find("#" + nmTrim).fadeOut('fast', function(){
        $(this).remove();
      });
    }

    // Reload the sliders to get it to apply to the newly added sliders
    $(".slider").slider();
    function reload_js(src) {
        $('script[src="' + src + '"]').remove();
        $('<script>').attr('src', src).appendTo('head');
    }
    reload_js('javascripts/sliders.js');

    e.preventDefault();
  });

});
