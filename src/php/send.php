<?

$name = '';
$phone = '';
$email = '';
$json = array();

$subject = 'ProDes'; //Загаловок сообщения
$message = '<html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>'; //Текст нащего сообщения можно использовать HTML теги

if (isset($_POST['name']) && $_POST['name'] !== '') {
    $name = $_POST['name'];
    $message .= "<p>Ім'я: ".$name.'</p>';
} else {
    $json['error']['name'] = "Будь ласка, введіть своє ім'я";
}

if (isset($_POST['phone']) && $_POST['phone'] !== '') {
    $phone = $_POST['phone'];
    $message .= '<p>Телефон: '.$phone.'</p>';
} else {
    $json['error']['phone'] = 'Будь ласка, введіть свій телефон';
}

if (isset($_POST['email']) && $_POST['email'] !== '') {
    $email = $_POST['email'];
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        $message .= '<p>Email: '.$email.'</p>';
    }else{
        $json['error']['email'] = 'Неправильний email';
    }
}

if (isset($_POST['date']) && $_POST['date'] !== '') {
    $date = $_POST['date'];
    $message .= '<p>Дата: '.$date.'</p>';
}
if (isset($_POST['time']) && $_POST['time'] !== '') {
    $time = $_POST['time'];
    $message .= '<p>Час: '.$time.'</p>';
}
$message .= '</body></html>';

if (!$json){
    $to = 'Kuzya777777kuzya@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: masterpava.kz \r\n"; //Наименование и почта отправителя
    $status = mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    if ($status) {
        $json['success'] = 'Сообщение отправлено, наж менеджер свяжеться с вами в ближайшее время';
    } else {
        $json['success'] = 'К сожалению сообщение не дошло до нас. Попробуйте немного позже';
    }
}


echo json_encode($json);
?>