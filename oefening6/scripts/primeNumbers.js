'use strict';

const input = prompt("Enter a number");

for (let number = 2; number < input; number++) {
    let isPrime = true;
    for (let dividend = 2 ; dividend < number; dividend++){
        if (number % dividend === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(number);
}