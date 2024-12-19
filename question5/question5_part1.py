import math

# Lê os arquivos de regra
with open('data.txt', 'r') as file:
    dados = file.readlines()

array_bidimensional = [list(map(int, linha.strip().split('|'))) for linha in dados]

print(array_bidimensional)

# Lê a ordem gerada
with open('data2.txt', 'r') as file:
    dados2 = file.readlines()

dados_gerado = [list(map(int, linha.strip().split(','))) for linha in dados2]

indices_para_remover = []

for i in range(len(dados_gerado)):
    for j in range(len(dados_gerado[i]) - 1):
        if not [dados_gerado[i][j], dados_gerado[i][j + 1]] in array_bidimensional:        
            indices_para_remover.append(i)
            print("Elemento não de acordo:", i)
            break

for index in sorted(indices_para_remover, reverse=True):
    elemento = dados_gerado.pop(index)
    print("Elemento removido:", elemento)

print("Nova lista:", dados_gerado)

def achar_array_meio(array):
    valor_soma = 0
    for subarray in array:
        posicao_array = math.ceil(len(subarray) / 2) - 1
        valor_soma += subarray[posicao_array] 

    return valor_soma

novo_valor = achar_array_meio(dados_gerado)

print(novo_valor)