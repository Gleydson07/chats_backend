import "dotenv/config";
import { Client } from 'pg';

async function migrations(client: Client) {
  try {
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
        abbreviation VARCHAR(3) UNIQUE NOT NULL,
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

    console.log(`🎉 Migration is done!`);
  } catch (error) {
    console.log(error);
    await client.end();
  }
}

export { migrations };