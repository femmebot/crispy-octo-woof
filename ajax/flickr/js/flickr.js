// When user clicks on button
  // get the .filter-select button text
  // Make a GET request to Flickr for photos tagged with the selected button's text
  // Receive JSON response
  // Go through each item in response object and format for proper display in #photos

// $.getJSON(flickrAPI, flickrOptions, displayPhotos);
// flickrAPI is the URL to the public API
// data we want to send to filter photos, etc that we get back
// displayPhotos is the callback function that executes what we want to do with the response
var $url = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';  // ?jsoncallback=? query string often used to get JSONP format
var $photoHTML = $('#photos').append('<ul></ul>');

$('.filter-select button').click(function() {
  var $whichButton = $(this).text();
  var $flickrOptions = {
    tags: $whichButton,
    format: "json"
  };

  $('button').removeClass('selected');
  $(this).addClass('selected');

  function getPhotos(response) {
    $.each(response.items,function(i,photo){
      $photoHTML.append('<li class="grid-25 tablet-grid-50"></li>');
      $photoHTML.append('<a href="' + photo.link + 'class="image">');
      $photoHTML.append('<img src="' + photo.media.m + '">');
    });
  };
  $.getJSON($url, $flickrOptions, getPhotos);
  // $('#photos').html($photoHTML);
  console.log($photoHTML);

});




  // $.getJSON( $url, $flickrOptions, function(response){
  //   //$.each(array, function(index, item))
  //   //$(array).each(function( index, element ){}
  //   $(response).each(function(){
  //     $photoHTML.append('<li class="grid-25 tablet-grid-50"></li>');
  //     $photoHTML.append('<a href="' + response.media.m + 'class="image">');
  //     console.log($photoHTML);
  //   });
  // });
