// darken out background and focus in on a single image
// instead of clicking on image that takes you to a dead-end
$overlay = $('<div id="overlay"></div>');
$image = $('<img>');
$caption = $('<p></p>');

// insert the image tag in the overlay div
$overlay.append($image);
$overlay.append($caption);

// 1. Capture the click event on a link to an image
$("#imageGallery a").click(function(event){
  event.preventDefault();
  var $imageLocation = $(this).attr("href");
  $image.attr("src", $imageLocation);
  var $captionText = $(this).children().attr("alt");
  $caption.text($captionText);
  $overlay.show();
  console.log($captionText);
});
  // 1.1 Show the overlay
  // 1.2 Update overlay with the image linked in the link
  // 1.3 Get child's alt attribute and set caption


// 2. Add overlay
  // darken the background
  // add image centered in the viewport
  // add caption
  // resize that image to full size
  // disable interactivity for other images
$("body").append($overlay);


// 3. when user clicks on overlay
    // 3.1 hide overlay
$overlay.click(function(){
  $overlay.hide();
})
