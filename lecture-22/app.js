const classes = ['first', 'second', 'third', 'fourth'];


const allh1 = document.querySelectorAll("h1"); 
for (i = 0; i < allh1.length; i++) { 
    console.log(allh1[i]); 
}
for (let h1 of allh1) {
    console.log( (typeof h1) + ', ' + allh1.length );
  }

const p1 = document.querySelector('#p1')
     .style.backgroundColor = "gold";

// const p2 = document.querySelector('#p2')
//      .setAttribute('style', 'background-color: gold; color: blue; font-size: 2rem');
const p2 = document.querySelector('#p2')
     .style.cssText = 'background-color: gold; color: blue; font-size: 2rem';

const p3 = document.querySelector('#p3')
     .classList.add('third');

const p4 = document.querySelector('#p4')
     .classList.add('fourth', 'border');
     // Знайти всі елементи з класом container. 
     // Використовуючи цикл for, вивести на консоль 
     // перший елемент для кожного зі знайдених елементів.    
const container = document.getElementsByClassName('container');
console.log(container);

for (const child of container) {
     console.log( child.firstElementsChild );
}

// Знайти всі елементи з класом container. 
// Використовуючи цикл for, вивести на консоль 
// вміст першого елементу для кожного першого елемента 
// зі знайдених елементів.

for (const child of container) { 
     console.log(child.firstElementChild.textContent); 
}

// Знайти колекцію всіх елементів з селектором '.container header', 
// зберегти її в змінній headers. Використовуючи цикл for 
// для отриманої колекції headers, 
// замінити заголовки h1 таким чином

const headers = document.querySelectorAll('.container header');
console.dir(headers);

// перший залишити h1
// другий замінити на h2
// третій замінити на h3
// четвертий замінити на h4
// зберегти початкові атрибути id та class

for ( const h1 of headers ) {
     console.log(headers[0].innerHTML);
     console.log(headers[1].outerHTML.replace('<h1', '<h2').replace('</h1>', '</h2>'));
     console.log(headers[2].outerHTML.replace('<h1', '<h3').replace('</h1>', '</h3>'));
     console.log(headers[3].outerHTML.replace('<h1', '<h4').replace('</h1>', '</h4>'));
}


// Використовуючи цикл for для колекції headers та масив classes, 
// додати до отриманих тегів-заголовків класи таким чином

// до h1 додати клас first
// до h2 додати клас second
// до h3 додати клас third
// до h4 додати клас fourth


for (j = 0; j < headers.length; j++) {
     const elem  = headers.querySelectorAll('h[j+1]').classList.add(classes[j]);  
   }

 