# Billing

This application is developed using a Django REST API for the backend, a React-based frontend, and Microsoft SQL as the database.
The system supports three user roles: Admin, Employee, and Customer.

# 1. Admin Functionality:
  - Admins have the authority to control and create employee accounts.
  - In addition to managing employees, admins oversee the financial aspect of the system.
  - When a customer places an order, the system automatically calculates and collects a 2% fee for each product ordered.

# 2. Employee Responsibilities:
  - Employees are tasked with creating and managing products within the system.
  - The product creation process does not involve any payment.
  - Employees handle the entire order fulfillment process, including delivering products to the specified customers.

# 3. Customer Experience:
  - Customers benefit from a hassle-free and free login experience.
  - They can easily browse and order products from specific employees.
  - The payment structure is transparent, with customers being charged a 2% fee for each product ordered.
