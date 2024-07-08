## Test Task: Developing a RESTful API for Managing a Book Collection with Advanced Features

Description :
You need to develop a RESTful API for managing a book collection. The API should allow users to add books, view a list of books, update book information, and delete books. In addition, the API should have features for managing users and their roles using bit masks.

Requirements :
1. Adding a book
- HTTP method: POST
- Endpoint: /books
- Request body: JSON with title, author, publicationDate, genres
- Response: JSON with added book data
- Requires authentication (only for users with the "administrator" role)

2. Getting a list of books
- HTTP method: GET
- Endpoint: /books
- Response: JSON array with all books data

3. Getting a book by ID
- HTTP method: GET
- Endpoint: /books/:id
- Response: JSON with book data

4. Updating book information
- HTTP method: PUT
- Endpoint: /books/:id
- Request body: JSON with title, author, publicationDate, genres
- Response: JSON with updated book data
- Requires authentication (only for users with the "administrator" role)

5. Deleting a book
- HTTP method: DELETE
- Endpoint: /books/:id
- Requires authentication (only for users with the "administrator" role)

6. User registration
- HTTP method: POST
- Endpoint: /users/register
- Request body: JSON with username, password, email fields
- Email confirmation via letter
- Response: JSON with registered user data

7. User authentication
- HTTP method: POST
- Endpoint: /users/login
- Request body: JSON with username, password fields
- Response: JSON with JWT token

8. Getting information about the current user
- HTTP method: GET
- Endpoint: /users/me
- Response: JSON with current user data
- Requires authentication

9. Changing user role
- HTTP method: PUT
- Endpoint: /users/:id/role
- Request body: JSON with role field (use bit masks for roles)
- Response: JSON with updated user data
- Requires authentication (only for users with the "administrator" role)

Additional requirements :
- Use Node.js and one of the frameworks (Express.js, Koa.js, etc.)
- Use a database (e.g. MongoDB, PostgreSQL, or another at your discretion)
- Code should be well structured and readable
- Implement authentication and authorization using JWT

## setup
npm init
npm install express
npm install mongoose
npm install bcrypt
npm install express-rate-limit
npm install monitor
npm install node-cache
npm install nodemon
npm install queue
npm install jsonwebtoken
npm install dotenv
npm install axios
npm install xml2js
npm install iconv-lite
npm install cors
npm install node-cron
npm install pm2 -g
npm install --save-dev jest
npm install --save-dev supertest
npm install --save-dev chai
npm install --save-dev @faker-js/faker

# test
npm test

# run
npm start