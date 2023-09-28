var error = document.getElementById('error');
    var error2 = document.getElementById('error2');
    var fix = document.getElementById('fix');

    function validateEmail(){
        email_3 = document.getElementById('email_3').value;
        if(email_3.length==0){
            error.innerHTML = 'email is required'
            error.style.color = "red";
            return false;
        }
        if(!email_3.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.innerHTML = 'plz enter valid email'
            error.style.color = "red";
            return false;
        }
        error.innerHTML = 'valid'
        error.style.color = "green";
        return true;
    }
    function checkPassword(){
        pass_3 = document.getElementById('pass_3').value;
        if(pass_3.length==0){
            error.innerHTML = 'Password is required'
            error.style.color = "red";
            return false;
        }
        
        error.innerHTML = 'valid'
        error.style.color = "green";
        return true;
    }
    function checkCredentials(){
        if(!validateEmail() || !checkPassword()){
            fix.innerHTML = 'plz enter given data';
            fix.style.color = "red";
            return false;
        }
    }