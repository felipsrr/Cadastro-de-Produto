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