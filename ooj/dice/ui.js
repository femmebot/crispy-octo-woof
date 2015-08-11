function printNumber(number) {
  var placeholder = document.getElementById("placeholder");
  placeholder.innerHTML = number;
}

var button = document.getElementById("button");

button.onclick = function() {
  // var result = 1;
  // printNumber(result);

  // var result = dice.roll();  // need to create an instance of dice.roll method
  // printNumber(result);

  // using constructor function
  var dice = new Dice(6);
  printNumber (dice.roll());
};
