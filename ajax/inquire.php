<?php

require('../vendor/autoload.php');

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// echo '<pre>',print_r($_REQUEST,1),'</pre>';die;

    $mail = new PHPMailer(true);
    try {
        //Server settings
        $mail->SMTPDebug = 0;                    
        $mail->isSMTP();                                           
        $mail->Host       = 'ssl://smtp.gmail.com';                    
        $mail->SMTPAuth   = true;                                  
        $mail->Username   = 'residenceinquire@gmail.com';                     
        $mail->Password   = 'Residence1234';                              
        $mail->SMTPSecure = 'ssl';          
        $mail->Port       = 465;                                  

        //Recipients
        $mail->setFrom('residenceinquire@gmail.com', 'Residence INQUIRE');
        $mail->addAddress('anonymouslimk@gmail.com');   


        $body = "<h1>Informations : </h1>
            &nbsp;&nbsp;&nbsp;Nom : ".$_REQUEST['nom']."<br>
            &nbsp;&nbsp;&nbsp;Prenoms : ".$_REQUEST['prenom']."<br>
            &nbsp;&nbsp;&nbsp;Email : ".$_REQUEST['email']."<br>
            &nbsp;&nbsp;&nbsp;ZIP : ".$_REQUEST['zip']."<br>
            &nbsp;&nbsp;&nbsp;Residence : ".$_REQUEST['residence']."<br>
            &nbsp;&nbsp;&nbsp;Budget : ".$_REQUEST['budget']."<br>
            &nbsp;&nbsp;&nbsp;Where hear about : ".$_REQUEST['hear']."<br>
            &nbsp;&nbsp;&nbsp;Real Estate Agent : ".$_REQUEST['estate']."<br>
            &nbsp;&nbsp;&nbsp;Company : ".$_REQUEST['company']."<br>
        ";

        //Content
        $mail->isHTML(true);                                
        $mail->Subject = 'Infos';
        $mail->Body    = $body;

        $mail->send();
        return true;
    } catch (Exception $ex) {
        // debug($ex);
        return false;
    }