"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStoreInfo = void 0;
require("@shopify/shopify-api/adapters/node");
const shopify_api_1 = require("@shopify/shopify-api");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const shopify = (0, shopify_api_1.shopifyApi)({
    // The next 4 values are typically read from environment variables for added security
    apiKey: process.env.apiKey || '',
    apiSecretKey: process.env.apiSecretKey || '',
    adminApiAccessToken: process.env.access,
    hostName: process.env.hostName || '',
    apiVersion: shopify_api_1.LATEST_API_VERSION,
    isEmbeddedApp: false,
    isCustomStoreApp: true,
});
const session = shopify.session.customAppSession(process.env.shop || '');
const getStoreInfo = () => {
    const client = new shopify.clients.Rest({ session });
    const response = client.get({ path: 'shop' });
    return response;
};
exports.getStoreInfo = getStoreInfo;
