<?php
if (!empty($_POST['lang'])) {
    $lang = $_POST['lang'];
}
include('translations.php');
$result = [
    'status' => false,
    'title' => $t['error'],
    'message' => $t['no_email']
];

if(!empty($_POST['bat'])) {
    die();
}

if(isset($_POST['email'])) {

    $email_to = "info@gst-hospitality.com";

    $email_subject = 'Ticket Boom Subscribe';

    $result = [
        'status' => true,
        'title' => $t['thanks'],
        'message' => $t['subscribe_sent']
    ];

    $email = $_POST['email'];

    $email_message = "Form details below.\n\n";


    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }

    $email_message .= "Email: ".clean_string($email)."\n";

    // create email headers

    $headers = 'From: '.$email."\r\n".

        'Reply-To: '.$email."\r\n" .

        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

}

header('Content-Type: application/json');
echo json_encode($result, JSON_OBJECT_AS_ARRAY);
