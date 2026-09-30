// Array handbook

// Array:   push(), pop(), shift(), unshift(), splice(), slice(),
// concat(), forEach(), map(), filter(), reduce(), find(), sort()

// Run each function to see the output, play and learn by doing.

// push()
function pushExample(arr, element) {
  console.log("Original Array:", arr);

  arr.push(element);
  console.log("After push:", arr);
}
pushExample([1, 2, 3], 4);

// here the output will give original array : [1,2,3] and after push : [1,2,3,4] --> push just add the element at the end of the array and give the output with that element.

// pop()
function popExample(arr) {
  console.log("Original Array:", arr);

  arr.pop();
  console.log("After pop:", arr);
}
popExample([1, 2, 3]);

// here the output will give original array : [1,2,3] and after pop : [1,2] --> pop just remove the last element from the array and give the output without that element.

// shift()
function shiftExample(arr) {
  console.log("Original Array:", arr);

  arr.shift();
  console.log("After shift:", arr);
}
shiftExample([1, 2, 3]);

// here the output will give original array : [1,2,3] and after shift : [2,3] --> shift just remove the first element from the array and give the output without that element.

// unshift()
function unshiftExample(arr, element) {
  console.log("Original Array:", arr);

  arr.unshift(element);
  console.log("After unshift:", arr);
}
unshiftExample([1, 2, 3], 0);

// here the output will give original array : [1,2,3] and after unshift : [0,1,2,3] --> unshift just add the element at the start of the array and give the output with that element.

// concat()
function concatExample(arr1, arr2) {
  console.log("Original Arrays:", arr1, arr2);

  let arr3 = arr1.concat(arr2);
  console.log("After concat:", arr3);
}
concatExample([1, 2, 3], [4, 5, 6]);

// here the output will give original arrays : [1,2,3] [4,5,6] and after concat : [1,2,3,4,5,6] --> concat just merge the two arrays and give the output with that merged array.

// forEach()
function forEachExample(arr) {
  console.log("Original Array:", arr);

  arr.forEach(function(item, index) {
    console.log(item, index);
  });
}
forEachExample([1, 2, 3]);

// here the output will give original array : [1,2,3] and after forEach : 1 0 2 1 3 2 --> forEach just iterate over the array and give the output with that element and its index.

// map()
function mapExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.map(function(item) {
    return item * 2;
  });
  console.log("After map:", newArr);
}
mapExample([1, 2, 3]);

// here the output will give original array : [1,2,3] and after map : [2,4,6] --> map just iterate over the array and give the output with that element multiplied by 2.

// filter()
function filterExample(arr) {
  console.log("Original Array:", arr);

  let newArr = arr.filter(function(item) {
    return item > 3;
  });
  console.log("After filter:", newArr);
}
filterExample([1, 2, 3, 4, 5]);

// here the output will give original array : [1,2,3,4,5] and after filter : [4,5] --> filter just iterate over the array and give the output with that element which is greater than 3.

// find()
function findExample(arr) {
  console.log("Original Array:", arr);

  let found = arr.find(function(item) {
    return item > 3;
  });
  console.log("After find:", found);
}
findExample([1, 2, 3, 4, 5]);

// here the output will give original array : [1,2,3,4,5] and after find : 4 --> find just iterate over the array and give the output with that element which is greater than 3 but it will return only the first element which is greater than 3.

// sort()
function sortExample(arr) {
  console.log("Original Array:", arr);

  arr.sort(function(a, b) {
    return a - b;
  });
  console.log("After sort:", arr);
}
sortExample([5, 2, 3, 4, 1]);

// here the output will give original array : [5,2,3,4,1] and after sort : [1,2,3,4,5] --> sort just sort the array in ascending order and give the output with that sorted array.