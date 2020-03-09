( function( $ ) {
$( document ).ready(function() {
$('#cssmenu > ul > li > a').click(function() {
  $('#cssmenu li').removeClass('active');
  $(this).closest('li').addClass('active');	
  var checkElement = $(this).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;	
  }		
});
});
} )( jQuery );


( function( $ ) {
$( document ).ready(function() {
$('.middle').click(function() {
  $('#cssmenu li').removeClass('active');
  $('#cssmenu').children('li').addClass('active');
  var Element_a = $('#cssmenu').find('a');
  var checkElement = $(Element_a).next();
  if((checkElement.is('ul')) && (checkElement.is(':visible'))) {
    $(this).closest('li').removeClass('active');
    checkElement.slideUp('normal');
	$('.middle').css('background-image','url(icon-widget-tools.png)');
  }
  if((checkElement.is('ul')) && (!checkElement.is(':visible'))) {
    $('#cssmenu ul ul:visible').slideUp('normal');
    checkElement.slideDown('normal');
	$('.middle').css('background-image','url(icon-collapse.png)');
  }
  if($(this).closest('li').find('ul').children().length == 0) {
    return true;
  } else {
    return false;
  }
});
});
} )( jQuery );


( function( $ ) {
$( document ).ready(function() {
$('#sidenavTrigger').click(function() {
  var checkElement = $(this).attr('class');
  if(checkElement == 'triggerSidenav')
  {
	  $(this).attr('class','triggerSidenavExpand');
	  $('#headpink').hide();
	  $('#cssmenu').hide();
  }
  else
  {
	  $(this).attr('class','triggerSidenav');
	  $('#headpink').show();
	  $('#cssmenu').show();
  }
});
});
} )( jQuery );
