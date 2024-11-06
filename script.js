function isSameType(value1, value2) {
  // Check if both values are NaN
  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  if (Number.isNaN(value1) || Number.isNaN(value2)) {
    return false;
  }
  return typeof value1 === typeof value2;
}

// Testing with prompt inputs
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

// Test cases
console.log(isSameType(1, 3));         // true
console.log(isSameType("hey", "hello")); // true
console.log(isSameType(NaN, NaN));     // true
console.log(isSameType("3", 3));       // false
