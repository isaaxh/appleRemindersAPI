import pg from "pg";

const pool = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
});

// function to test database connection
// async function getPgVersion() {
//   const client = await pool.connect();
//   try {
//     const result = await client.query("SELECT version()");
//     console.log(result.rows[0]);
//   } finally {
//     client.release();
//   }
// }
//
// getPgVersion(); // run to test connection

export default pool;
