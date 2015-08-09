

$('form').submit(function(e) {

  e.preventDefault();

  // the AJAX part
  var $flickerAPI = 'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  var $searchQuery = $('input[type="search"]').val();
  var $flickrOptions = {
    tags: $searchQuery,
    format: "json"
  };
  // author_id: "35034351041@N01";
  
  console.log($searchQuery);


  function displayPhotos(data) {
    var $photoHTML = '<ul>';
    $.each(data.items,function(i,photo) {
      $photoHTML += '<li class="grid-25 tablet-grid-50">';
      $photoHTML += '<a href="' + photo.link + '" class="image">';
      $photoHTML += '<img src="' + photo.media.m + '"></a></li>';
    }); // end each
    $photoHTML += '</ul>';
    $('#photos').html($photoHTML);
  }

  $.getJSON($flickerAPI, $flickrOptions, displayPhotos);

}); // end click
