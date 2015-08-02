
var $paintColor = $('.controls li');
var $newColor = $('#revealColorSelect');
var $slidersInput = $('.sliders input');


function switchPaintColor() {
  // console.log('switchPaintColor event called');
  $paintColor.removeClass('selected');
  $(this).addClass('selected');
};

function toggleAddColorMenu() {
  $('#colorSelect').toggle();
};

function previewNewColor() {
  var $rgb = 'rgb(' + $('#red').val();
  $rgb += ', ' + $('#green').val();
  $rgb += ', ' + $('#blue').val() + ')';
  $('#newColor').css('background-color', $rgb);
  // console.log($rgb);
};

// when user clicks on a new control color
  // deselect the current color
  // add .selected to the new color

$paintColor.click(switchPaintColor);

// when new color button #revealColorSelect is clicked
  // show/toggle the #colorSelect menu

$newColor.click(toggleAddColorMenu);

// when color sliders change, update the #newColor span

$slidersInput.change(previewNewColor);
