'use strict';

const speedLimit = 70;
const kmPerPoint = 5;

const speed = Number(prompt("Enter your speed"));
if (isNaN(speed))
    console.log('Not a number');
else if (speed <= speedLimit)
    console.log('OK');
else {
    const points = Math.floor((speed-speedLimit)/ kmPerPoint);
    console.log(points)
    if (points < 12)
        console.log(`points: ${points}`);
    else
        console.log('drivers license suspendend');
}