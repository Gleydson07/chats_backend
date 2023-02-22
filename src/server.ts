import "dotenv/config";
import express, { Request, Response } from 'express';
import { connectDB } from "./database";

const app = express();

app.get('/', (req: Request, res: Response) => {
  return res.send({ message: 'Hello World' });
});

app.listen(process.env.PORT, async () => {
  await connectDB();
  console.log(`🎉 Server is running on port ${process.env.PORT}!`);
});
