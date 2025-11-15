Step 1: Start XAMPP and enable Apache + MySQL
Step 2: Copy the project folder into "htdocs"
Step 3: Open your browser and run this file first:

http://localhost/SmartCallbook/db.php

   → This will create the database tables


Step 4: After database setup, run the login page:

http://localhost/SmartCallbook/Login.html


# Smart Callbook

## Overview
**Smart Callbook** is a simple web-based contact management application that allows users to manage their contacts and easily make calls or send messages. It features a user-friendly interface with dynamic contact cards.  

---

## Features
- **Add New Contact:** Users can add name, phone number, hometown, purpose, and image URL for each contact.  
- **View Contacts:** All contacts are displayed as cards.  
- **Call & SMS Buttons:** Make calls or send messages directly from the card.  
- **Delete Contact:** Users can delete contacts with confirmation.  
- **Dynamic Card Sorting:** Use Up and Down buttons to reorder cards.  
- **Theme Colors:** Customize navigation bar and footer colors.  

---

## Technologies Used
- **Frontend:** HTML, CSS, JavaScript  
- **Backend:** PHP  
- **Database:** MySQL  
- **Libraries & Tools:** Remix Icon, Font Awesome  

---

## Installation & Setup
1. Install XAMPP or any local server and start it.  
2. Place the project folder in the `htdocs` directory.  
3. Run `setup_db.php` to automatically create the database `myweb` and tables `users` and `cards`.  
4. Open `localhost/project-folder/index.html` in your browser.  

---

## Usage
1. **Login:** Users must log in to manage contacts.  
2. **Add Contact:** Click the `+` icon, fill out the form, and click "Create Note".  
3. **View & Interact:** Scroll through cards. Use Call or SMS buttons for direct actions.  
4. **Delete Contact:** Click the trash icon to delete a card.  
5. **Change Theme:** Use the color circles to change the app theme.  

---

## Database Structure

### Users Table
| Column    | Type          | Details                |
|-----------|---------------|-----------------------|
| id        | INT           | PRIMARY KEY, AUTO_INCREMENT |
| username  | VARCHAR(30)   | UNIQUE                |
| email     | VARCHAR(40)   | UNIQUE                |
| passwords | VARCHAR(255)  |                       |
| Created   | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP |

### Cards Table
| Column    | Type          | Details                |
|-----------|---------------|-----------------------|
| id        | INT           | PRIMARY KEY, AUTO_INCREMENT |
| user_id   | INT           | FOREIGN KEY (users.id) |
| IMG       | VARCHAR(500)  | Image URL             |
| USERNAME  | VARCHAR(30)   | Contact Name          |
| PHONE     | VARCHAR(11)   | Contact Number        |
| HOMETOWN  | VARCHAR(60)   | Contact Hometown      |
| PURPOSE   | VARCHAR(25)   | Contact Purpose       |
| Created   | TIMESTAMP     | DEFAULT CURRENT_TIMESTAMP |

---
