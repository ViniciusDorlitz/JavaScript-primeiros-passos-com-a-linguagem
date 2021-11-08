console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeDoComprador = 15;
const estaAcompanhada = true;
console.log("Destinos possíveis:");
console.log(listaDeDestinos);

if (idadeDoComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1); // removendo item da posição 1 da lista
} else if (estaAcompanhada) {
    console.log("Comprador está acompanhado");
    listaDeDestinos.splice(1, 1);//remove item
} else {
    console.log("Não é maior de idade e não posso vender");
}
console.log(listaDeDestinos);

