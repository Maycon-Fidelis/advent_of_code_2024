const fs = require('fs');

const dataArray = 'data.txt';

fs.readFile(dataArray, 'utf-8', (err,data) =>{

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
        const target = leftArray[i];

        soma += Math.abs((leftArray[i] * rightArray.filter(el => el === target).length));
    }

    console.log("Valor total: " + soma);
})

