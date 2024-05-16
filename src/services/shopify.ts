import "@shopify/shopify-api/adapters/node";
import { shopifyApi, LATEST_API_VERSION } from "@shopify/shopify-api";
import dotenv from "dotenv";
dotenv.config();

const shopify = shopifyApi({
    apiKey: process.env.apiKey || '',
    apiSecretKey: process.env.apiSecretKey || '',
    adminApiAccessToken: process.env.access,
    hostName: process.env.hostName || '',
    apiVersion: LATEST_API_VERSION,
    isEmbeddedApp: false,
    isCustomStoreApp: true,
});

const session = shopify.session.customAppSession(process.env.shop || '');

export const getStoreInfo = () => {
    const client = new shopify.clients.Rest({session});
    const response = client.get({path: 'shop'});

    return response;
}