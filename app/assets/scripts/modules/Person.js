class Person {
  constructor(fullName, favColor) {
    this.name = fullName;
    this.favoriteColor = favColor;
  }

  greet() {
    console.log("Hello, my name is " + this.name + "and my favorite Color is " + this.favoriteColor);
  }
}

module.exports = Person;
// exports.item1 = 'this is item1';
