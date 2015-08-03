
var $colorPalette = $('.controls li');
var $newColorButton = $('#revealColorSelect');
var $slidersInput = $('.sliders input');
var $color = $('.selected').css('background-color');
var $newColor;
var $selectedColorRGB;
var $canvas = $('canvas');
// need to access first canvas in order to call a special method, getContext()
var context = $('canvas')[0].getContext('2d');  // same as document.getElementsByTagName('canvas')[0];



function switchPaintColor() {
  $(this).siblings().removeClass('selected');
  $(this).addClass('selected');
  $selectedColor = $(this).css('background-color');
  // console.log('switchPaintColor event called');
  // console.log($selectedColor);
};

function toggleAddColorMenu() {
  $('#colorSelect').toggle();
};

function getRGB() {
  $rgb = 'rgb(' + $('#red').val();
  $rgb += ', ' + $('#green').val();
  $rgb += ', ' + $('#blue').val() + ')';
  $('#newColor').css('background-color', $rgb);
  return $rgb;
};

function addNewColor(){
  $('.controls li').removeClass('selected');
  $colorList = $('.controls ul').append('<li></li>');
  $newColorClass = 'color' + $('.controls li').length;
  $newColor = $('.controls li').last().addClass($newColorClass);
  $selectedColorRGB = getRGB();
  $newColor.css('background-color', $selectedColorRGB);
  $newColor.addClass('selected');

  // bind switchPaintColor event handler
  // $newColor.click(switchPaintColor);
  $newColor.on('click', switchPaintColor);
  // console.log($selectedColorRGB);
};
// when user clicks on a new control color
  // deselect the selected color
  // add .selected to the clicked color
$colorPalette.click(switchPaintColor);

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

context.beginPath();
context.moveTo(10,10);
context.lineTo(20,10);
context.stroke();
