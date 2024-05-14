// src/index.js
import express, { Express, Request, Response } from "express";
import '@shopify/shopify-api/adapters/node';
import {shopifyApi, LATEST_API_VERSION} from '@shopify/shopify-api';
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();
const port = process.env.PORT || 3000;

const shopify = shopifyApi({
    // The next 4 values are typically read from environment variables for added security
    apiKey: process.env.apiKey,
    apiSecretKey: process.env.apiSecretKey || '',
    hostName: 'localhost:4321',
    hostScheme: 'http',
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: true,
  });

app.get("/", (req: Request, res: Response) => {
    const client = new shopify.clients.Rest({session});
    const response = client.get({path: 'shop'});
//   res.send(`Express + TypeScript Server + ${apiKey}`);
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});