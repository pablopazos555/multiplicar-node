 
 const {crearArchivo, crearLista} = require('./multiplicar');
 const argv = require('./config/yarg').argv

let base = argv;
let comando =argv._[0];

switch(comando) {
    case 'listar': {
        crearLista(argv.base, argv.limite)
    }
    break;

    case 'crear': {

        crearArchivo(argv.base, argv.limite)
        .then( archivo =>console.log(`tu tabla ha sido creada ${archivo}`))
        .catch((err)=> console.log(err))
    
    }
    break; 

    default: 
    console.log('comando no existente');
}





