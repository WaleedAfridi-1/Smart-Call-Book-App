# Smart-Call-Book-App
Smart Callbook is a modern, responsive contact management web application built with PHP, MySQL, HTML, CSS, and JavaScript. It provides secure authentication, animated card-based call notes, theme options, and a clean UI for creating, storing, and managing detailed call records efficiently.




# 📱 Smart Callbook Application  
A modern, responsive, and database-driven contact management system built with **HTML, CSS, JavaScript, and PHP (MySQL)**.  
Smart Callbook allows users to register, log in, and manage their call notes professionally with a clean UI and dynamic card-based layout.

---

## 🚀 Overview  
Smart Callbook is designed as a lightweight CRM-style web application where users can create, update, and manage call logs stored securely in a MySQL database.  
It features an elegant UI, smooth animations, and a fully responsive layout optimized for desktop and mobile.

---

## 🔐 Core Features

### ⭐ User Authentication  
- Secure Registration (Name, Email, Password)  
- Login System with server-side validation  
- Password hashing recommended for production  
- Session-based authentication  
- Logout functionality

### ⭐ Call Notes Management  
Each user can create unlimited call notes, including:  
- Contact image URL  
- Full name  
- Phone number  
- Home town  
- Purpose of the call  

Data is stored in MySQL and fetched dynamically.

### ⭐ Dynamic Card Interface  
- Animated stacked card layout  
- Smooth transitions  
- Auto-layered UI  
- Delete card functionality  
- Instant DOM updates using JavaScript  
- Backend sync with PHP + MySQL

### ⭐ Theme Color Options  
4 modern theme palettes:  
- Black  
- Orange  
- Purple  
- Teal

### ⭐ Fully Responsive Design  
Optimized for:  
- Desktop  
- Tablet  
- Mobile screens

---

## 🛠️ Technologies Used  

| Technology | Purpose |
|-----------|---------|
| **HTML5** | Structure & layout |
| **CSS3**  | Modern UI, animations, themes |
| **JavaScript (ES6)** | Dynamic rendering & event handling |
| **PHP 8+** | Server-side logic & API endpoints |
| **MySQL** | User & card storage |
| **Font Awesome / Remix Icon** | UI icons |

---

## 📁 Project Structure

```
Smart-Callbook/
│
├── index.html            # Main UI + login/register UI container
├── style.css             # All styling, animations, themes
├── app.js                # Card logic, AJAX requests, animations
│
├── db.php
├── get_cards.php
├── delete_cards.php
├── Login.html
├── Login.js
├── login.php             # User authentication
├── signup.php          # User account creation
├── cards.php             # CRUD operations for call notes
├── logout.php            # Session destroy


```

---

## 🗄️ Database Structure

### **Users Table**

| Field | Type | Description |
|-------|------|-------------|
| id | INT (PK) | Auto increment |
| name | VARCHAR | Full name |
| email | VARCHAR | Unique user email |
| password | VARCHAR | Hashed password |

---

### **Cards Table**

| Field | Type | Description |
|-------|------|-------------|
| id | INT (PK) | Auto increment |
| user_id | INT (FK) | Linked to users table |
| image | TEXT | Image URL |
| fullname | VARCHAR | Contact name |
| phone | VARCHAR | Phone number |
| address | VARCHAR | Home town |
| purpose | TEXT | Purpose of call |
| created_at | TIMESTAMP | Auto timestamp |

---

## ⚙️ Installation Guide

### 1️⃣ Clone the Repository  
```
git clone https://github.com/WaleedAfridi-1/Smart-Call-Book-App.git
```

### 2️⃣ Move Project to Your Local Server  
For example, using **XAMPP**:  
```
htdocs/Smart-Call-Book-App/
```

### 3️⃣ Import the Database  
- Open phpMyAdmin  
- Create a database:  
  ```
  smartcallbook
  ```  

### 4️⃣ Configure Database Connection  
Update credentials inside PHP files (if needed):

```php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "smartcallbook";
```

### 5️⃣ Run the App  
```
http://localhost/Smart-Call-Book-App/
```

---



## 🔒 Security Recommendations  
For production use:  
- Use **password_hash()** and **password_verify()**  
- Use prepared statements (**PDO or MySQLi Prepared**)  
- Disable error output publicly  
- Use HTTPS  
- Validate/sanitize every input  

---

## 👨‍💻 Author  
**Waleed Afridi**  
- GitHub: https://github.com/WaleedAfridi-1  
- LinkedIn: https://www.linkedin.com/in/waleed-afridi-3931a8333/

---

## ⭐ Contribute  
Contributions, issues, and feature requests are welcome!  
Feel free to open a PR or issue.

---

## 🌟 Support  
If you find this project useful, please consider giving it a **star ⭐ on GitHub**!

