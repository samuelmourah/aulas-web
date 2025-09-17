var nome;
nome = "Samuel Moura";

console.log(nome);
console.log("olá " + nome );
console.log(`olá + ${nome}`);

console.log("_____________")

let preco_livro = 24.95;
let desconto = 40/100;

let valor_desconto = preco_livro = desconto;
let preco_livro_com_desconto = preco_livro- valor_desconto;

console.log("desconto = " + valor_desconto);
console,log("livro com desconto = " + preco_livro_com_desconto);

let numero_copias = 60;

let preco_60_copias = numero_copias * preco_livro_com_desconto;

console.log(` preço para as ${numero_copias}`)