'use strict';

let input = prompt("Enter a phrase");
let index =  input.lastIndexOf(' ');

while (index > -1){
    console.log(input.substring(index, input.length))
    input = input.substring(0, index); 
    index =  input.lastIndexOf(' ');   
}
console.log(input);