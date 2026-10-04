async function carregarProdutos() {
  const resposta = await fetch('./src/data/produtos.json');
  const produtos = await resposta.json();

  console.log('Produtos carregados:', produtos);
}

carregarProdutos();
