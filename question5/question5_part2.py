import math
from collections import defaultdict, deque

# Lê os arquivos de regra
with open('data.txt', 'r') as file:
    dados = file.readlines()

array_bidimensional = [list(map(int, linha.strip().split('|'))) for linha in dados]

# Lê a ordem gerada
with open('data2.txt', 'r') as file:
    dados2 = file.readlines()

dados_gerado = [list(map(int, linha.strip().split(','))) for linha in dados2]

indices_para_remover = []
for i in range(len(dados_gerado)):
    for j in range(len(dados_gerado[i]) - 1):
        if not [dados_gerado[i][j], dados_gerado[i][j + 1]] in array_bidimensional:        
            indices_para_remover.append(i)
            break

elementos_incorretos = []
for index in sorted(indices_para_remover, reverse=True):
    elemento = dados_gerado.pop(index)
    elementos_incorretos.append(elemento)

def ordenar_topologicamente(elemento, regras):
    regras_filtradas = [regra for regra in regras if regra[0] in elemento and regra[1] in elemento]

    grafo = defaultdict(list)
    grau_entrada = defaultdict(int)
    for x, y in regras_filtradas:
        grafo[x].append(y)
        grau_entrada[y] += 1
        if x not in grau_entrada:
            grau_entrada[x] = 0

    fila = deque([nodo for nodo in elemento if grau_entrada[nodo] == 0])
    ordem = []
    while fila:
        atual = fila.popleft()
        ordem.append(atual)
        for vizinho in grafo[atual]:
            grau_entrada[vizinho] -= 1
            if grau_entrada[vizinho] == 0:
                fila.append(vizinho)

    return ordem

elementos_corrigidos = []
for elemento in elementos_incorretos:
    elementos_corrigidos.append(ordenar_topologicamente(elemento, array_bidimensional))

def achar_array_meio(array):
    valor_soma = 0
    for subarray in array:
        posicao_array = math.ceil(len(subarray) / 2) - 1
        valor_soma += subarray[posicao_array]
    return valor_soma

valor_corrigido = achar_array_meio(elementos_corrigidos)

print("Soma dos valores corrigidos:", valor_corrigido)
