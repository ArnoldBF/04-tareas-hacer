const fs = require("fs");
const archivo = "./database/data.json";

const guardaDB = (data) => {
  fs.writeFileSync(archivo, JSON.stringify(data));
};
const leerDB = () => {
  if (!fs.existsSync(archivo)) {
    return null;
  }
  const info = fs.readFileSync(archivo, "utf8");
  const data = JSON.parse(info.toString());
  console.log(data);
  return null;
};
module.exports = {
  guardaDB,
  leerDB,
};
