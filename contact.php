<?php
    
    


    
    
    $conn = mysqli_connect("localhost", "root", "", "testdb");

    if($conn === false){
        die("ERROR: Could not connect. "
            . mysqli_connect_error());
    }


    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    $sql = "INSERT INTO contact (name,email,subject,message)VALUES ('$name','$email','$subject','$message')";

    $data = mysqli_query($conn,$sql);


    if($data)
    {
        echo "Data inserted";
    }

    mysqli_close($conn);


    
?>