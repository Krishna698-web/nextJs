const fs = require("fs");
import { connectDatabase } from "./mongodb";

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blogs");
  const blogContents = [];
  for (let i = 0; i < data.length; i++) {
    const fileData = await fs.promises.readFile(`blogs/${data[i]}`, "utf-8");
    blogContents.push(JSON.parse(fileData));
  }

  // const { client, db } = await connectDatabase();

  // console.log(client, db);
  // console.log(blogContents);
  res.status(200).json(blogContents);
}
