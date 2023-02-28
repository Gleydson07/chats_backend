import "dotenv/config";
import express, { Request, Response } from 'express';
import cors from 'cors';
import { migrations } from "./database";
import { Client } from "pg";

const data = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: Number(process.env.DB_PORT),
};

const app = express();
const client = new Client(data);
app.use(express.json());
app.use(cors());

app.get('/', async (req: Request, res: Response) => {
  return res.send({ message: 'Hello World' });
});

app.get('/roles', async (req: Request, res: Response) => {
  const roles = await client.query('SELECT * FROM user_roles;')
    .then((result) => result.rows);

  return res.send({ roles });
});

app.post('/roles', async (req: Request, res: Response) => {
  const { abbreviation, name, description } = req.body;
  const role = await client.query(
    'INSERT INTO user_roles(abbreviation, name, description) VALUES($1, $2, $3) RETURNING *;', 
    [abbreviation, name, description]
  );

  return res.status(201).json(role.rows[0]);
});

app.get('/users', async (req: Request, res: Response) => {
  const users = await client.query('SELECT * FROM users;')
    .then((result) => result.rows);

  return res.send({ users });
});

app.get('/companies', async (req: Request, res: Response) => {
  const companies = await client.query('SELECT * FROM companies;')
    .then((result) => result.rows);

  return res.send({ companies });
});

app.listen(process.env.PORT, async () => {
  await client.connect();
  await migrations(client);
  console.log(`🎉 Database is connected!`);
  console.log(`🎉 Server is running on port ${process.env.PORT}!`);
});
