
'use strict'
/* Use strict will make our code error safe and it will issue required warning */

/* Way to create an object with direct properties
   Constructor initialization using this keyword
*/
var Car = function(color){
  this._color = color;
}

var redCar = new Car("RED");
console.log("Car color is: " + redCar._color);

/* Closure to avoid direct property access
   indirect way of achieving incapsulation in JavaScripts
*/
var Car = function(_color){
  this.setColor = (color) => {
    _color = color;
  }
  this.getColor = () => {
    return _color;
  };
}

/* prototype can be used to add additional methods to actual object */
Car.prototype = {
  drive: (name) => {
    return "Driving a " + name + " car";
  },
  starRating: () => {
    return "5 Star";
  }
};

var blueCar = new Car("BLUE");
console.log("Direct access won't be possible now, Car color is: " + blueCar._color);
console.log("Car color is: " + blueCar.getColor());
console.log(blueCar.drive('Toyota'));
console.log(blueCar.starRating());


/* Ways to create object inheriting prototype methods from parent Object
   For new objects --> Object.create(prototype) [Ideal way of doing]
   For existing objects --> Object.setPrototypeOf(destinationObj, sourceObject) [Performance bootleneck may arise]
*/
