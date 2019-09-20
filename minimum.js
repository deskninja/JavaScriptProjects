//This function returns the lowest valued number of two parameters
function min(value1, value2) {
   if(value1 > value2){
       return value2;
   }
   else {
       return value1;
   }
}

console.log(min(3,2));