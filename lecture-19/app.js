let str1 = 'I\'m a string!'; //13
let str2 = "I'm a string!";  //13
console.log(str1.length); 
console.log(str2.length);
console.log(str1 == str2); //true
console.log(str1 === str2); //true


let string5 = 'Hello World';
//Повернути перший символ рядка string5. 
//Виконайте завдання, використовуючи індекс та метод charAt.
console.log(string5[0]);
console.log(string5.charAt(0));

let str3 = "Hello Javascript";
// повернути символ J рядка:
console.log(str3[6]);

//Використовуючи індекс, 
//отримати доступ до останнього символу рядка двома способами
console.log(new String(str3));
console.log(str3[str3.length - 1]);
console.log(str3.charAt(15));

// Напишіть три варіанти функції lastChar, 
//що повертає останній символ рядка

function lastChar() {
    return str[str.length - 1];
}
console.log(lastChar(str3));

function lastChar(str) {
    return str.slice(-1);
}
console.log(lastChar(str3));

function lastChar(str) {
    return (str.substr(-1));
}
console.log(lastChar(str3));


let a = 'When candles are out,';
let b = 'all cats are grey.';
console.log(a, ''.concat(b));
console.log(a.concat(' ', b));

// let fact = "Fifteen is the same as"
// let a = 5;
// let b = 10;

// fact = ${fact} ${a + b};
// console.log(fact);

// let firstName = 'Tom';
// let lastName = 'Cat';
// function getFullName(firstName, lastName) {
//     return firstName + ' ' + lastName;
//     }
    
//     let firstName = 'Tom';
//     let lastName = 'Cat';
    
//     console.log(getFullName(firstName, lastName));


greeting = "Hello, " + getFullName() + "!";
console.log(greeting);

let c = `<div><h1>${greeting}</h1><div>`;

console.log(c);


let string1 = "  The name of our game  ";
// Потрібно отримати такі результати
// "The name of our game"
console.log(string1.trim());
// "The name of our game  "
console.log(string1.trimStart());
// "  The name of our game"
console.log(string1.trimEnd());


const phoneNumber = '\t  555-123\n ';
// Потрібно отримати такі результати
console.log(phoneNumber.trim());
// => '555-123'
console.log(phoneNumber.trimStart(), ' ');
// => '555-123 \n'

let sentence = 'Always look on the bright side of life';
console.log(new String(sentence));
// Перевірити, чи містить рядок значення 'look up'
let pattern = 'look up';
if((sentence.includes(pattern)) >= 0) { 
    console.log(true);
} else {
    console.log(false);
};


// Перевірити, чи містить рядок значення 'look on'
let pattern1 = 'look on';
if((sentence.search(pattern1)) >= 0) { 
    console.log('It is');
} else {
    console.log('Not found');
};


// Перевірити, чи містить рядок значення 'look on'
//Б починаючи з 8-ї позиції
if((sentence.indexOf(pattern1, 8)) >= 0) { 
    console.log('It is');
} else {
    console.log('Not found');
};

// Знайти індекс символу 'l'
console.log(sentence.indexOf('l'));
// Знайти індекс символу 'l', починаючи з 3-ї позиції
console.log(sentence.indexOf('l', 3));
// Знайти індекс символу 'L'
console.log(sentence.indexOf('L'));

// Отримати підрядок 'look on the bright side of life'
console.log(sentence.substr(7));
// Отримати підрядок 'Always'
console.log(sentence.substring(0, 6));
// Отримати підрядок 'look'
console.log(sentence.substring(7, 11));

// Створити регулярний вираз, який призначений для перевірки імені користувача, 
// що може містити цифри, літери у нижньому регістрі та символи - і _. 
// Довжину імені користувача встановити від 8 до 16 знаків.
let fName = "natali_dv25";
let n = fName.match(/^[a-zа-яії0-9_-]{8, 16}$/);

// Створити регулярний вираз, 
// який призначений для перевірки email на коректність.
let eMail = "natali_dv25";
let e = eMail.match(/^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/);

let sentence1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in sapien eu velit eleifend ullamcorper eget vitae nulla. Aenean euismod purus sed neque dictum, nec lobortis ante faucibus.';

// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substring
let truncateText = sentence1.substring(0, 51);
console.log(truncateText);
// Напишіть функцію truncateText скорочення тексту до 50 символів, використовуючи метод substr
let truncateText1 = sentence1.substr(0, 50);
console.log(truncateText1);