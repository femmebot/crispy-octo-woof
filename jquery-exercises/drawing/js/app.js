
var $paintColor = $('.controls li');
var $newColorButton = $('#revealColorSelect');
var $slidersInput = $('.sliders input');
// var $rgb;

function switchPaintColor() {
  // console.log('switchPaintColor event called');
  $('.controls li').removeClass('selected');
  $(this).addClass('selected');
};

function toggleAddColorMenu() {
  $('#colorSelect').toggle();
};

function getRGB() {
  $rgb = 'rgb(' + $('#red').val();
  $rgb += ', ' + $('#green').val();
  $rgb += ', ' + $('#blue').val() + ')';
  $('#newColor').css('background', $rgb);
  return $rgb;
};

function addNewColor(){
  $('.controls li').removeClass('selected');
  $colorList = $('.controls ul').append('<li></li>');
  $newColorClass = 'color' + $('.controls li').length;
  $newColor = $('.controls li').last().addClass($newColorClass);

  $newColor.css('background', getRGB());
  $newColor.addClass('selected');
};
// when user clicks on a new control color
  // deselect the current color
  // add .selected to the new color
$('.controls li').click(switchPaintColor);

// when new color button #revealColorSelect is clicked
  // show/toggle the #colorSelect menu
$newColorButton.click(toggleAddColorMenu);

// when color sliders change, update the #newColor span
$slidersInput.change(getRGB);

// when user clicks on #addNewColor button after previewing new color
  // add new color <li> to .controls list
  // select the newly-added color
$('#addNewColor').click(addNewColor);

// on mouse events on the canvas, draw lines
