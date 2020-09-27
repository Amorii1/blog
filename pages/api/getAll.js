import fs from "fs";
import path from "path";

export default (req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const dataFile =JSON.parse( fs.readFileSync(
    path.join(process.cwd(), "file.json"),
    "utf8"
  ));
  console.log(dataFile);
  res.end(JSON.stringify(dataFile));
};
