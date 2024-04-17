// const person = {
//     name: 'Natali',
//     age: 25,
// };
// console.log(person);

// Змінити тип властивості name з рядка на об'єкт, 
// з ключами firstName та lastName. Надати значення цим властивостям. 
// Вивести значення властивостей об'єкту на консоль.
// person.name = {
//         fName: 'Nataliya',
//         lName: 'Dvornichenko',
//     };
// console.log(person.name);

// Створити метод об'єкту bio(), 
// що виводить на консоль ім'я, прізвище та вік person.

const person = {
    name: {
    fName: 'Nataliya',
    lName: 'Dvornichenko',
    },
    age: 25,
    bio: function() {
    console.log(`Name: ${this.name.fName} ${this.name.lName}, Age: ${this.age}`);
    }
    };
    
    person.bio();

// Створити метод об'єкту introduceSelf, 
// що виводить на консоль Hi! I'm firstName.
person.name = {
    fName: 'Nataliya',
    lName: 'Dvornichenko',
    introduceSelf() {
    return "Hi! I\'m " + this.fName;
    }
};   
console.log(person.name.introduceSelf());


// Створити функцію-шаблон createPerson, що приймає аргумент name 
// та повертає новий об'єкт з властивістю name та методом introduceSelf. 
// Створити за допомогою createPerson 2 екземпляри об'єкта.

function createPerson(name) {
    let obj = {};
    obj.name = name;
    obj.introduceSelf = function() {
        return "Hi! I\'m " + obj.name;
      };
    return obj;
};
const mary = createPerson("Mary");
    console.log(mary.introduceSelf());
    
    const tom = createPerson("Tom");
    console.log(tom.introduceSelf());

// Створити функцію-конструктор Person, що приймає аргумент name 
// та повертає новий об'єкт з властивістю name та методом introduceSelf.
//  Створити за допомогою Person 2 екземпляри об'єкта mary та tom.
function CreatePerson(name) {
    this.name = name;
    this.introduceSelf = function() {
        return( "Hi! I\'m " + this.name );
      };
};
const fName3 = new CreatePerson("Mary");
console.log(fName3.introduceSelf());

const fName4 = new CreatePerson("Tom");
console.log(fName4.introduceSelf());

// визначити, чи містить об'єкт mary властивість під назвою prop.

console.log(createPerson.hasOwnProperty('name'));

// ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives
// fluid ounces - одиниця ваги 
// avoirdupois - одна шістнадцята фунта (28.4131 грамів). 
// Офіційно dash становить приблизно 1 мл, 
// 10 крапель або 1/5 чайної ложки.

DirtyMartini = {
    name: 'ingrédients:',
    ing1: '6 fluid ounces gin',
    ing2: '1 dash dry vermouth',
    ing3: '1 fluid ounce brine from olive jar',
    ing4: '4 stuffed green olives',
    
    english_please() {
        return(this.name + '\n' + this.ing1 + '\n' + this.ing2 + ' (0.0351951ml)\n' + this.ing3 + '\n' + this.ing4);
    },
    excuse_my_french() {
        return(this.name + '\n170.4786 ml de gin\n' + '1 dash de vermouth sec (0.0351951ml)\n' + '28.4131 ml de saumure du pot d\'olive\n' + '4 olives vertes farcies');
    },
};
console.log(DirtyMartini.english_please());
console.log(DirtyMartini.excuse_my_french());

// Створіть об'єкт DirtyMartini, що має 2 методи english_please() 
// та excuse_my_french() При виклику методу excuse_my_french(), 
// на консоль виводиться:

//       ingrédients:  
//         170.4786 ml de gin
//         1 trait de vermouth sec (0.0351951ml) 
//         28.4131 ml de saumure du pot d'olive
//         4 olives vertes farcies

// При виклику методу english_please(), на консоль виводиться:

//       ingredients:
//         6 fluid ounces gin
//         1 dash dry vermouth (0.0351951ml) 
//         1 fluid ounce brine from olive jar
//         4 stuffed green olives

