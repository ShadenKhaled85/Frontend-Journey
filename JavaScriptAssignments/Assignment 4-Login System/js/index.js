/* ======================================== ALL INPUTS ======================================== */

var nameInput = document.getElementById('signName');
var emailInput = document.getElementById('signEmail');
var passwordInput = document.getElementById('signPassword');
var usernameSpan = document.getElementById("home");

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

function isExist(email) {
    for (var i = 0; i < signUpUsers.length; i++) {
        if (signUpUsers[i].email.toLowerCase() === email.toLowerCase()) {
            return signUpUsers[i]; // Return the user object if found
        }
    }
    return null; // Return null if not found
}

// Check inputs(empty or not)
function isEmpty() {
    return nameInput.value === "" || emailInput.value === "" || passwordInput.value === "";
}

function isLoginEmpty() {
    return emailInput.value === "" || passwordInput.value === "";
}

/* ======================================== SIGN UP ======================================== */

function signUp(){
    const alertMessage = document.getElementById('required');
    if(isEmpty()){
        alertMessage.innerHTML = '<span class="text-danger m-3">All inputs are required</span>';
        return false;
    }
    var email = emailInput.value;
    if (isExist(email)) {
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
        clearForm();
        // Redirect to login page (index.html) after successful signup
        setTimeout(() => {
            window.location.href = '../index.html'; 
        }, 1000); // Small delay to show success message        
    }
}

function clearForm(){
    nameInput.value = '';
    emailInput.value = '';
    passwordInput.value = '';
}

/* ======================================== LOGIN ======================================== */

function login() {
    var loginMessage = document.getElementById('incorrect'); // To display login messages
    // Validate if inputs are empty
    if (isLoginEmpty()) {
        loginMessage.innerHTML = '<span class="text-danger m-3">Both fields are required.</span>';
        return false;
    }

    var email = emailInput.value;
    var password = passwordInput.value;
    var user = isExist(email);

    // Check if the user exists with the correct email and password
    if (user && user.password === password) {
        localStorage.setItem('sessionUsername', user.name);// Store the session username in localStorage for the session 
        // Redirect to the dashboard or main page after successful login
        window.location.href = '../home.html';
    } 

    else {
        loginMessage.innerHTML = '<span class="text-danger m-3">Invalid email or password.</span>';
    }
}