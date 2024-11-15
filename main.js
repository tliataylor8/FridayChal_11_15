// create a function in JS that sums all digits in an integer
// ex: 5874 - 5+8+7+4
// ex: 234567 - 
function sumAll(num){

 let sum = 0; 

 const itsAstring = num.toString();
 for (let i=0; i<itsAstring.length; i++){
    sum += parseInt(itsAstring[i], 10);
 }
 return sum;

}

console.log(sumAll(12345));
console.log(sumAll(123));