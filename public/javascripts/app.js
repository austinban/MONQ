var waveColors = [
];

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

  setInterval(function(){
    if (waveColors.length > 0){
      var wave1 = Math.ceil(Math.random() * waveColors.length) - 1;
      $('.wave1').css({background: waveColors[wave1]});
    }
    else{
      $('.wave1').css({background: "rgba(224,255,255,0.2)"});
    }
    console.log(waveColors.length)
  }, 1000);

  // The whole interaction for adding ingredients
  $('.inner-orb').on('click', function(e) {
    $(this).find('.orb').toggleClass('selected');

    var newWave = '#' + $(this).attr('id');
    if (waveColors.includes(newWave) == false){
      waveColors.push(newWave);
    }
    else{
      var i = waveColors.indexOf(newWave);
      if(i != -1) {
      	waveColors.splice(i, 1);
      }
    }

    // Set the random color
    // $('.wave1').css({
    //   background: "-webkit-gradient(linear, left top, right top, from("+waveColors[wave1]+"), to("+waveColors[wave2]+"))"}).css({
    //    background: "-moz-linear-gradient(left, "+waveColors[wave1]+" 0%, "+waveColors[wave2]+" 100%)"});
    $('.wave1').css({background: waveColors[waveColors.length -1]});

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
          +   '<div class="center-wrap">'
          +     '<div class="small-12 large-6 columns right">'
          +       '<a href="#" id="'+ newWave +'"class="slide-close"><i class="fa fa-times" aria-hidden="true"></i></a>'
          +       '<img src="' + imgURL + '" alt="">'
          +       '<h2>' + nm + '</h2>'
          +    '</div>'
          +    '<div class="small-12 large-6 columns left">'
          +      '<div class="slider"></div>'
          +    '</div>'
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
