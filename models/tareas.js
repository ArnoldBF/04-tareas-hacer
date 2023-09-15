const Tarea = require("./tarea");

class Tareas {
  _listado = {};

  get listadoArr() {
    const listado = [];
    Object.keys(this._listado).forEach((key) => {
      listado.push(this._listado[key]);
    });
    return listado;
  }

  constructor() {
    this._listado = {};
  }
  borrarTarea(id = "") {
    if (this._listado[id]) {
      delete this._listado[id];
    }
  }

  cargarTareasFromArray(tareas = []) {
    tareas.forEach((tarea) => {
      this._listado[tarea.id] = tarea;
    });
  }
  crearTarea(desc = "") {
    const tarea = new Tarea(desc);
    this._listado[tarea.id] = tarea;
  }

  listadoCompleto() {
    //1 en verde
    //completada en verde
    //pendiente en rojo
    //1. Alma:: Completada|Pendiente
    console.log();

    this.listadoArr.forEach((tarea, i) => {
      const idx = `${i + 1}.`.green;
      const { desc, completadoEntrada } = tarea;
      const estado = completadoEntrada ? "Completada".green : "Pendiente".red;

      console.log(`${idx} ${desc} ::${estado}`);
    });
  }
  listarPendientesCompletadas(completada = true) {
    console.log();
    let contador = 0;
    this.listadoArr.forEach((tarea) => {
      const { desc, completadoEntrada } = tarea;
      const estado = completadoEntrada ? "Completada".green : "Pendiente".red;
      if (completada) {
        if (completadoEntrada) {
          contador += 1;
          console.log(
            `${contador.toString()}. ${desc} ::${completadoEntrada.green}`
          );
        }
      } else {
        if (!completadoEntrada) {
          contador += 1;
          console.log(`${contador.toString()}. ${desc} ::${estado}`);
        }
      }
    });
  }

  toggleCompletadas(ids = []) {
    ids.forEach((id) => {
      const tarea = this._listado[id];
      if (!tarea.completadoEntrada) {
        tarea.completadoEntrada = new Date().toISOString();
      }
    });
    this.listadoArr.forEach((tarea) => {
      if (!ids.includes(tarea.id)) {
        this._listado[tarea.id].completadoEntrada = null;
      }
    });
  }
}

module.exports = Tareas;
