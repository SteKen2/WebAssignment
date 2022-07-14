var name1 = document.getElementById('name');
var email = document.getElementById('email');
var subject = document.getElementById('subject');
var comment = document.getElementById('comment');
var checkemail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

function contact(){

    var namecheck = false;
    var emailcheck = false;
    var subjectcheck = false;
    var commentcheck = false;


    if (name1.value === "" || name1.value == null){
        alert("Name is required")
    }else{

    }

    if (email.value === '' || email.value == null){
        alert("Email is required");
    }
    

    if(subject.value.length >=1 && subject.value.length <= 40){
        
    }
    else{
        if (subject.value === '' || subject.value == null){
            alert('Subject is required');
        }else{
            alert("Subject should not more than 40 word")
        }
    }
    if(comment.value.length >=1 && comment.value.length <= 250){
       
    }
    else{
        if (comment.value === '' || comment.value == null){
            alert('Comment is required');
        }else{
            alert("Subject should not more than 250 word")
        }
        
    }

    if (namecheck && emailcheck && subjectcheck && commentcheck){

    }

}