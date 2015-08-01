// hide the .spoiler content in <span> tags
$('.spoiler span').hide();
// add a button
$('.spoiler').append('<button>Reveal Spoiler!</button>');
// when button is pressed
  // get rid of button
$( "button" ).click(function() {
    // alert( "Handler for .click() called." );
    // reveal the spoiler
    $(this).siblings('span').show(); // also see prev() to select previous sibling 
    // remove button
    $(this).remove();
});

// $('.spoiler span').text('Reveal Spoiler!');
