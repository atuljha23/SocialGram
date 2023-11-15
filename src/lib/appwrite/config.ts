import {
  Client,
  Account,
  Databases,
  Storage,
  Locale,
  Functions,
  Teams,
  Avatars,
} from "appwrite";

export const appwriteConfig = {
  projectId: import.meta.env.VITE_APPWRITE_PROJECT_ID,
  url: import.meta.env.VITE_APPWRITE_ENDPOINT,
};

export const client = new Client();

client.setEndpoint(appwriteConfig.url).setProject(appwriteConfig.projectId);

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);
export const locale = new Locale(client);
export const functions = new Functions(client);
export const teams = new Teams(client);

export const avatars = new Avatars(client);
