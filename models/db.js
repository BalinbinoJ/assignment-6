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