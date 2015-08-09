// When user clicks on button
  // get the .filter-select button text
  // Make a GET request to Flickr for photos tagged with the selected button's text
  // Receive JSON response
  // Go through each item in response object and format for proper display in #photos

// $.getJSON(flickrAPI, flickrOptions, displayPhotos);
// flickrAPI is the URL to the public API
// data we want to send to filter photos, etc that we get back
// displayPhotos is the callback function that executes what we want to do with the response


$('.filter-select button').on('click', function() {

  var $url = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';  // ?jsoncallback=? query string often used to get JSONP format
  var $photoHTML = '<ul>';
  var $whichButton = $(this).text();
  var $flickrOptions = {
    tags: $whichButton,
    format: "json"
  };

  $('button').removeClass('selected');
  $(this).addClass('selected');

  function displayPhotos(response) {
    $.each(response.items,function(i,photo) {
      $photoHTML += '<li class="grid-25 tablet-grid-50">';
      $photoHTML += '<a href="' + photo.link + '" class="image">';
      $photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    }); // end each
    $photoHTML += '</ul>';
    $('#photos').html($photoHTML);
  };

  $.getJSON($url, $flickrOptions, displayPhotos);
  // console.log($photoHTML);
});
