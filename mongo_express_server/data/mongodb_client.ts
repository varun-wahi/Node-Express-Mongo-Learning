import { MongoClient, Db } from "mongodb";

let mongoDb : Db;

export async function connectToDatabase() {
    const url = "mongodb://localhost:27017"
    const client = new MongoClient(url);

    mongoDb = client.db("socialMedia")
    console.log("Social Media Database Connected Successfully!")
}

export function getDatabase() : Db{
    return mongoDb;
}
