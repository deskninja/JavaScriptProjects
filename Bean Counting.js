//count the number of characters in a string
function countChars(beans /*the characters to count the letters from*/, letter /*the character to count*/){
    //converting these to a string is useful if numbers are the input
    beans += ""; //convert it to a string
    letter += ""; //convert it to a string
    if(typeof beans == "string" && typeof letter == "string"){ //makes sure the characters are strings

        if(letter.length == 1){ //checks that the letter being counted is valid input

            var i = beans.length;
            var letterCount = 0;
            //checks the value of i before the increment
            while(i--){  //i-- subtracts from i after the while loop examines the parameter then charAt(i) is i - 1
                if(beans.charAt(i) == letter)
                    letterCount++;
            }
            return letterCount;
        }
        else{
            return ("check for just one character");
        }
    }
    else{
        return ("your input was invalid")
    }
}

console.log(countChars(59999997, 7));
console.log(countChars(59999997, 5 ));
console.log(countChars("wild wild west", "w"));