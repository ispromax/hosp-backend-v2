const { Pool } = require('pg');

const pool = new Pool({
  connectionString: 'postgresql://dname_1_user:7DdOLXTTDSciD8qlRrvRfEMN27iEMfPR@dpg-cvohlmjuibrs73br9stg-a/dname_1' // process.env.DATABASE_URL, // or directly paste the Render DB URL here temporarily
  ssl: {
    rejectUnauthorized: false
  }
});
