class AuthException extends Error {
    constructor(code, message) {
        const m = message ? `${code}: ${message}` : code;
        this.message = m;
    }

    toString() {
        return this.message;
    }
}
const checkAuth = document.querySelector('check-auth');
checkAuth.addEventListener('click', function(e) {
    let isAuth = true;
     try { 
        if (!isAuth) { 
            throw new AuthException('FORBIDDEN', 'You don\'t have access to this page'); 
        }
        window.open("success.html");
     } catch(e) {
        dialogBoxId.message.innerText = 'Error';
     }
})
let isAuth = (auth) => auth ?? false;


let dialogBoxId = document.getElementById("dialogBox");



function showDialog(e) {
    dialogBoxId.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            e.preventDefault();
        }
    });

    dialogBoxId.showModal();
}

function closeDialog() {
    dialogBoxId.close();
}

