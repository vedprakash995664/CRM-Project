const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./Config/db');
const cors = require('cors');

dotenv.config();

// Connect to the database
connectDB();

const app = express();
app.use(cors());

// Middleware
app.use(express.json());



// Start the server
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
