//const argv = require('yargs').argv;
const argv = require('./config/yargs').argv;
const colors = require('colors');

const porHacer = require('./por-hacer/por-hacer');
//console.log(argv);

let comando = argv._[0];

switch (comando) {

    case 'crear':
        //console.log('crear To Do');
        let tarea = porHacer.crear(argv.descripcion);
        console.log(tarea);
        break;

    case 'listar':
        let listado = porHacer.getListado();

        for (let tarea of listado) {
            console.log('============== To Do ===============');
            console.log(tarea.descripcion);
            console.log('Estado: ', tarea.completado);
            console.log('============== To Do ===============');
        }


        break;

    case 'actualizar':
        //console.log('Actualiza las tareas To Do');
        let actualizado = porHacer.actualizar(argv.descripcion, argv.completado);
        console.log(actualizado);

        break;

    case 'borrar':

        let borrado = porHacer.borrar(argv.descripcion);
        console.log(borrado);
        break;

    default:
        console.log('Comando no reconocido');

        break;

}