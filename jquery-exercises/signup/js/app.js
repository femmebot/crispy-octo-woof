// hide hints
$('form span').hide();

// password input
var $username = $('#username');
var $password = $('#password');
var $passwordConfirm = $('#confirm_password');
var $submit = $('#submit');

// $submit.addClass('disabled');

function userNameValid(){
  if ($username == "") {
    console.log('username = ""');
  } else {
    console.log('username: ', $username.val());
  };
  return $username.val() !== "";
}

function passwordValid(){
  return $password.val().length >= 6;
};

function passwordsMatch(){
  return $passwordConfirm.val() === $password.val();
};

function canSubmit(){
  return userNameValid() && passwordValid() && passwordsMatch();
};

function passwordEvent(){
  // if password has < 8 characters
  if (passwordValid()) {
    // show hint
    $password.next('span').hide();
  } else {
    $password.next('span').fadeIn('slow');
  };
};

function passwordConfirmEvent(){
  // when event happens on #confirm_password
    // if #confirm_password !== #password
    if (passwordsMatch()) {
      $passwordConfirm.next('span').hide();
    } else {
      $passwordConfirm.next('span').fadeIn('slow');
    };
}

function enableSubmitEvent(){
  // if canSubmit returns true, we need to enable submit
  // since the function will only return when condition is true,
  // we need to add ! to handle when condition is false
  $submit.prop("disabled", !canSubmit());
}

enableSubmitEvent();

// when event happens on #password input
$password.focus(passwordEvent).keyup(passwordEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);

// password confirm
$passwordConfirm.focus(passwordConfirmEvent).keyup(passwordConfirmEvent).keyup(enableSubmitEvent);
