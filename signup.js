var user = document.getElementById('user');
var pass = document.getElementById('pass');
var repass = document.getElementById('repass');
var letterNumber = /^[0-9a-zA-Z]+$/;

function signup(){

    var usercheck = false;
    var passcheck = false;
    var repasscheck = false;

  
   
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
        if(repass.value == pass.value){
            repasscheck = true;
        }
        else{
            if(repass.value == null || repass.value === ""){
                alert("rePassword should not be empty")
            }
            else{
                alert("rePassword should be same with password")
            }
        }
    }

    

    if(usercheck && passcheck && repasscheck){
        alert("Sign Up Successfully")
        window.location.href = "https://steken2.github.io/WebAssignment/login.html";
    }
    
} 
