const emailInp = document.querySelector("#email-address");
const passwordInp = document.querySelector("#passwords");
const checkBox = document.querySelector("#check");
const logInForm = document.querySelector(".logInForm");


emailInp.value = localStorage.getItem("emailAddress") || "";
passwordInp.value = localStorage.getItem("password") || "";


let emailRegex = /^[a-z0-9.-]+@[a-z0-9.-]+\.[a-z]{2,}$/;

logInForm.addEventListener("submit", (event) =>{
    event.preventDefault();

    console.log(emailRegex.test(emailInp.value));

    function isStrong(password){
        const hasTwoUppercase = (password.match(/[A-Z]/g) || []).length >= 2;
        const hasTwoLowercase = (password.match(/[a-z]/g) || []).length >= 2;
        const hasTwoDigits = (password.match(/[0-9]/g) || []).length >= 2;
        const hasTwoSymbols = (password.match(/[^a-zA-Z0-9]/g) || []).length >= 2;

        return hasTwoUppercase && hasTwoLowercase && hasTwoDigits && hasTwoSymbols;
    }
    console.log(isStrong(passwordInp.value))


    if(!emailRegex.test(emailInp.value)){
        alert("Please, make sure you entered your email right! \nExample: example@gmail.com")
    }else if(!isStrong(passwordInp.value)){
        alert("Your password is not strong enough. \nPlease make sure you have used at least two capital and lowercase letters, two digits and two symbols.")
    }else{
        if(checkBox.checked){
            console.log("saved")
            localStorage.setItem("emailAddress", emailInp.value);
            localStorage.setItem("password", passwordInp.value)
            alert("You have successfully signed up! \nYou also saved your email and password")
        }else{
            console.log("unsaved")
            localStorage.setItem("emailAddress", "");
            localStorage.setItem("password", "")
            alert("You have successfully signed up!")
        }
        emailInp.value = localStorage.getItem("emailAddress");
        passwordInp.value = localStorage.getItem("password");
    }
})

const eyeImg = document.querySelector("#eye-img")
let passwordIsVisible = false;

function showPassword(){
    if(!passwordIsVisible){
        passwordInp.type = "text";
        passwordIsVisible = true;
        eyeImg.classList.replace("fa-eye-slash", "fa-eye");
    }else{
        passwordInp.type = "password";
        passwordIsVisible = false;
        eyeImg.classList.replace("fa-eye", "fa-eye-slash");
    }
}

eyeImg.addEventListener("mouseover", () =>{
    passwordInp.type = "text";
})
eyeImg.addEventListener("mouseout", () =>{
    if(!passwordIsVisible){
        passwordInp.type = "password";
    }
})






