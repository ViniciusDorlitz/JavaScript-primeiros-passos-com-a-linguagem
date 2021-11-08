console.log(`Trabalhando com listas`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

// adicionando item na lista
listaDeDestinos.push(`Curitiba`);
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

// excluindo item da lista
listaDeDestinos.splice(1,1);
console.log(listaDeDestinos);

// exibindo itens selecionados de uma lista
console.log(listaDeDestinos[1]);