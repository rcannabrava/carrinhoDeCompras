let total = 0;
document.getElementById('lista-produtos').textContent = '';
document.getElementById('valor-total').innerHTML = 'R$ 0';

function quantidadeTrue() {
    
}

function adicionar() {
    let produto = document.getElementById('produto').value;
    let nomeProduto = produto.split('-')[0];
    let valorUnitario = produto.split('R$')[1];
    let quantidade = document.getElementById('quantidade').value; 

    if(quantidade != 0) {
        let preco = quantidade * valorUnitario;
        let carrinho = document.getElementById('lista-produtos');
        let campoTotal = document.getElementById('valor-total');
    
        carrinho.innerHTML = carrinho.innerHTML + `<section class="carrinho__produtos__produto"><span class="texto-azul">${quantidade}x</span> ${nomeProduto} <span class="texto-azul">R$${preco}</span></section>`;
        total += preco;
        campoTotal.textContent =`R$${total}`;
    
        document.getElementById('quantidade').value = '';
    } else{ 
        alert('Escolha no mínimo um produto');
    }
    
}

function limpar() {
    document.getElementById('quantidade').value = '';
    document.getElementById('lista-produtos').textContent = '';
    document.getElementById('valor-total').innerHTML = 'R$ 0';

}