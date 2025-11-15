<?php
$database = 'SmartCallBook';
$servername = 'localhost';
$username = 'root';
$password = '';

$connect = new mysqli($servername, $username, $password);

if ($connect->connect_error) {
    die("Connection failed: " . $connect->connect_error);
}

// Create database if not exists
$create = "CREATE DATABASE IF NOT EXISTS $database";
if ($connect->query($create) === TRUE) {
    echo "Database created successfully.<br>";
} else {
    die("Error Creating Database: " . $connect->error . "<br>");
}

$connect->select_db($database);

// Users table
$sql = "CREATE TABLE IF NOT EXISTS users(
    id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(30) UNIQUE,
    email VARCHAR(40) UNIQUE,
    passwords VARCHAR(255),
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($connect->query($sql) === TRUE) {
    echo "User Table created successfully.<br>";
} else {
    die("Error Creating Table: " . $connect->error . "<br>");
}

$cards = "CREATE TABLE IF NOT EXISTS cards (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,  
    IMG VARCHAR(500),
    USERNAME VARCHAR(30),
    PHONE VARCHAR(11),
    HOMETOWN VARCHAR(60),
    PURPOSE VARCHAR(25),
    Created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
)";

if ($connect->query($cards) === TRUE){
    echo "Cards Table Created successfully.<br>";
} else {
    die("Error Creating Table: ".$connect->error."<br>");
}

$connect->close();
echo "Database setup completed!";
?>