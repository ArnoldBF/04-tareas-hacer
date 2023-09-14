require("colors");

const mostrarMenu = () => {
  return new Promise((resolve) => {
    console.clear();
    console.log("======================".blue);
    console.log("Selenciones una opcion".blue);
    console.log("======================\n".blue);
    console.log(`${"1.".blue}crear una tarea`);
    console.log(`${"2.".blue}listar tareas`);
    console.log(`${"3.".blue}listar tareas completadas`);
    console.log(`${"4.".blue}listar tareas pendientes`);
    console.log(`${"5.".blue}completar tarea(s)`);
    console.log(`${"6.".blue}borrar una tarea`);
    console.log(`${"0.".blue}salir\n`);

    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question("Selecciones una opcion:", (opt) => {
      readLine.close();
      resolve(opt);
    });
  });
};

const pausa = () => {
  return new Promise((resolve) => {
    const readLine = require("readline").createInterface({
      input: process.stdin,
      output: process.stdout,
    });
    readLine.question(`\nPresione ${"ENTER".green} para continuar\n`, (opt) => {
      readLine.close();
      resolve();
    });
  });
};
module.exports = {
  mostrarMenu,
  pausa,
};
