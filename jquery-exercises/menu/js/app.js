// change menu to adapt to mobile screen sizes

// create select element and append
var $select = $('<select></select>');
$('#menu').append($select);

// cycle through all the links
$('#menu a').each(function(){
  $anchor = $(this);
  $href = $anchor.attr('href');

  // Create an option in the select menu
  var $option = $('<option></option>');

  // Option's value is the value of the href
  $option.val($href);

  // Option's text is the text of the link
  $option.text($anchor.text());

  // Append option to select element
  $select.append($option);

  // Selected list item becomes the selected option in the select menu

  // $select.append('<option value="$href">$anchor.text()</option');
});

// Create a button
var $button = $('<button>Go</button>');
$('#menu').append($button);

// Bind click to button
$button.click(function(){
  // Go to select's location
  window.location = $select.val();
});

// Modify CSS to hide links on small screen widths
  // hide #menu ul on smaller screen widths
  // show select menu on smaller screen widths

// On desktop (wider) screens
  // show #menu ul
  // hide select menu
