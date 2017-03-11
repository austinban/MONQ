$( function() {
  $( ".slider" ).slider({
    value: 100,
    slide: handleSliderChange
  });
});


function handleSliderChange(event, slider){
  var capture = $(this).attr('id');
  $(capture).css('opacity', slider.value / 100);
}

$('.slide-close').on('click', function(e) {
  var removeHex = $(this).attr("id");
  $(removeHex).find('.orb').removeClass('selected');
  var i = waveColors.indexOf(removeHex);
  if(i != -1) {
    waveColors.splice(i, 1);
  }

  $(this).parents( ".slider-block" ).fadeOut('fast', function(){
    $(this).remove();
  });
  e.preventDefault();
});
