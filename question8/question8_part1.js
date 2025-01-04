const fs = require('fs');

fs.readFile('data.txt', 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const table = data.trim().split('\n').map(line => line.trim().split(''));

  // Função para capturar as frequências com suas coordenadas
  function capturar_frequencia(mapa) {
    const frequencias = [];
    for (let i = 0; i < mapa.length; i++) {
      for (let j = 0; j < mapa[i].length; j++) {
        if (mapa[i][j] !== '.') {
          frequencias.push({
            tipo: mapa[i][j], // Tipo ou frequência da antena
            x: i,             // Coordenada X
            y: j              // Coordenada Y
          });
        }
      }
    }
    return frequencias;
  }

  function contar_tipos(frequencias) {
    const contagem = {};
    for (const freq of frequencias) {
      contagem[freq.tipo] = (contagem[freq.tipo] || 0) + 1;
    }
    return contagem;
  }

  const frequencias = capturar_frequencia(table);
  const contagemTipos = contar_tipos(frequencias);

  console.log("Frequências encontradas:", frequencias);
  console.log("Contagem de tipos:", contagemTipos);

  const tipos = Object.keys(contagemTipos);
  console.log(tipos.length);

  // for(const i = 0; i < tipos.length; i++){

  // }

});
