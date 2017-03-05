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
  $(this).parents( ".slider-block" ).fadeOut('fast', function(){
    $(this).remove(); 
  });
  e.preventDefault();
});
