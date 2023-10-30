const fs = require('fs');

let crearArchivo = (base, limite = 10) => {
    
return new Promise( (resolve, reject) => {

    if (!Number(base)) {
        reject('Eso no es un número');
        return;
    }

    let data = ''

    for ( i = 1; i <= limite; i++ ) {
         
        data += (`${base} * ${i} = ${ base * i}\n`);
    }
    
    fs.writeFile('04-bases/tabla/tabla.txt',data, (err) => {
        if (err) 
            reject(err)
        else 
            resolve(`tabla-${base}.txt`) 
    })
})
}

let crearLista = (base, limite = 10) => {

    for ( let i = 1; i <= limite; i++  ) {
        console.log(`${base} * ${i} = ${ base * i}\n`)
    }
}

module.exports =  {
    crearArchivo,
    crearLista
}