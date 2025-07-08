npm init -y

npm install express mysql2 jsonwebtoken bcryptjs body-parser dotenv

npm install nodemon



project-root/
│
├── entryPoint.js                 # Main application entry
│
├── controllers/
│   ├── database/
│   │   ├── config.js             # Database configuration
│   │   └── DataAccess.js         # Handles database queries (logins, etc.)
│   ├── PostController.js         # Business logic for posts
│
├── middlewares/
│   └── authMiddleware.js         # JWT Authentication middleware
│
├── routes/
│   └── routeWay.js               # Route definitions
│
├── package.json                  # Project dependencies
└── .env                          # Environment variables
