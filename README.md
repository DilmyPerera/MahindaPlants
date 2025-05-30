# 🌿 Mahinda Plants E-commerce Website

An online platform for Mahinda Plants – a flower plants, pots, and gardening supplies store – to expand its market reach and provide a seamless shopping experience for plant lovers.

## 🛒 Overview

This project aims to develop a fully functional e-commerce website tailored for **Mahinda Plants**, allowing customers to browse, select, and purchase a wide variety of plants, pots, and gardening supplies from the comfort of their homes.

## 🚀 Features

- 🌱 **Product Catalog** – Browse categorized listings of plants, pots, and garden supplies.
- 🔍 **Search & Filter** – Quickly find products based on type, price, and availability.
- 🛒 **Shopping Cart** – Add, update, and remove products easily before checkout.
- 💳 **Online Payment Integration** – Secure and reliable payment gateway.
- 👤 **User Authentication** – Customer sign-up, login, and profile management.
- 📦 **Order Management** – Smooth checkout process and admin-side order tracking.
- 🛠️ **Admin Dashboard** – Manage inventory, orders, and customer queries.
<!-- 📢 **Blog/News Section** – Share seasonal promotions, gardening tips, and updates. -->

## 🎯 Objectives

- Increase visibility and reach of the Mahinda Plants business.
- Simplify product browsing and purchasing for customers.
- Provide a secure and modern platform for online plant shopping.

## 👥 Target Users

- **Customers** – Access to a digital catalog and home delivery of products.
- **Business Owner** – Manage sales, expand market reach, and grow revenue.
- **Community** – Learn more about plant care and gardening through blogs.

## 💻 Technologies Used

- Frontend: React 
- Backend: SpringBoot
- Database: MySQL
<!-- Payment Integration: PayHere / Stripe / PayPal
- Hosting: Netlify / Vercel / Heroku (Based on budget constraints)
-->
## 📦 Deliverables

- Fully responsive website
- Secure authentication system
- Product management system
- Admin dashboard
- Payment gateway integration
- Documentation

## 🔐 Constraints

- Limited budget for hosting and promotions
- Need for secure payment transactions
- Real-time inventory updates
- Deadline within academic semester

## Backend
The **backend** of the Mahinda Plants E-commerce Website, developed as part of an academic project. The application is built using **Spring Boot** and provides a robust, secure, and scalable foundation for managing an online platform that sells plants, pots, and gardening supplies.

---

### 🚀 Features

- 🌿 Product Management (plants, pots, gardening tools)
- 👥 User Authentication (Spring Security)
- 🛒 Shopping Cart and Order Processing
- 💳 Secure Payment Integration (planned)
- 📁 File Upload to AWS S3 for product images
- 🗃️ MySQL Database with Spring Data JPA
- 📦 RESTful API with Spring Web
- 🧾 Input Validation with Validation I/O
- 📊 Admin Dashboard Support (via API endpoints)

### 🔧 Tech Stack

| Technology       | Description                                |
|------------------|--------------------------------------------|
| Java             | Main programming language                  |
| Spring Boot      | Backend framework                          |
| Spring Web       | For building RESTful web services          |
| Spring Data JPA  | For data persistence                       |
| Spring Security  | For secure authentication & authorization  |
| MySQL            | Relational database for storing app data   |
| Lombok           | Reduces boilerplate code                   |
| AWS S3           | Cloud file storage for product images      |
| Maven            | Dependency management                      |


### 🛠️ How to Run

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/mahinda-plants-backend.git
   ```
2. Open in **Spring Tool Suite (STS)** or **IntelliJ IDEA**
3. Configure your `application.properties` file with:
   ```properties
   spring.datasource.url=jdbc:mysql://localhost:3306/your_db_name
   spring.datasource.username=your_username
   spring.datasource.password=your_password

   aws.accessKey=your_aws_access_key
   aws.secretKey=your_aws_secret_key
   aws.s3.bucketName=your_bucket_name
   aws.region=your_aws_region
   ```
4. Run the application:
   - Right-click `MainApplication.java` > Run As > Spring Boot App

### 🧪 API Testing with Postman

We provide a ready-to-use **Postman Collection** to help you test the API endpoints quickly and efficiently.

### 🔗 Postman Workspace

👉 [Mahinda Plants Backend Postman Collection](https://app.getpostman.com/join-team?invite_code=c6e5a9e663f838757f592ef799d3d8e88b921aab8f593dcf465785fa0711a9bc&target_code=fc7b5244a93779166553ddb818fae08a)  

### 📥 How to Use

1. Ensure the backend server is running at `http://localhost:3000`
2. Click the link above and open the collection in your Postman app.
3. Import both the **collection** and **environment file** (if provided).
4. Set up the following environment variables in Postman:
   - `base_url` = `http://localhost:3000`
   - `jwt_token` = *Set after logging in via `/api/auth/login`*
5. Test available endpoints such as:
   - `GET /api/products`
   - `POST /api/auth/register`
   - `POST /api/orders`
   - etc.

### 🔐 Authentication Notes

- Some endpoints are secured and require a JWT token.
- Use the login endpoint to retrieve a valid token and add it to the `Authorization` header like this:

``` bash
Authorization: Bearer <your_token>
```
---

## 🔧 Future Improvements

- Mobile app version of the platform
- International shipping support
- Loyalty rewards for frequent customers
- Chat support system

