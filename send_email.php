<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $to = 'davishayden99@gmail.com';
    $subject = 'New Contact Form Submission';
    $headers = "From: $email" . "\r\n" .
               "Reply-To: $email" . "\r\n" .
               'X-Mailer: PHP/' . phpversion();

    $body = "You have received a new message from your website contact form.\n\n".
            "Here are the details:\n\nName: $name\n\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $body, $headers);
    header('Location: thank_you.html');
}
?>