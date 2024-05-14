"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.js
const express_1 = __importDefault(require("express"));
require("@shopify/shopify-api/adapters/node");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT || 3000;
const apiKey = process.env.apiKey;
// const shopify = shopifyApi({
//     // The next 4 values are typically read from environment variables for added security
//     apiKey: process.env.apiKey,
//     apiSecretKey: 'APISecretFromPartnersDashboard',
//     scopes: ['read_products'],
//     hostName: 'ngrok-tunnel-address',
//     ...
//   });
app.get("/", (req, res) => {
    // const client = new shopify.ClientType.Rest({session});
    // const response = client.get({path: 'shop'});
    res.send(`Express + TypeScript Server + ${apiKey}`);
});
app.listen(port, () => {
    console.log(`[server]: Server is running at http://localhost:${port}`);
});
