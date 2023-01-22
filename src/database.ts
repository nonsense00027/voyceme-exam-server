import mysql from "mysql2";

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "admin1997!",
    database: "voyceme",
  })
  .promise();

export { pool };
