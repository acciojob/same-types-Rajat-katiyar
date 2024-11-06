function isSameType(value1, value2) {
  //your js code here
	if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true;
  }
  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));

console.log(isSameType(1, 3));        
console.log(isSameType("hey", "hello")); 
console.log(isSameType(NaN, NaN));   
console.log(isSameType("3", 3));     

