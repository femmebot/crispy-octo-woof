// hide the .spoiler content in <span> tags
$('.spoiler span').hide();
// add a button
$('.spoiler').append('<button>Reveal Spoiler!</button>');
// when button is pressed
  // get rid of button
$( "button" ).click(function() {
    // alert( "Handler for .click() called." );
    $(this).siblings('span').show();
    $(this).remove();
});
  // reveal the spoiler

// $('.spoiler span').text('Reveal Spoiler!');
