const colors = ['blue', 'green', 'white'];
console.log(colors);
//task 1

function iter(item) {
    console.log(item);
}
colors.forEach(iter);
iter('blue');
iter('green');
iter('white');

//task 2

// function iterate(item, index) {
//     console.log(`${item} has index ${index}`);
// }
// colors.forEach(iterate);
// iterate('blue', 0);
// iterate('green', 1); 
// iterate('white', 2);

function iterate(item, index, array) { 
    console.log(item); 
    if (index === array.length - 1) { 
        console.log('The last iteration!'); 
    } 
} 
colors.forEach(iterate);

//task 3
const letters = ['a', 'b', 'c'];

function iterate(letter) { 
    console.log(this === window); 
} 
letters.forEach(iterate); 

//task 4
const Numbers = [22, 3, 4, 10];
let n = true; 
Numbers.forEach(function(number) { 
    if (number % 2 === 1) { 
        n = false; 
    } 
}); 
console.log(n); 

//task 5
const p = Numbers.every(function(number) { 
    return number % 2 === 0; 
}); 
console.log(p);

//task 6
const fruits = ["apple", "banana", "cantaloupe", "blueberries", "grapefruit"];
const index = fruits.findIndex(fruit => fruit === "blueberries");
console.log(index);
console.log(fruits[index]); 

//task 7
const arr = [7, 33, 47, 99, 2, 103, 79];
const found = arr.find(element => element > 10); 
console.log(found);

//task 8
const array = [1, 2, 3, 4, 5];
const some = (element) => element % 2 === 0;
console.log(array.some(some));

//task 9
const numbers = [1, 30, 4, 21, 100000];
numbers.sort(function(a, b) { 
    return a - b; 
}); 
console.log(numbers);
