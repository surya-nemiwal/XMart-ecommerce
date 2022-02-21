
function handleSubmit(){
    var userNameTag = document.getElementById("username");
    var passwordTag = document.getElementById("password");
    var validationMessageTag = document.getElementById("validationMessage");
        if(userNameTag.value != "user"){
            validationMessageTag.innerHTML = "User name is incorrect, please try again";
            return;
        }
        if(passwordTag.value != "password"){
            validationMessageTag.innerHTML = "Password is incorrect, please try again";
            return;
        }
        window.location.href = "./HomePage/index.html"
    }
    
    function handleLoginSignupToggle(){
        var formHeading = document.getElementById("formHeading");
        var otherFormHeading = document.getElementById("otherFormHeading");
        var submitBtn = document.getElementById("submitBtn");
        otherFormHeading.innerHTML = formHeading.innerHTML;
        if(formHeading.innerHTML == "Login"){
            formHeading.innerHTML = "Signup";
            submitBtn.innerHTML = "Signup";
        }else{
            formHeading.innerHTML = "Login";
            submitBtn.innerHTML = "Login";
        }
    
    }