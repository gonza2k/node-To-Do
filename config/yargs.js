const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'descripcion de tareas To Do'
};

const completado = {
    default: true,
    alias: 'dc',
    desc: 'Marca como completado o Pendiente la Tarea'
};


const argv = require('yargs')

.command('crear', 'Crear elemento To Do', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado de completado de To Do', {
        descripcion,
        completado
    })
    .command('borrar', 'Borra una tarea To Do', {
        descripcion
    })
    .help()
    .argv;

module.exports = {
    argv
}