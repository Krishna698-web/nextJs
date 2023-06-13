const fs = require("fs");

export default function handler(req, res) {
  fs.readdir("blogs", (err, data) => {
    console.log(data);
    if (err) {
      console.log(err);
    }
    res.status(200).json(data);
  });
}
