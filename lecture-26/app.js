//task1
// function calculate(numbers) {
//     let sum = 0;
//     for (const number of numbers) {
//       sum = sum + number;
//     }
//     return sum;
//    }
//    calculate([1, 2, 4]); // => 7
//    console.log(sum());

   // sum() - це функція, яка описує операцію додавання. 
   function sum(n1, n2) {
      return n1 + n2;
   }
   
   // multiply() - це функція, яка описує операцію множення.
   
   function multiply(n1, n2) {
      return n1 * n2;
   }

function calculate(operation, initialValue, numbers) {
    if (operation === sum) {
        sum();
    } else multiply();
}
   calculate(sum, 0, [1, 2, 4]);
   

   calculate(multiply, 1, [1, 2, 4]);
  
//task2
let student_names = ["Wick", "Malcolm", "Smith"]
let student = student_names.map(function(name, index, array) {
    console.log(`name: ${name} | index: ${index} | array: [ ${array} ]`);
  }); 

//task3
let students_information = [
    {"name": "Wick", "degree": 375}, 
    {"name": "Malcolm", "degree": 405}, 
    {"name": "Smith", "degree": 453},
];
console.log(students_information[0]);

function percentage(degree) {   
    let i; for (i = 0; i < students_information.length; i++) {
       return (degree * 600 / 100);
    }  
}
percentage();
console.log(students_information);
let info = students_information.map(function (name, degree, percentage) {

    console.log(`{ name: ${name}, degree: ${degree}, percentage: ${percentage} }`);
});
console.log(info);
 
//task4
let array = [1, 2, 3, [10, 11, 12], 21, 22, 23, [31, 32, 33, 34], [41, 42]];

const array_one = array.reduce((accumulator, currentValue) => {
    return accumulator.concat(currentValue); 
  }, []);
console.log(array_one);

//task5

Array.prototype.upperCase = function () { 
    let i; for (i = 0; i < this.length; i++) { 
        this[i] = this[i].toUpperCase(); 
    } 
};
function myFunc() {
    let arr = ["Algorithm", "Data Structure", "Operating System", "html"];
    arr.upperCase();
    console.log(arr);
}
myFunc();