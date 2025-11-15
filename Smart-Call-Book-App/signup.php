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

// Check that form fields exist
if (!isset($_POST['name'], $_POST['email'], $_POST['pass'])) {
    echo "<script>alert('Please fill all fields.'); window.history.back();</script>";
    exit();
}

// Trim inputs
$username = trim($_POST['name']);
$email = trim($_POST['email']);
$passwords = trim($_POST['pass']);

// Basic validation
if ($username === '' || $email === '' || $passwords === '') {
    echo "<script>alert('Please fill all fields.'); window.history.back();</script>";
    exit();
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo "<script>alert('Please enter a valid email address.'); window.history.back();</script>";
    exit();
}

// First check if email already exists
$check_stmt = $connect->prepare("SELECT id FROM users WHERE email = ?");
if ($check_stmt) {
    $check_stmt->bind_param("s", $email);
    $check_stmt->execute();
    $check_stmt->store_result();
    
    if ($check_stmt->num_rows > 0) {
        echo "<script>
                alert('This email is already registered. Please use a different email or login.');
                window.history.back();
              </script>";
        $check_stmt->close();
        $connect->close();
        exit();
    }
    $check_stmt->close();
}

// Prepared statement to insert user
$stmt = $connect->prepare("INSERT INTO users (username, email, passwords) VALUES (?, ?, ?)");
if(!$stmt) {
    echo "<script>alert('Database error. Please try again later.'); window.history.back();</script>";
    exit();
}

$stmt->bind_param("sss", $username, $email, $passwords);

if($stmt->execute()){
    $new_user_id = $connect->insert_id;
    $_SESSION['user_id'] = $new_user_id;
    $_SESSION['username'] = $username;
    
    echo "<script>
            alert('Registration successful. You can now login.');
            window.location.href = 'Login.html';
          </script>";
} else {
    // Handle other possible errors
    $err = $connect->error;
    if (strpos($err, 'Duplicate entry') !== false) {
        echo "<script>
                alert('This email is already registered. Please use a different email.');
                window.history.back();
              </script>";
    } else {
        echo "<script>
                alert('Registration failed: " . addslashes($err) . "');
                window.history.back();
              </script>";
    }
}

$stmt->close();
$connect->close();
?>