<?php
// delete_card.php
$servername = "localhost";
$username = "root";
$password = "";
$database = 'SmartCallBook';

$connect = new mysqli($servername, $username, $password, $database);

if ($connect->connect_error) {
    die("Connection Failed: " . $connect->connect_error);
}

if (isset($_POST['card_id'])) {
    $card_id = $_POST['card_id'];
    
    $sql = "DELETE FROM cards WHERE id = ?";
    $stmt = $connect->prepare($sql);
    $stmt->bind_param("i", $card_id);
    
    if ($stmt->execute()) {
        echo "deleted";
    } else {
        echo "error";
    }
    $stmt->close();
}

$connect->close();
?>