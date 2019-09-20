// //This program returns a string "odd" or "even" based on the number given
function even (number){
    //if the number is negative
    if(number <= 0){
        number -= number * 2;
    }
    //if the number is 1 or 0
    if(number <= 1){
        if(number == 1){
            return "odd";
        }
        else {
            return "even";
        }
    }
    //return number minus the increment of 2 (keeps the number odd or even)
    else {
        return even(number - 2)
    }
}



console.log(even(10));
