$(document).ready(function(){

  $('#changeWrap').on('click', function(event) {
    $('#thirdFlex').addClass('wrapit');
  });

  $('#changeAlignItems').on('click', function(event) {
    $('#fourthFlex').addClass('stretchit');
  });

  $('#changeFlexChild').on('click', function(event) {
    $('#fifthFlex').addClass('basis');
  });

  $('#changeChild').on('click', function(event) {
    $('#sixthFlex').addClass('child-to-parent');
  });

  $('#clearFlex').on('click', function(event) {
    $('#huitFlex').removeClass('flex-parent').addClass('new-flex-parent group');
    $('#huitFlex').children('.flex-child').removeClass('flex-parent').addClass('new-flex-parent');
  });

})
