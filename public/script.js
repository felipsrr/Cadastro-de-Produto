 // Array para armazenar os produtos
 const produtos = [];

 // Função para salvar o produto
 function salvarProduto(produto) {
     produtos.push(produto);
 }

 // Função para listar os produtos
 function listarProdutos() {
     const listaProdutos = document.getElementById('listaProdutos');
     listaProdutos.innerHTML = ''; // Limpa a lista antes de adicionar os produtos

     produtos.forEach((produto) => {
         const li = document.createElement('li');
         li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`;
         listaProdutos.appendChild(li);
     });
 }

 // Evento para o envio do formulário
 document.getElementById('formProduto').addEventListener('submit', function(event) {
     event.preventDefault(); // Evita o envio do formulário

     // Coleta os valores dos campos do formulário
     const nomeProduto = document.getElementById('nomeProduto').value;
     const idProduto = document.getElementById('idProduto').value;
     const precoProduto = document.getElementById('preco').value;

     // Cria um objeto produto
     const produto = {
         nome: nomeProduto,
         id: idProduto,
         preco: precoProduto
     };

     // Salva o produto e lista os produtos
     salvarProduto(produto);
     listarProdutos();

     // Limpa o formulário
     this.reset();
 });

 function removerProduto(idProduto) {
    const listaProdutos = document.getElementById('listaProdutos');
    const produto = document.querySelector(`li[data-id="${idProduto}"]`);
    if (produto) {
      listaProdutos.removeChild(produto);
    }
    // Atualizar a lista de produtos no array
    const index = produtos.findIndex(produto => produto.id === idProduto);
    if (index !== -1) {
      produtos.splice(index, 1);
    }
  }

  function editarProduto(idProduto) {
    const produto = produtos.find(produto => produto.id === idProduto);
    if (produto) {
      const nomeProduto = prompt('Digite o novo nome do produto:');
      const precoProduto = prompt('Digite o novo preço do produto:');
      produto.nome = nomeProduto;
      produto.preco = precoProduto;
      // Atualizar a lista de produtos na tela
      const listaProdutos = document.getElementById('listaProdutos');
      const li = document.querySelector(`li[data-id="${idProduto}"]`);
      li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`;
    }
  }function salvarAlteracoes() {
    // Salvar a lista de produtos no array
    produtos.forEach(produto => {
      const li = document.querySelector(`li[data-id="${produto.id}"]`);
      li.textContent = `ID: ${produto.id}, Nome: ${produto.nome}, Preço: ${produto.preco}`;
    });
    // Salvar a lista de produtos no servidor (opcional)
    // fetch('/salvar-produtos', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(produtos),
    // });
  }document.addEventListener('DOMContentLoaded', () => {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.addEventListener('click', (e) => {
      if (e.target.tagName === 'LI') {
        const idProduto = e.target.dataset.id;
        if (e.target.classList.contains('editar')) {
          editarProduto(idProduto);
        } else if (e.target.classList.contains('remover')) {
          removerProduto(idProduto);
        }
      }
    });
  });