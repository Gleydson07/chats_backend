import "dotenv/config";
import { Client } from 'pg';

const data = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
};

let client: Client;
const connectDB = async () => {
  try {
    client = new Client(data);

    console.log(`🎉 Database is connected!`);
    await initialize(client);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};

async function initialize(client: Client) {
  await client.connect();
  console.log(`🎉 Migration started!`);

  const resultExistsDatabase = await client.query(`
    SELECT datname FROM pg_database WHERE datname = '${process.env.DB_NAME}';
  `);
  
  if (!resultExistsDatabase.rowCount) {
    await client.query(`CREATE DATABASE ${process.env.DB_NAME};`);
  }

  await client.query(`
    SELECT 'CREATE DATABASE ${process.env.DB_NAME}' 
    WHERE NOT EXISTS (
      SELECT FROM pg_database WHERE datname = '${process.env.DB_NAME}'
    );`
  );

  await client.query(`
    CREATE TABLE IF NOT EXISTS companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      fantasy_name VARCHAR(255) NOT NULL,
      register VARCHAR(11) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS user_roles (
      id SERIAL PRIMARY KEY,
      abbreviation VARCHAR(3) NOT NULL,
      name VARCHAR(16) NOT NULL,
      description VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);

  await client.query(`
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE,
      role_id INT NOT NULL,
      company_id INT NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      FOREIGN KEY (company_id) REFERENCES companies(id),
      FOREIGN KEY (role_id) REFERENCES user_roles(id)
    )
  `);

  await client.end();
  console.log(`🎉 Migration is done!`);
}

export { client, connectDB };