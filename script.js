const firstName = document.getElementById("first-name");
const firstNameError = document.querySelector(".firstNameErrorMessage");
const lastName = document.getElementById("last-name");
const lastNameError = document.querySelector(".lastNameErrorMessage");
const email = document.getElementById("email");
const emailError = document.querySelector(".emailErrorMesage");
const phone = document.getElementById("phoneNumber");
const phoneError = document.querySelector(".phoneErrorMesage");
const password = document.getElementById("password");
const confPassword = document.getElementById("confirmpassword");
const passwordError = document.querySelector(".passwordErrorMessage");
const confError = document.querySelector(".confErrorMessage");
const btn = document.querySelector("button");
const form = document.querySelector("form");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    console.log(password.value)
    console.log(confPassword.value)
    if(firstName.value.length < 3){
        console.log(firstName.value)
        // const newMessage = document.createElement("h3");
        firstName.style.borderColor = "red";
        firstNameError.style.color = "red";
        // newMessage.textContent = 'That invalid';
        firstNameError.textContent = 'That invalid';
    }else{
        console.log("huhhh")
        firstNameError.textContent = "";
        // lastNameError.textContent = "";
    }
    if(lastName.value.length < 3){
        lastNameError.style.color = "red";
        lastNameError.textContent = 'That invalid'
        
    }else{
        console.log("huhhh")
        lastNameError.textContent = "";
        // lastNameError.textContent = "";
    }

    if(password.value.length < 8){
        passwordError.style.color = "red";
        passwordError.textContent = "Must enter 8 characters or more"
    }else if(password.value.length >= 8){
        
        if(password.value !== confPassword.value){
            passwordError.style.color = "red";

            passwordError.textContent = "Passwords dont match"
        }else{
            passwordError.style.color = "green";
            passwordError.textContent = "Passwords match!"
        }
    }
    if(confPassword.value.length < 8){
        confError.style.color = "red";
        confError.textContent = "Must enter 8 characters or more"
    }else{
        confError.textContent = "";
    }

})
