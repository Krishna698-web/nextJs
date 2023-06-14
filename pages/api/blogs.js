const fs = require("fs");

export default function handler(req, res) {
  fs.readFile("blogs/learnCSS.json", "utf-8", (err, data) => {
    // if (err) {
    //   console.log(err);
    // }
    res.status(200).json(JSON.parse(data));
  });
}
