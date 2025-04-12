/* ======================================== ALL INPUTS ======================================== */

var nameInput = document.getElementById('signName');
var emailInput = document.getElementById('signEmail');
var passwordInput = document.getElementById('signPassword');
var usernameSpan = document.getElementById("username");

var signUpUsers;

// Say Welcome to username
var username = localStorage.getItem("sessionUsername");
if(username){
    usernameSpan.innerHTML = 'Welcome' + username;
}

if(localStorage.getItem('users') != null){
    signUpUsers = JSON.parse(localStorage.getItem('users'));
}
else{
    signUpUsers = [];
}

/* ======================================== Validation ======================================== */

// Check inputs' pattern
function validateUser(element){ // this
    var regex = { // regex is the object and has the pattern of each input
        signName : /^[a-zA-Z ]{3,15}$/,
        signEmail : /^[a-z0-9_.]{6,20}@(gmail|yahoo|mail|outlook).com$/,
        signPassword : /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[~!@#$%^&*()_+|?><])[A-Za-z\d~!@#$%^&*()_+|?><]{8,20}$/
    }

    if(regex[element.id].test(element.value)){
        console.log("matched");
        element.classList.add('is-valid');
        element.classList.remove('is-invalid');
        element.nextElementSibling.classList.replace('d-block','d-none'); // to remove the alert
    }
    
    else{
        console.log("not matched");
        element.classList.add('is-invalid');
        element.classList.remove('is-valid');
        element.nextElementSibling.classList.replace('d-none','d-block'); // to add the alert
    }
}

// Check if email already exists
function isExist(users) {
    var email = emailInput.value.toLowerCase();

    // Check if email is valid (contains @ and ends with .com)
    if (!email.includes("@") || !email.endsWith(".com")) {
        return false;
    }

    // Loop through users and check for duplicate email
    for (var i = 0; i < users.length; i++) {
        if (users[i].email.toLowerCase() === email) {
            return true;
        }
    }
}

// Check inputs(empty or not)
function isEmpty() {
    return nameInput.value === "" || emailInput.value === "" || passwordInput.value === "";
}

/* ======================================== SIGN UP ======================================== */

function signUp(){
    const alertMessage = document.getElementById('required');
    if(isEmpty()){
        alertMessage.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }
    if (isExist(signUpUsers)) {
        alertMessage.innerHTML = '<span class="text-danger m-3">Email already exists or invalid</span>';
        return false;
    }
    else{
        // object to store users's data
        var user = {
            name : nameInput.value,
            email : emailInput.value,
            password : passwordInput.value
        };
        signUpUsers.push(user);
        localStorage.setItem('users', JSON.stringify(signUpUsers));
        alertMessage.innerHTML = '<span class="text-success m-3 fs-5">Success</span>';
        window.location.href = '../index.html';
        clearForm();
    }
}

function clearForm(){
    nameInput.value = null;
    emailInput.value = null;
    passwordInput.value = null;
}

/* ======================================== SIGN IN ======================================== */

document.getElementById('login').addEventListener('click', function () {
    if (singEmail.value == '' || signPassword.value == '') {
        document.getElementById('message').innerHTML = `<p class ='text-center'>All inputs is required</p>`;
    } else {
        checkUser();
    }
})

function checkUser(){
    for (var i = 0; i < user.length; i++) {
        if (nameInput.value == user[i].email && passwordInput.value == user[i].password) {
            var newName = user[i].name;
            localStorage.setItem('userName', newName);
            location.href = '../index.html';
            break;
        }
    }
}