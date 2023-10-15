//STEP 1
let num_h;
function halfNumber(num){
num_h=num/2
return num_h;
}
const num = 8;
console.log(`Half of ${num}: ${halfNumber(num)}`);


//STEP 2
const n2=5
function quareNumber(n2){
return n2*n2;
}
console.log(`Square of ${n2}: ${quareNumber(n2)}`)
//STEP 3
function percentOf(number1, number2) {
    if (number2 === 0) {
      return "The second number cannot be zero.";
    }
  
    const percentage = (number1 / number2) * 100;
    return `${number1} is ${percentage}% of ${number2}.`;
  }
  
  
  const result = percentOf(2, 4);
  console.log(result); // 
  

//STEP 4
function findModulus(num1, num2) {
    const modulus = num1 % num2;
    //return modulus;
   return `${modulus} is the modulus of ${num1} and ${num2}.`;
  }
  
  // Example usage:
  const result_modulus = findModulus(10, 3);
  console.log(result_modulus); // 
  
//STEP 5