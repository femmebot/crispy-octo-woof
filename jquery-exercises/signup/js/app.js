// hide hints
$('form span').hide();

// password input

var $password = $('#password');
var $passwordConfirm = $('#confirm_password');

function passwordEvent(){
  // if password has < 8 characters
  if ($password.val().length <= 8) {
    // show hint
    $password.next('span').show();
  } else {
    $password.next('span').hide();
  };
};

function passwordConfirmEvent(){
  // when event happens on #confirm_password
    // if #confirm_password !== #password
    if ($passwordConfirm.val() === $password.val()) {
    // show hint
      $passwordConfirm.next('span').hide();
    } else {
      $passwordConfirm.next('span').show();
    };
}

// when event happens on #password input
$password.focus(passwordEvent).keyup(passwordEvent);

// password confirm
$passwordConfirm.focus(passwordConfirmEvent).keyup(passwordConfirmEvent);

$('#submit').click(function(){

});
