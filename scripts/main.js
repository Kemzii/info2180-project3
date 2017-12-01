function validate() {
    var inputs = document.getElementsByTagName("input");
    for (var i = 0; i < inputs.length; i++) {
        if(inputs[i].value == "" || inputs[i].value==null){
            inputs[i].classList.add('error');
        return false;
        }
        else {
            inputs[i].classList.add('valid');
        }
    }
    
     var emailPattern =/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
     var email = document.getElementById("email").value;
     if (!emailPattern.test(email)){
        document.getElementById("email").value = "Enter a valid email address";
        document.getElementById("email").classList.add('error-message');
        return false;
        
    }
    
    var pswPattern =/^(?=.*[A-Zaz])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/;
     var psw = document.getElementById("psw").value;
     if (!pswPattern.test(psw)){
        alert("Password must be at least eight characters long, contain at least one uppercase, one lowercase, one number, and one special character");
        document.getElementById("psw").classList.add('error-message');
        return false;
        
    }
    
    var password = document.getElementById("psw").value;
    var confirmPassword = document.getElementById("psw2").value;
    if (password != confirmPassword) {
        alert("Passwords do not match!");
        return false;
        }
        

    return true;
}
