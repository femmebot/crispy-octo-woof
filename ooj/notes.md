# Object-Oriented JavaScript

An object is a container for values in the form of properties and functionality in the form of methods. Provides data storage in properties.

* Methods provide functionality and may return values.
* You can _get_ and _set_ values of Properties.
* The name of a property is a _key_
* The contents of a property is known as a _value_

Native Objects in JavaScript
I.e., Number, String, Array, Boolean

Host Objects (provided by the application environment)
I.e., Document, Console, Element

Your own Objects
I.e., anything you create

All objects have state and behavior
All object keys are strings

`person.name` is the same as `person["name"]`

#### Constructor Functions

* Describes how any object should be created
* Create similar objects
* Each object created is known as an instance of that object type

```
function Contact (name, email) {
  this.name = name;    // note: this = {};
  this.email = email;
  this.sendEmail = function(){
    // do something
  }
}

var contact = new Contact ("Andrew", "andrew@email.com");
var contact2 = new Contact ("Dave", "dave@email.com");
```
`new` creates a unique instance of the Contact constructor function.
Note that that Contact is capitalized as a convention to indicate constructors.
Constructors automatically return `this` so adding `return this;` at the end isn't necessary and typically eliminated.

#### Methods with Prototypes

[Object Prototypes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype)

Each instance of a constructor runs the entire code within it

```
// Dice as a constructor function
function Dice (sides) {
  this.sides = sides;    // note: this = {};
  this.roll = function(){
    var randomNumber = Math.floor(Math.random() * this.sides) + 1;
    return randomNumber;
  }
};

var dice = new Dice(6);
var dice12 = new Dice(12);

```

A more processing-efficient way would be to extract the internal function outside the constructor and simply called from within the constructor function

```
function diceRoll(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

function Dice (sides) {
  this.sides = sides;  
  this.roll = diceRoll;
};

var dice = new Dice(6);
var dice12 = new Dice(12);

```

Converting the function into a prototype helps make it easier to trace which external functions go with which constructors. Prototypes can be used for templates for values and behaviors to be shared across objects.

```
function Dice (sides) {
  this.sides = sides;  
  // this.roll = diceRoll;  // this is no longer needed and replaced by the prototype
};

// Dice references the constructor, roll references the property name
Dice.prototype.roll = function diceRoll(){
  var randomNumber = Math.floor(Math.random() * this.sides) + 1;
  return randomNumber;
}

var dice = new Dice(6);
var dice12 = new Dice(12);
```
