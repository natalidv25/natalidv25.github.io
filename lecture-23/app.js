
//tack 1
const alertBox = document.querySelector('.alert');
const primaryButton = document.querySelector(".btn-primary");

primaryButton.addEventListener("click", function() {
alertBox.classList.add('alert-primary');
alertBox.textContent = "A simple primary alert—check it out!";
});


//tack 2

const secondaryButton = document.querySelector(".btn-secondary");

secondaryButton.addEventListener("click", function() {
alertBox.classList.add('alert-primary');
alertBox.textContent = "A simple secondary alert—check it out!";
console.log(secondaryButton);
console.log(alertBox);
console.log(alertBox.textContent);
});

//tack 3
const successButton = document.querySelector(".btn-success");

successButton.addEventListener('mouseover', function() {
alertBox.classList.add('alert-success');
alertBox.textContent = "A simple success alert—check it out!";
console.log(alertBox);
});

// Додаємо прослуховувач події "mouseout"
successButton.addEventListener('mouseout', function() {
alertBox.classList.remove('alert-success');
alertBox.textContent = "";
console.log(alertBox);
});

// tack 4

const focus = document.querySelector(".btn-danger");
console.log(focus);
focus.addEventListener("focus", function() { 
    alert.classList.add('alert-danger');
    alert.textContent = "A simple danger alert—check it out!";
    console.log(alert);
    console.log(alert.textContent);
})

const focusout = document.querySelector(".btn-danger");
console.log(focusout);
focusout.addEventListener("focusout", function() { 
    alert.classList.remove('alert-danger');
    alert.textContent = " ";
    console.log(alert);
    console.log(alert.textContent);
})

// tack 5

const dark = document.querySelector(".btn-dark");
const light = document.querySelector(".btn-light");
console.log(dark);
console.log(light);

dark.addEventListener('click', function (e) {
    if (e.target === dark) {
        light.style.display = 'none';
        toggleMode();
    }
});

light.addEventListener('click', function (e) {
    if (e.target === light) {
        dark.style.display = 'none';
        toggleMode();
    }
});
// зробити одну функцію на 2 кнопки мені не вдалося, 
// підкажіть, будь-ласка, як це об'єднати)
function toggleMode() {
    document.body.classList.toggle('dark-mode');
};

// tack 6

const keypressButton = document.querySelector(".btn-info");

keypressButton.addEventListener('keypress', function (e) {
if (e.key === 'Enter') {
e.preventDefault();
alertBox.classList.add('alert-info');
alertBox.textContent = "A simple info alert—check it out!";
console.log(alertBox.textContent);
}
});

// tack 7

const cards = document.querySelectorAll('.card');
console.log(cards); // Логуємо всі карточки для перевірки

for (const card of cards) {
const cardTitle = card.querySelector('.card-title');
if (cardTitle) {
console.log(cardTitle.innerText);
}
}
// tack 8

for (const card of cards) {
const addToCartButton = card.querySelector('.add-to-cart');
const cardTitle = card.querySelector('.card-title');

if (addToCartButton && cardTitle) {
    addToCartButton.addEventListener('click', function () {
        console.log(cardTitle.textContent); 
    });
}
}
