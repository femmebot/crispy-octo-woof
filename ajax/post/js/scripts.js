// requires server-side processing

// version using $.post()
$('form').submit(function(e) {

  e.preventDefault();  // prevents form from executing default behavior of going to another page

  var url = $(this).attr("action");
  var formData = $(this).serialize(); // method for using form inputs to create a text string in standard URL-encoded notation

  $.post(url, formData, function(response) {
      $('#signup').html("<p>Thanks for signing up!</p>");
  }); // end post

)};


// version using $.ajax()
// $.ajax( url [,settings] )
$('form').submit(function(e) {

  e.preventDefault();  // prevents form from executing default behavior of going to another page

  var url = $(this).attr("action");
  var formData = $(this).serialize(); // method for using form inputs to create a text string in standard URL-encoded notation

  $.ajax( url, ){
    data: formData,
    type: "POST",
    success: function(response) {
        $('#signup').html("<p>Thanks for signing up!</p>");
    }
  }

)};
