const ul = document.querySelector('ul');
let itemsArray = JSON.parse(localStorage.getItem(item));
console.log(itemsArray);

const input = document.getElementById('item');


function addTask(text) {
    let li = document.createElement("li");
    li.textContent = 'text';
    text = li.textContent;
    ul.append(li);
};
addTask();


ul.forEach(addTask);

function add() {
    itemsArray.value = localStorage.getItem('item');
    item.oninput = () => {
        localStorage.setItem('item', itemsArray.value)
    }
}

function del() {
    itemsArray.value = localStorage.removeItem('item');
    item.oninput = () => {
        localStorage.removeItem('item', itemsArray.value)
    }    
}
