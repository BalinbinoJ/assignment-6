/*
  Name: Justice Tolentino
  Date: 11.18.2026
  CSC 372-01

  This is the models/db.js page for my express crud API assignment. This is where the database connection is established and the table is created.
*/

import pg from 'pg';
export const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

await pool.query(`CREATE TABLE IF NOT EXISTS triviabook (
id SERIAL PRIMARY KEY,
topic TEXT NOT NULL,
question TEXT,
answer TEXT,
difficulty TEXT NOT NULL
)`);


export default pool;