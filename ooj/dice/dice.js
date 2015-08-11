// function diceRoll() {
//   var sides = 6;
//   var randomNumber = Math.floor(Math.random() * sides) + 1;
//   console.log(randomNumber);
// }
//
// var dice = {
//
// }

// converted the function above into a method using an anonymous function
// var dice = {
//   roll: function () {
//     var sides = 6;
//     var randomNumber = Math.floor(Math.random() * sides) + 1;
//     console.log(randomNumber);
//   }
// }

// made sides into a property so that we can now access/change the value using the method
// here we're using dice.sides to reference the property
// var dice = {
//   sides: 6,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * dice.sides) + 1;
//     console.log(randomNumber);
//   }
// }


// here we're using this.sides instead to reference the object literal
// var dice = {
//   sides: 6,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     console.log(randomNumber);
//   }
// }

// now it returns a value
// var dice = {
//   sides: 6,
//   roll: function () {
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return (randomNumber);
//   }
// };

// rewriting dice as a constructor function
// function Dice (sides) {
//   this.sides = sides;    // note: this = {};
//   this.roll = function(){
//     var randomNumber = Math.floor(Math.random() * this.sides) + 1;
//     return randomNumber;
//   }
// };

// Rewriting as a prototype
function Dice (sides) {
  this.sides = sides;
};

// Dice references the constructor, roll references the property name
Dice.prototype.roll = function diceRoll(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}
