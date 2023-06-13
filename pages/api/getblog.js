const fs = require("fs");

export default async function handler(req, res) {
  const data = await fs.promises.readdir("blogs");
  const blogContents = [];
  for (let i = 0; i < data.length; i++) {
    const fileData = await fs.promises.readFile(`blogs/${data[i]}`, "utf-8");
    blogContents.push(JSON.parse(fileData));
  }
  // console.log(blogContents);
  res.status(200).json(blogContents);
}
