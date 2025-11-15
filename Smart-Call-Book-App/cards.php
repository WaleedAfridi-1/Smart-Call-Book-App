<?php
session_start();

if (!isset($_SESSION['user_id'])) {
    die("User not logged in");
}

$servername = "localhost";
$username = "root";
$password = "";
$database = 'SmartCallBook';

$connect = new mysqli($servername, $username, $password, $database);

if ($connect->connect_error) {
    die(" Connection Failed: " . $connect->connect_error);
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $img = trim($_POST['img']);
    $name = trim($_POST['name']);
    $phone = trim($_POST['phone']);
    $hometown = trim($_POST['hometown']);
    $purpose = trim($_POST['purpose']);
    $user_id = $_SESSION['user_id'];

    $sql = "INSERT INTO cards (user_id, IMG, USERNAME, PHONE, HOMETOWN, PURPOSE)
            VALUES (?, ?, ?, ?, ?, ?)";
    $stmt = $connect->prepare($sql);
    $stmt->bind_param("isssss", $user_id, $img, $name, $phone, $hometown, $purpose);

    if ($stmt->execute()) {
        echo "Data inserted successfully!";
        header("Location: index.html");
        exit();
    } else {
        echo "Error inserting data: " . $stmt->error;
    }

    $stmt->close();
}

$connect->close();
?>