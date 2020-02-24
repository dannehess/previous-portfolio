<?php

$addressto = "daniel.hessling@gmail.com";
$subject = "Från hemsidan".$_POST['subject'];
$content = "Name: ".$_POST['name']."\n"
           ."Email: ".$_POST['email']."\n"
           ."Message: ".$_POST['message']."\n";

if(!$_POST['name'] || !$_POST['email'] || !$_POST['message']){
    header("Location: contact.html");
}

$email = $_POST['email'];
if (mail($addressto, $subject, $content, 'Od: <' . $email . '>')) {
      $headers = "Kontakt från hemsidan";
    $headers = "Content-type: text/html\r\n";
    $success = mail($to, $subject, $body, $headers);
    
echo "<script type='text/javascript'>

window.location='http://www.danielhessling.se/contact.html#';
</script>";
}

?>