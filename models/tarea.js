const { v4: uuidv4 } = require("uuid");

class Tarea {
  id = "";
  desc = "";
  completadoEntrada = null;

  constructor(desc) {
    this.desc = desc;
    this.id = uuidv4();
    this.completadoEntrada = null;
  }
}

module.exports = Tarea;
