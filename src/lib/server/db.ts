import mysql from "mysql2/promise";

const pool = await mysql.createPool({
  host: import.meta.env.DB_HOST,
  port: Number(import.meta.env.DB_PORT),
  user: import.meta.env.DB_USER || "N/A",
  password: import.meta.env.DB_PASSWORD || "N/A",
  database: import.meta.env.DB_NAME || "N/A",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

export default pool;