const express = require('express');
const router = express.Router();
const pool = require('../db');

// GET /api/register just for testing from browser
router.get('/register', (req, res) => {
  res.send('API is up! Use POST to submit data.');
});

// POST /api/register - actual form submission
router.post('/register', async (req, res) => {
  const { first_name, last_name, age, gender, phone, email } = req.body;

  try {
    const result = await pool.query(
      `INSERT INTO patients (first_name, last_name, age, gender, phone, email) 
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
      [first_name, last_name, age, gender, phone, email]
    );

    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error(err);
    res.status(500).send('Something went wrong!');
  }
});

module.exports = router;
