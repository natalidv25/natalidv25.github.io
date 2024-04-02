const alert = document.querySelector('.alert');
//tack 1

const onmouseover = document.querySelector(".btn-primary");
console.log(onmouseover);
onmouseover.addEventListener("mouseover", function() { 
     alert.classList.add('alert-primary');
     alert.textContent = "A simple primary alert—check it out!";
     console.log(alert);
     console.log(alert.textContent);
    })

//tack 2

const click = document.querySelector(".btn-secondary");
console.log(click);
click.addEventListener('click', function() {
     console.log(click);
})
click.addEventListener("click", function() { 
    alert.classList.add('alert-primary');
    alert.textContent = "A simple secondary alert—check it out!";
    console.log(alert);
    console.log(alert.textContent);
})

//tack 3

const mouseover = document.querySelector(".btn-success");
console.log(mouseover);
mouseover.addEventListener('mouseover', function() {
     console.log(mouseover);
})
mouseover.addEventListener("mouseover", function() { 
    alert.classList.add('alert-success');
    alert.textContent = "A simple success alert—check it out!";
    console.log(alert);
    console.log(alert.textContent);
})

const mouseout = document.querySelector(".btn-success");
console.log(mouseout);
mouseover.addEventListener("mouseover", function() { 
    alert.classList.remove('alert-success');
    alert.textContent = " ";
    console.log(alert);
    console.log(alert.textContent);
})

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

const keypress = document.querySelector(".btn-info");
// console.log(keypress);
keypress.addEventListener('keypress', function (e) {
    if (e.key === 'ENTER') {
        e.preventDefault();
        alert.classList.remove('alert-info');
        alert.textContent = "A simple info alert—check it out!";
    }
})


// tack 7
const card = document.querySelectorAll('.card');
console.log(card);
const ctitle = document.querySelectorAll('.card-title');
for (const ctitle of card) { 
    console.log(ctitle.innerText); 
}

// tack 8

const addcard = document.querySelectorAll('.add-to-cart');
console.log(addcard);
for (const addcard of card) {
    addcard.addEventListener('click', function () {
        console.log(addcard.textContent);
        
    });
}

