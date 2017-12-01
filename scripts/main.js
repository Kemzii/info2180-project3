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
