<?php
$con = mysqli_connect("localhost", "root", "","mydb");
if($con === false){ 
    die("ERROR: Could not connect. " 
        . mysqli_connect_error()); 
} 

$fn = $_POST['fn'];
$mail = $_POST['mail'];
$num = $_POST['num'];
$howmany = $_POST['howmany'];
$date = $_POST['date'];
$time = $_POST['time'];
$message = $_POST['message'];


$sql = "INSERT INTO `customer`(`name` , `e_mail`, `ph_num`, `no_people`, `date_`, `time_`, `message_`) 
                         VALUES ('$fn', '$mail', '$num', '$howmany', '$date','$time','$message')";


if(mysqli_query($con, $sql)){ 
    echo 
    "<!DOCTYPE html>
    <html>
        <head>
            <style>
                body{
                    background: linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)), url('images/italian-food.jpg') center/cover fixed;
                }
                div{
                    margin-top: 200px;
                }
                h3{
                    color: white; 
                    font-size: 30px; 
                    text-align: center;
                    margin-left: -20px;
                    margin-top: -100px;
                    opacity: 0.8;
                }
                h1{
                    color: rgb(204, 163, 0); 
                    font-size: 45px; 
                    text-align: center;
                    margin-top: 20px;
                }
                h6{
                    color: white; 
                    font-size: 25px; 
                    text-align: center;
                    margin-top: -15px;
                    margin-left: -30px;
                    opacity: 0.8;
                }
            </style>
        </head>
        <body>
            <div>
                <h3>Reservation successful!Confirmation message sent through SMS and E-mail.</h3> 
                <h1>Thank you $fn for choosing Italian Osteria!</h1> 
                <h6>Have a good day!</h6>
            </div>
        </body>
    </html>";
  }
else{ 
    echo "ERROR: Hush! Sorry $sql. " 
        . mysqli_error($con); 
} 
  

mysqli_close($con); 
?> 


