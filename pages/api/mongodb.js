import { MongoClient } from "mongodb";
const dotenv = require("dotenv");
dotenv.config();
console.log(process.env.DB_URI);

const uri = process.env.DB_URI;
const optoins = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// console.log(uri);
let client;
let db;

export async function connectDatabase() {
  if (!client) {
    client = await MongoClient.connect(uri, optoins);
    db = client.db("vendor");
  }

  return { client, db };
}
