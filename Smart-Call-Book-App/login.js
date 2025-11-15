// login page variables
let regBtn = document.querySelector('#reg-btn');
let loginText = document.querySelector('#login-text');
let loginPage = document.querySelector('#login-page');
let icons = document.querySelectorAll('.icons');
let loginBtn = document.querySelector('.login-btn');
let loginName = document.querySelector('#name');
let loginPass = document.querySelector('#pass');

// registration page vriables 
let regPage = document.querySelector('#registration-page');
let regText = document.querySelector('#registration-page-text');
let signBtn = document.querySelector('#signin-btn');
let regname = document.querySelector('#reg-name');
let regemail = document.querySelector('#reg-email');
let regpass = document.querySelector('#reg-pass');
let signupBtn = document.querySelector('#signup-btn');


// Register Button 
regBtn.addEventListener('click', function () {
    loginText.style.opacity = 0.5;
    loginPage.style.opacity = 0.5;
    loginText.style.transform = "translateX(-130%)";
    loginPage.style.transform = "translateX(230%)";

    regPage.style.transform = "translateX(0%)";
    regText.style.transform = "translateX(0%)";
    regPage.style.opacity = 1;
    regText.style.opacity = 1;
});

// Sign in button 
signBtn.addEventListener('click', function () {
    loginText.style.opacity = 1;
    loginPage.style.opacity = 1;
    loginText.style.transform = "translateX(0%)";
    loginPage.style.transform = "translateX(100%)";

    regPage.style.transform = "translateX(-130%)";
    regText.style.transform = "translateX(130%)";
    regPage.style.opacity = 0.5;
    regText.style.opacity = 0.5;

});

signupBtn.addEventListener('submit', function () {
    let validRegName = regname.value.trim();
    let validRegEmail = regemail.value.trim();
    let validRegPass = regpass.value.trim();

    if (validRegName === '') {
        alert('Please Enter Your Name!');
        return;
    }
    if (validRegEmail === '') {
        alert('Please Enter Your Email!');
        return;
    }
    if (validRegPass === '') {
        alert('Please Enter Your Password!');
        return;
    }
});

loginBtn.addEventListener('submit', function () {
    let validName = loginName.value.trim();
    let validPass = loginPass.value.trim();

    if (validName === '') {
        alert('Please Enter Correct Username! ');
        return;
    }
    if (validPass === '') {
        alert('Please Enter Correct Password!');
        return;
    }
    form.reset();
});