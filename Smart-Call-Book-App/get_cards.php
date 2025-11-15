<?php
// get_cards.php
$servername = "localhost";
$username = "root";
$password = "";
$database = 'SmartCallBook';

$connect = new mysqli($servername, $username, $password, $database);

if ($connect->connect_error) {
    die("Connection Failed: " . $connect->connect_error);
}

$sql = "SELECT * FROM cards ORDER BY Created DESC";
$result = $connect->query($sql);

$cards = array();
if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $cards[] = $row;
    }
}

echo json_encode($cards);
$connect->close();
?>