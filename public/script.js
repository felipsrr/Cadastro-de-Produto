// Array para armazenar os produtos
let produtos = [];

// Função para adicionar um produto
function adicionarProduto(event) {
    event.preventDefault(); // Evita o envio do formulário

    // Obtém os valores dos campos
    const nomeProduto = document.getElementById('nomeProduto').value;
    const idProduto = document.getElementById('idProduto').value;
    const precoProduto = document.getElementById('preco').value;

    // Cria um objeto produto
    const produto = {
        id: idProduto,
        nome: nomeProduto,
        preco: precoProduto
    };

    // Adiciona o produto ao array
    produtos.push(produto);

    // Atualiza a lista de produtos
    atualizarListaProdutos();

    // Limpa os campos do formulário
    document.getElementById('formProduto').reset();
}

// Função para atualizar a lista de produtos na interface
function atualizarListaProdutos() {
    const listaProdutos = document.getElementById('listaProdutos');
    listaProdutos.innerHTML = ''; // Limpa a lista atual

    produtos.forEach((produto, index) => {
        const li = document.createElement('li');
        li.textContent = `${produto.nome} - ${produto.preco} (ID: ${produto.id})`;

        // Botão para editar o produto
        const btnEditar = document.createElement('button');
        btnEditar.textContent = 'Editar';
        btnEditar.onclick = () => editarProduto(index);
        li.appendChild(btnEditar);

        // Botão para remover o produto
        const btnRemover = document.createElement('button');
        btnRemover.textContent = 'Remover';
        btnRemover.onclick = () => removerProduto(index);
        li.appendChild(btnRemover);

        listaProdutos.appendChild(li);
    });
}

// Função para editar um produto
function editarProduto(index) {
    const produto = produtos[index];
    document.getElementById('nomeProduto').value = produto.nome;
    document.getElementById('idProduto').value = produto.id;
    document.getElementById('preco').value = produto.preco;

    // Remove o produto da lista para que possa ser atualizado
    removerProduto(index);
}

// Função para remover um produto
function removerProduto(index) {
    produtos.splice(index, 1); // Remove o produto do array
    atualizarListaProdutos(); // Atualiza a lista na interface
}

// Adiciona o evento de submit ao formulário
document.getElementById('formProduto').addEventListener('submit', adicionarProduto);