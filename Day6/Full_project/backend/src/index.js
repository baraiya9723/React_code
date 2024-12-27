const express = require('express');
const cors = require('cors');
const todoRoutes = require('./routes/todoRoutes');
require('dotenv').config();
const mysql = require('mysql2/promise');

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes); 

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

app.listen(port, async () => {
  try {
    console.log(`Server listening on port ${port}`);
    // Test connection (optional)
    const [rows] = await pool.query('SELECT 1'); 
    console.log('Connected to MySQL successfully!');
  } catch (error) {
    console.error('Error connecting to MySQL:', error);
  }
});