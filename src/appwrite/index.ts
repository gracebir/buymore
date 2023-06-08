import { Client, Databases, Account } from 'appwrite'

const client = new Client()
client
    .setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT as string)
    .setProject(process.env.NEXT_PUBLIC_PROJECT as string)

export const databases = new Databases(client);
export const account = new Account(client);