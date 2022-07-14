var user = document.getElementById('user');
var pass = document.getElementById('pass');
var letterNumber = /^[0-9a-zA-Z]+$/;

function login(){

    var usercheck = false;
    var passcheck = false;

    
   
    if (user.value === "" || user.value == null){
        alert("Username is required");

    }else{
       usercheck = true;
    }



    if (pass.value === "" || pass.value == null){
        alert("Password is required");
    }
    else{
        if(pass.value.length >= 6 && pass.value.length <= 20){
            passcheck = true;
        }
        else{
            alert("Password should within 6 to 20 number")
        }
    }

    if( usercheck && passcheck){
        alert("Login Successful")
        window.location.href = "https://steken2.github.io/WebAssignment/";
    }
    
} 
