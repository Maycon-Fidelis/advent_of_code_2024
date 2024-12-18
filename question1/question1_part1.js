const fs = require('fs');

const dataArray = 'data.txt';

fs.readFile(dataArray, 'utf-8', (data) =>{

    const leftArray = [];
    const rightArray = [];

    data.trim().split('\n').forEach(line =>{
        const [left,right] = line.trim().split(/\s+/).map(Number);
        leftArray.push(left);
        rightArray.push(right);
    })

    leftArray.sort();
    rightArray.sort();

    soma = 0;

    for(var i = 0; i < 1000; i++){
        soma += Math.abs((rightArray[i] - leftArray[i]));
    }

    console.log("Valor total: " + soma);
})

