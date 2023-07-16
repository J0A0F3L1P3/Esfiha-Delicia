var esfihas = [
    { nome: 'Carne', ingredientes: 'Carne moída temperada, cebola, tomate', preco: 4.90 },
    { nome: 'Frango', ingredientes: 'Frango desfiado, requeijão cremoso', preco: 4.90 },
    { nome: 'Queijo', ingredientes: 'Mussarela, catupiry', preco: 4.90 },
    { nome: 'Calabresa', ingredientes: 'Calabresa, cebola', preco: 4.90 },
    { nome: 'Portuguesa', ingredientes: 'Presunto, mussarela, cebola, ovo, azeitonas', preco: 5.90 },
    { nome: 'Vegetariana', ingredientes: 'Brócolis, palmito, milho, ervilha, tomate', preco: 5.90 },
    { nome: 'Frango com Catupiry', ingredientes: 'Frango desfiado, catupiry', preco: 5.90 },
    { nome: 'Escarola com Bacon', ingredientes: 'Escarola refogada, bacon, mussarela', preco: 5.90 },
    { nome: 'Queijo com Tomate Seco', ingredientes: 'Mussarela, tomate seco', preco: 5.90 },
    { nome: 'Pepperoni', ingredientes: 'Pepperoni, mussarela', preco: 6.90 }
];

var esfihaMenuHtml = '';
esfihas.forEach(function (esfiha) {
    esfihaMenuHtml += `
    <div class="col-md-4">
        <div class="esfiha-card">
            <img src="https://via.placeholder.com/720" alt="${esfiha.nome}" class="esfiha-card-image">
            <h5 class="esfiha-card-name">${esfiha.nome}</h5>
            <p class="esfiha-card-description">${esfiha.ingredientes}</p>
            <p class="esfiha-card-price">R$ ${esfiha.preco}</p>
            <a href="#" class="btn btn-primary">Adicionar ao carrinho</a>
        </div>
    </div>
    `;
});

document.querySelector('#esfihaList').innerHTML = esfihaMenuHtml;
