import fs from "fs";
import path from "path";

export default (req, res) => {
  const {
    query: { id },
  } = req;
  res.statusCode = 200;
  res.setHeader("Content-Type", "application/json");

  const dataFile = JSON.parse(
  fs.readFileSync(
    path.join(process.cwd(), "file.json"),
    "utf8"
  ));
  let{results}=dataFile;
console.log(JSON.stringify(results[id]))
  res.end(JSON.stringify(results[id]));
  
};
