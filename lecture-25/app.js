const list = ['html', 'css', 'javascript', 'react.js'];
//task 1

const newDiv = document.createElement("div");
const newUl = document.createElement("ul");
const newli_1 = document.createElement("li");
newli_1.innerHTML = 'html';
const newli_2 = document.createElement("li");
newli_2.innerHTML = 'css';
const newli_3 = document.createElement("li");
newli_3.innerHTML = 'javascript';
const newli_4 = document.createElement("li");
newli_4.innerHTML = 'react.js';
document.body.append(newDiv);
newDiv.append(newUl);
newUl.append(newli_1);
newUl.append(newli_2);
newUl.append(newli_3);
newUl.append(newli_4);

//task 2
const listWithHref = [
    {'html': "https://developer.mozlila.org/en-US/docs/Web/HTML"}, 
    {'css': "https://developer.mozlila.org/en-US/docs/Web/CSS"}, 
    {'javascript': "https://developer.mozlila.org/en-US/docs/Web/JavaScript"}, 
    {'react.js': "https://react.dev"}
];

const div = document.createElement("div");
const newOl = document.createElement("ol");
const li_1 = document.createElement("li");
const li_2 = document.createElement("li");
const li_3 = document.createElement("li");
const li_4 = document.createElement("li");
const a_1 = document.createElement('a');
const a_2 = document.createElement('a');
const a_3 = document.createElement('a');
const a_4 = document.createElement('a');

a_1.href = "https://developer.mozlila.org/en-US/docs/Web/HTML";
a_1.innerHTML = 'html';
document.body.append(div);
div.append(newOl);
newOl.append(li_1);
li_1.append(a_1);
a_2.href = "https://developer.mozlila.org/en-US/docs/Web/CSS";
a_2.innerHTML = 'css';
li_1.append(li_2);
li_2.append(a_2);
a_3.href = "https://developer.mozlila.org/en-US/docs/Web/JavaScript";
a_3.innerHTML = 'javascript';
li_2.append(li_3);
li_3.append(a_3);
a_4.href = "https://react.dev";
a_4.innerHTML = 'react.js';
li_3.append(li_4);
li_4.append(a_4);

//task 3
const students = [
    {'firstName': 'Tom', 'lastName': 'Cat', 'degree': 230},
    {'firstName': 'Nary', 'lastName': 'Ann', 'degree': 336},
    {'firstName': 'John', 'lastName': 'Doe', 'degree': 400},
    {'firstName': 'James', 'lastName': 'Bond', 'degree': 700},
]

let table = document.querySelector('students');

for (let student of students) {
	let tr = document.createElement('tr');
	tr[0].style.bagroundColor = 'blue', color = 'azure';
	let td1 = document.createElement('td');
	td1.textContent = student.firstName;
	tr.appendChild(td1);
	
	let td2 = document.createElement('td');
	td2.textContent = student.lastName;
	tr.appendChild(td2);
	
	let td3 = document.createElement('td');
	td3.textContent = student.degree;
	tr.appendChild(td3);
	table.appendChild(tr); 
}
document.body.append(table);

