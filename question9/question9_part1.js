const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err,data) => {
    let novo_disk_map = [], estado = false, numero = 0;

    // Criando o diskmap
    for(let i = 0; i <data.length; i++){
        estado = !estado;

        if(estado == true){
            for(let j = 0; j < data[i]; j++){
                novo_disk_map.push(numero);
            }
            numero++;
        } else {
            for (let j = 0; j < data[i]; j++){
                novo_disk_map.push('.');
            }
        }

    }

    const novo = novo_disk_map.join('');

    console.log(novo);


    //movendo o diskmap
    for(let i = novo_disk_map.length - 1; i >= 0; i--){
        if(novo_disk_map[i] == '.' || novo_disk_map.indexOf('.') > i) {
            continue;
        }
        novo_disk_map[novo_disk_map.indexOf(".")] = novo_disk_map[i];
        novo_disk_map[i] = ".";
    }

    const novo2 = novo_disk_map.join('');

    console.log(novo2);

    // Somando o checksum
    let soma = 0;
    for(let i = 0; i < novo_disk_map.length; i++){
        if(novo_disk_map[i] != '.'){
            soma += novo_disk_map[i] * i;
        }
    }

    console.log(soma);

});