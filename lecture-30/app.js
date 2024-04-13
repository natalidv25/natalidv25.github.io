
const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
`;
setTimeout(myFunction, 10000); 
function myFunction() { 
    const username = document.getElementById('demoForm').value;
    if (username == '') {
        document.querySelector("waiting").innerHTML = "I'm miss You";
        return document.querySelector("waiting").innerHTML = "Hello `${firstName} + ${lastName}!`"; 
}
}

var xhr = new XMLHttpRequest(); 
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true); 
xhr.onload = function(){ 
    console.log(xhr.responseText); 
}; 
xhr.send();

xhr.onload = function() { 
    let demo = document.getElementById("demo").innerHTML; 
    demo = this.responseText; 
    JSON.parse( localStorage.demo );
} 
