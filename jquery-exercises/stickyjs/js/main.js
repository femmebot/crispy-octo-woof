$(".animsition").animsition({
  inClass: 'fade-in-right-lg',
  outClass: 'fade-out-right-lg',
  linkElement: 'header a',
  inDuration: 1000,
  outDuration: 500
});

$('header').sticky().on('sticky-start', function(){
  $('.description').html('We build <strong>great</strong> apps');
}).on('sticky-end', function(){
  $('.description').html('We build apps');
});

$('h5').sticky({
  topSpacing: 60
}).on('sticky-start', function(){
  $(this).html('Want us to work on your project? <a href="#">Email us.</a>');
}).on('sticky-end', function(){
  $(this).html('Want us to work on your project?');
});
