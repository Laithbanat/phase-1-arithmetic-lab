// Define the multiply function
function multiply(num1, num2) {
    return num1 * num2;
  }
  
  // Define the random function
  function random() {
    return Math.floor(Math.random() * (Number.MAX_SAFE_INTEGER - 1)) + 1;
  }
  
  // Define the mod function
  function mod(num3, num4) {
    return num3 % num4;
  }
  
  // Define an array for the max function
  const numbers = [5, 10, 15, 20];
  
  // Define the max function
  function max(numbers) {
    return Math.max(...numbers);
  }
  
  module.exports = { multiply, random, mod, max };
  