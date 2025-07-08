require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const routeWay = require('./routes/routeWay');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: '*',
  // origin: 'http://localhost:4200', 
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

app.options('*', cors());

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api', routeWay);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});

