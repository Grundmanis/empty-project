<?php
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

    $email_subject = 'Request from ' . $_SERVER['HTTP_HOST'];

    $result = [
        'status' => true,
        'title' => $t['thanks'],
        'message' => $t['message_sent']
    ];

    // validation expected data exists

    if(!isset($_POST['name']) ||

        !isset($_POST['phone'])) {

        $result = [
            'status' => false,
            'title' => $t['error'],
            'message' => $t['fields_not_filled']
        ];

    }

    $name = $_POST['name'];
    $email = $_POST['email'];
    $phone = $_POST['phone'];

    $email_message = "Form details below.\n\n";


    function clean_string($string) {

        $bad = array("content-type","bcc:","to:","cc:","href");

        return str_replace($bad,"",$string);

    }


    $email_message .= "Name: ".clean_string($name)."\n";

    $email_message .= "Email: ".clean_string($email)."\n";

    $email_message .= "Phone: ".clean_string($phone)."\n";

    // create email headers

    $headers = 'From: '.$email_to."\r\n".

        'Reply-To: '.$email_to."\r\n" .

        'X-Mailer: PHP/' . phpversion();

    @mail($email_to, $email_subject, $email_message, $headers);

}

header('Content-Type: application/json');
echo json_encode($result, JSON_OBJECT_AS_ARRAY);
