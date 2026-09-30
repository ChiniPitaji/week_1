// Object Methods Explanation
function objectMethods(obj) {
  console.log("Original Object:", obj);
//gives the original object passed to the function
  let keys = Object.keys(obj);
  console.log("After Object.keys():", keys);
//gives an array of the object's own enumerable property names
  let values = Object.values(obj);
  console.log("After Object.values():", values);
//gives an array of the object's own enumerable property values
  let entries = Object.entries(obj);
  console.log("After Object.entries():", entries);
//gives an array of the object's own enumerable property [key, value] pairs
  let hasProp = obj.hasOwnProperty("property");
  console.log("After hasOwnProperty():", hasProp);
//gives a boolean indicating whether the object has the specified property as its own property
  let newObj = Object.assign({}, obj, { newProperty: "newValue" });
  console.log("After Object.assign():", newObj);
//gives a new object that is a copy of the original object with an additional property

}

// Example Usage for Object Methods
const sampleObject = {
  key1: "value1",
  key2: "value2",
  key3: "value3",
};

objectMethods(sampleObject);