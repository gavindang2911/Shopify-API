// src/index.js
import express, { Express, Request, Response, response } from "express";
import {getStoreInfo} from './services/shopify';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;


app.get("/", async (req: Request, res: Response) => {
    const store = await getStoreInfo();
    console.log('Store:', store);
    return res.status(200).json(store);
//   res.send(`Express + TypeScript Server + ${apiKey}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});