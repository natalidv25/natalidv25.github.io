const fruits = 'apple banana cantaloupe blueberries grapefruit';
const array = fruits.split('');
console.log(array);

const arr1 = Array.from(fruits);
console.log(arr1);

//Результат зберегти у масиві fruits. - не знайшла спосіб зберегти з тим самим ім'ям

// Використовуючи цикл for, 
// вивести на консоль список елементів з масиву fruits.
let i = 0;
for (i = 0; i <= array.length; i++);
console.log(array[i]);

// Використовуючи цикл while, 
// вивести на консоль список елементів з масиву fruits.
let j = 0;
while (j <= array.length) {
     console.log(array[j]);
     j++;
  }

// Використовуючи цикл do...while, 
// вивести на консоль список елементів з масиву fruits.
let c = 0;
do { 
    console.log(array[c]); 
    c++
} while (c <= array.length);


// Використовуючи цикл for...of, 
// вивести на консоль список елементів з масиву fruits.
for(let value of array) {
	console.log(value);
}

const Numbs = [1,2,3,4,5,6,7,8,9,10];
for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      console.log( i );
    }
  };

// const names = ['Batman'];
// const newNames = names.push('Joker');
// console.log(names);

// const names = ['Batman', 'Joker', 'Bane'];
// const names1 = names.unshift('Catwoman');
// console.log(names);

// const names2 = ['Catwoman', ...names];
// console.log(names);

// const names3 = names.splice(1, 0, 'Catwoman');
// console.log(names);

const names = ['Batman', 'Catwoman', 'Joker', 'Bane'];
// names.splice(1, 2);
// console.log(names);

// names.splice(1, 2, 'Alfred');
// console.log(names);

// if (names.includes('Alfred') == false) { names.push('Alfred') };
// console.log(names);

if (names.includes('Alfred') == true) { delete names('Alfred') };
console.log(names);