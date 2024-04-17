const list = ['html', 'css', 'javascript', 'react.js'];
//task 1


// Створення елемента div
const newDiv = document.createElement("div");

// Створення елемента ul
const newUl = document.createElement("ul");

// Цикл по масиву list для створення та додавання li до ul
list.forEach(item => {
const newLi = document.createElement("li"); // Створення нового li
newLi.textContent = item; // Встановлення тексту li відповідно до елемента масиву
newUl.appendChild(newLi); // Додавання li до ul
});

// Додавання ul до div
newDiv.appendChild(newUl);

// Додавання div до body
document.body.appendChild(newDiv);

//task 2

const listWithHref = [
	{'html': "https://developer.mozilla.org/en-US/docs/Web/HTML"},
	{'css': "https://developer.mozilla.org/en-US/docs/Web/CSS"},
	{'javascript': "https://developer.mozilla.org/en-US/docs/Web/JavaScript"},
	{'react.js': "https://react.dev"}
	];
	
const div = document.createElement("div");
const newOl = document.createElement("ol");

// Цикл по масиву для створення li та a з автоматичним визначенням тексту і посилань
listWithHref.forEach(item => {
	const li = document.createElement("li");
	const a = document.createElement('a');
	// Використання Object.keys для отримання ключа і значення посилання
	const key = Object.keys(item)[0];
	a.href = item[key];
	a.textContent = key;
	li.appendChild(a);
	newOl.appendChild(li);
});

// Додаємо OL до DIV
div.appendChild(newOl);
// Додаємо DIV до BODY
document.body.appendChild(div);
	

//task 3
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]
	
	// Створюємо таблицю і thead
	let table = document.createElement('table');
	let thead = document.createElement('thead');
	let tr = document.createElement('tr');
	
	// Стилізація заголовків таблиці
	thead.style.backgroundColor = 'blue';
	thead.style.color = 'azure';
	
	// Додавання заголовків таблиці
	['firstName', 'lastName', 'degree'].forEach(text => {
	let th = document.createElement('th');
	th.textContent = text;
	tr.appendChild(th);
	});
	thead.appendChild(tr);
	table.appendChild(thead);
	
	// Додавання даних студентів до таблиці
	for (let student of students) {
	let tr = document.createElement('tr');
	for (let key of ['firstName', 'lastName', 'degree']) {
	let td = document.createElement('td');
	td.textContent = student[key];
	tr.appendChild(td);
	}
	table.appendChild(tr);
	}
	
	// Додаємо таблицю до body
	document.body.appendChild(table);
