"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/database.ts
var database_exports = {};
__export(database_exports, {
  client: () => client,
  connectDB: () => connectDB
});
module.exports = __toCommonJS(database_exports);
var import_config = require("dotenv/config");
var import_pg = require("pg");
var data = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT)
};
var client;
var connectDB = async () => {
  try {
    client = new import_pg.Client(data);
    console.log(`\u{1F389} Database is connected!`);
    await initialize(client);
  } catch (error) {
    console.log(error);
    await client.end();
  }
};
async function initialize(client2) {
  await client2.connect();
  console.log(`\u{1F389} Migration started!`);
  const resultExistsDatabase = await client2.query(`
    SELECT datname FROM pg_database WHERE datname = '${process.env.DB_NAME}';
  `);
  if (!resultExistsDatabase.rowCount) {
    await client2.query(`CREATE DATABASE ${process.env.DB_NAME};`);
  }
  await client2.query(
    `
    SELECT 'CREATE DATABASE ${process.env.DB_NAME}' 
    WHERE NOT EXISTS (
      SELECT FROM pg_database WHERE datname = '${process.env.DB_NAME}'
    );`
  );
  await client2.query(`
    CREATE TABLE IF NOT EXISTS companies (
      id SERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      fantasy_name VARCHAR(255) NOT NULL,
      register VARCHAR(11) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await client2.query(`
    CREATE TABLE IF NOT EXISTS user_roles (
      id SERIAL PRIMARY KEY,
      abbreviation VARCHAR(3) NOT NULL,
      name VARCHAR(16) NOT NULL,
      description VARCHAR(255) NOT NULL,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
  await client2.query(`
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
  await client2.end();
  console.log(`\u{1F389} Migration is done!`);
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  client,
  connectDB
});
