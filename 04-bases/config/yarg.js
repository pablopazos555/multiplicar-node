const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require ('yargs')
 .command('listar', 'Imprime la tabla de multiplicar', opts)
 .command('crear', 'Crea una tabla de multiplicar', opts )
 .argv;

 module.exports = {
    argv
 }