const url = "https://jsonplaceholder.typicode.com/posts";

const template = (item) => `
<h3>${item.title}</h3>
<div>${item.body}</div>
<p>Author: <strong><span class="author" data-id="${item.userId}"></stan></strong></p>
`;

// const xhrPromise = (method, url) => {
//   const promise = new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open(method, url);
//     xhr.send();
  
//     xhr.onload = () => {
//       if (xhr.status >= 400) {
//         reject(xhr.response);
//       } else {
//         resolve(xhr.response);
//       }
//     };

//     xhr.onerror = () => {
//       reject('Something went wrong!');
//     };   
//   });

//   return promise;
// };

// console.log(xhrPromise("GET", url));

// xhrPromise("GET", url)
// .then(response => {
//     const posts = JSON.parse(response)
//      let result = ''
//     posts.forEach(item => {
//         result += template(item)
//     })
//     document.getElementById("blog").innerHTML = result;
    
// })

// .then( () => {
//   const users  = document.querySelectorAll('.author');
//   users.forEach(user => {
//     xhrPromise("GET", `https://jsonplaceholder.typicode.com/users/${user.dataset.id}`)
//     .then(response => {
//       let userName = JSON.parse(response)
//       console.log(userName.name)
//       user.textContent = userName.name
//     })
//   })

// });

fetch('https://jsonplaceholder.typicode.com/users')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Something went wrong! Status Code: ' +  
          response.status);  
        return;  
      }
    
      response.json().then(function(item) {  
        console.log(item);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });
