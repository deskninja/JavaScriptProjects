//print all the numbers from 1 to 100 but for numbers divisible by 3 print "Fizz" and for numbers divisible by 5 print Buzz.
//next make the program print "FizzBuzz" when the number is divisible by 5 and 3

var number = 1;
for(number; number <= 100; number++)
{
    if(number % 3 == 0 && number %5 == 0){
        console.log("FizzBuzz");
    }
    else if(number % 3 ==0){
        console.log("Fizz");
    }

    else if(number % 5 == 0){
        console.log("Buzz");
    }

    else {
        console.log(number);
    }
}