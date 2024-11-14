TechSphere - Online Electronics Shop
Welcome to TechSphere – an online electronics store built with React and styled with Bootstrap. Explore a wide range of electronic gadgets, read reviews, and manage your shopping cart with ease. The app uses a local mock API powered by JSON Server for product data and reviews.

Features
Browse Products: View a list of electronics, including smartphones, laptops, and accessories.
Product Detail Pages: View detailed product information, reviews, and ratings.
Leave Reviews: Users can submit ratings and reviews for products.
Shopping Cart: Add products to the cart and proceed to checkout (payment integration can be added).
Responsive Design: Optimized for mobile, tablet, and desktop devices using Bootstrap.
Tech Stack
Frontend:

React: For building the user interface.
React Router: For navigation.
Bootstrap: For responsive UI components.
Mock API: JSON Server: Provides a mock REST API that simulates a backend using a local db.json file, where product and review data are stored.

JSON Server: Provides a local REST API using db.json for product and review data.
Installation
1. Clone the repository
bash
Copy code
git clone https://github.com/your-username/techsphere.git
cd techsphere
2. Install dependencies
Make sure Node.js and npm are installed. Then, run:

bash
Copy code
npm install
3. Setup and run JSON Server
Install JSON Server:

bash
Copy code
npm install -g json-server
Start the JSON Server to serve db.json:

bash
Copy code
json-server --watch db.json --port 5000
4. Run the React app
In a separate terminal, run the React app:

bash
Copy code
npm start
The app will be available at http://localhost:3000, and the mock API will run on http://localhost:5000.

Usage
Navigate to http://localhost:3000 to access the app.
Browse products, view details, and leave reviews.
Add products to the shopping cart and proceed to checkout (payment integration can be added later).
API Endpoints
GET /products: Fetch all products.
GET /products/:id: Fetch a single product by ID.
GET /reviews: Fetch all reviews.
POST /reviews: Submit a new review for a product.
Contributing
Contributions are welcome! To contribute:

Fork the repository.
Create a new branch: git checkout -b feature-branch.
Make changes and commit: git commit -am 'Add new feature'.
Push to your fork: git push origin feature-branch.
Open a pull request.
License
This project is licensed under the MIT License – see the LICENSE file for details.