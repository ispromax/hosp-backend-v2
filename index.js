const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const patientsRoute = require('./routes/patients');

//dotenv.config();
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hospital backend is running!');
});

app.use('/api', require('./routes/patients'));


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));
