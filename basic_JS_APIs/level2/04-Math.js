function mathMethods(value) {
  console.log("Original Value:", value);
//gives the original value passed to the function
  let rounded = Math.round(value);
  console.log("After round():", rounded);
//gives the value rounded to the nearest integer
  let ceiling = Math.ceil(value);
  console.log("After ceil():", ceiling);
//gives the smallest integer greater than or equal to the value
  let flooring = Math.floor(value);
  console.log("After floor():", flooring);
//gives the largest integer less than or equal to the value
  let randomValue = Math.random();
  console.log("After random():", randomValue);
//gives a random number between 0 (inclusive) and 1 (exclusive)
  let maxValue = Math.max(5, 10, 15);
  console.log("After max():", maxValue);
//gives the largest value among the provided numbers
  let minValue = Math.min(5, 10, 15);
  console.log("After min():", minValue);
//gives the smallest value among the provided numbers
  // Power of two
  let powerOfTwo = Math.pow(value, 2);
  console.log("After pow():", powerOfTwo);
//gives the value raised to the power of 2
  let squareRoot = Math.sqrt(value);
  console.log("After sqrt():", squareRoot);
  //gives the square root of the value
}

// Example Usage for Math Methods
mathMethods(4.56);
mathMethods(9);
mathMethods(25);