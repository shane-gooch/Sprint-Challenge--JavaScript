// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

function highOrder(para1, para2, cb) {
  return cb(para1 + para2);
} 


/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

function consumeAdd(x, y, cb) {
  return cb(x+y)
}

function consumeMultiple(num1, num2, cb) {
  return cb(num1 * num2)
}

function consumeGreeting(firstname,lastname, cb) {
  return `Hello ${firstname} ${lastname}, nice to mee you!`;
}
/* Step 3: Check your work by un-commenting the following calls to consume(): */

console.log(consumeAdd(2,2,function(add) {
  return add})) // 4

console.log(consumeMultiple(10,16, function(multiply) {
  return multiply})); // 160

console.log(consumeGreeting("Mary","Poppins", function(greeting) {
  return multiply})); // Hello Mary Poppins, nice to meet you!


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
//When a function is created so is a new scope. Variable which are within that scope are inside the lexical scope of the function, but if a function is called and the variable is not inside the scope it will look outward for it. So nestedFunction() is able to look outside its scope to find internal. 

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();