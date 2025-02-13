import axios from "axios";

const mainURL = `https://strapi-store-server.onrender.com/api`;

export const customHook = axios.create({
  baseURL: mainURL,
});
