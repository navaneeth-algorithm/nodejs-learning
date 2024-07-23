
# Learning Project

This project demonstrates the implementation of a simple Node.js application with controllers, routes, middlewares, and JWT-based authentication for registering and logging in users.

## Project Structure

```
learning/
├── api.http
├── package.json
├── README.md
├── server.js
├── app/
│   ├── controllers/
│   │   └── userController.js
│   ├── middlewares/
│   │   └── authMiddleware.js
│   ├── models/
│   │   ├── jwtTokenModel.js
│   │   └── userModel.js
│   └── routes/
│       └── userRoutes.js
└── config/
    └── config.js
```

## Features

- **Controllers**: Handle the business logic of the application.
- **Routes**: Define the endpoints for the application.
- **Middlewares**: Provide authentication and validation mechanisms.
- **JWT Tokens**: Secure routes with JSON Web Tokens for user authentication.
- **User Registration and Login**: Implement user registration, login, and token validation with expiration.

## Installation

1. Clone the repository:

```bash
git clone <repository_url>
cd learning
```

2. Install the dependencies:

```bash
npm install
```

## Usage

1. Start the server:

```bash
node server.js
```

2. Use the provided `api.http` file to test the API endpoints using a tool like [HTTP Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client) for VS Code.

## API Endpoints

- **POST /register**: Register a new user.
- **POST /login**: Log in an existing user.
- **GET /protected**: Access a protected route (requires a valid JWT token).

## Configuration

- The configuration file (`config/config.js`) contains settings for the JWT secret and token expiration.

## Dependencies

- `express`: Web framework for Node.js.
- `body-parser`: Middleware to parse incoming request bodies.
- `cookie-parser`: Middleware to parse cookies.
- `jsonwebtoken`: Library to work with JSON Web Tokens.

### Basics

Run this command for working:

```bash
npm install express body-parser cookie-parser jsonwebtoken
```

## File Descriptions

- **server.js**: Main server file that sets up the Express app and connects routes.
- **userController.js**: Contains logic for user registration and login.
- **authMiddleware.js**: Middleware for checking the validity of JWT tokens.
- **jwtTokenModel.js**: Model for handling JWT token-related operations.
- **userModel.js**: Model for user data.
- **userRoutes.js**: Defines user-related routes.

## Output
https://github.com/user-attachments/assets/33ffba6d-acbf-4950-9648-405ab7552731

## License

This project is licensed under the MIT License.

---

Feel free to reach out if you have any questions or need further assistance.
