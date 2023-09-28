var error = document.getElementById('error');
    var fix = document.getElementById('fix');
    function validateEmail(){
        var input = document.getElementById('input').value;
        if(input.length==0){
            error.innerHTML = 'email is required'
            error.style.color = "red";
            return false;
        }
        if(!input.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
            error.innerHTML = 'plz enter valid email'
            error.style.color = "red";
            return false;
        }
        error.innerHTML = 'valid'
        error.style.color = "green";
        return true;
        
    }
    function validatebutton(){
        if(!validateEmail()){
            fix.innerHTML = 'plz enter email';
            return false;
        }
    }