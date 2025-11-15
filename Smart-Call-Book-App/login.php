<?php
session_start(); 

$database = 'SmartCallBook';
$servername = 'localhost';
$db_user = 'root';
$db_pass = '';

$connect = new mysqli($servername, $db_user, $db_pass, $database);
if ($connect->connect_error) {
    die("Sorry, Connection failed: " . $connect->connect_error);
}

if (!isset($_POST['username'], $_POST['pass'])) {
    echo "<script>alert('Please fill all fields.'); window.history.back();</script>";
    exit();
}

$username = trim($_POST['username']);
$password = trim($_POST['pass']);


$stmt = $connect->prepare("SELECT id, passwords FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();
$result = $stmt->get_result();

if ($result && $result->num_rows > 0) {
    $row = $result->fetch_assoc();
    $db_password = $row['passwords'];
    $user_id = $row['id'];

    if ($password === $db_password) {
        $_SESSION['user_id'] = $user_id;
        $_SESSION['username'] = $username;
        
        echo "<script>
                alert('Login successful');
                window.location.href = 'index.html';
              </script>";
        exit();
    } else {
        echo "<script>
                alert('Invalid Username or Password');
                window.history.back();
              </script>";
        exit();
    }
} else {
    echo "<script>
            alert('Invalid Username or Password');
            window.history.back();
          </script>";
    exit();
}

$stmt->close();
$connect->close();
?>