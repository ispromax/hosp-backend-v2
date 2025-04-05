const express = require('express');
const dotenv = require('dotenv');
const db = require('./db');
const patientsRoute = require('./routes/patients');

dotenv.config();
const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hospital backend is running!');
});

app.use('/patients', patientsRoute);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
