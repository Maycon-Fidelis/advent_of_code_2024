const fs = require('fs');

fs.readFile('data.txt', 'utf-8', (err,data) => {
	const matriz = data.trim().split('\n').map(linha => linha.trim().split(''));

	const posicoes_com_a = [];

	for(let i = 0; i < matriz.length; i++){
		for(let j = 0; j < matriz[i].length; j++){
			if(matriz[i][j] == 'A'){
				posicoes_com_a.push({
					x: i,
					y: j,
				})	
			}
		}
	}

	// console.log(posicoes_com_a);

	quantiade_de_xmas = 0;

	for(let k = 0; k < posicoes_com_a.length; k++){
		quantidade_de_mas = 0;

		valor_de_x = posicoes_com_a[k].x;
		valor_de_y = posicoes_com_a[k].y;

		if(
			valor_de_x - 1 >= 0 && valor_de_y + 1 < matriz[0].length &&
			valor_de_x + 1 < matriz.length && valor_de_y - 1 >= 0
		) {
		if((matriz[valor_de_x - 1][valor_de_y + 1] == "M" && matriz[valor_de_x + 1][valor_de_y - 1] == "S") || (matriz[valor_de_x - 1][valor_de_y + 1] == "S" && matriz[valor_de_x + 1][valor_de_y - 1] == "M")){
			quantidade_de_mas++;
		}
		
		if((matriz[valor_de_x - 1][valor_de_y - 1] == "M" && matriz[valor_de_x + 1][valor_de_y + 1] == "S") || (matriz[valor_de_x - 1][valor_de_y - 1] == "S" && matriz[valor_de_x + 1][valor_de_y + 1] == "M")){
			quantidade_de_mas++;
		}

		if(quantidade_de_mas >= 2){
			quantiade_de_xmas++;
		}

		}
	}

	console.log("Quantidade de XMAS: " + quantiade_de_xmas);

});
