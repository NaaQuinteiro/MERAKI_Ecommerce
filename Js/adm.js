let data = JSON.parse(localStorage.getItem("pedidos"));
const resultadoDiv = document.getElementById('resultado');

data.forEach(pedido => {
    resultadoDiv.innerHTML += `<h2>Pedido ${pedido.id}:</h2>`;
    resultadoDiv.innerHTML += `<h3>Cliente ${pedido.endereco.adress}</h3>`;
    resultadoDiv.innerHTML += '<ul>';

    pedido.itens.forEach(item => {
        resultadoDiv.innerHTML += '<hr>';
        resultadoDiv.innerHTML += `<li>Título: ${item.tituloProduto}</li>`;
        resultadoDiv.innerHTML += `<li>Quantidade: ${item.qtd}</li>`;
        resultadoDiv.innerHTML += `<li>Preço: $${item.precoProduto}</li>`;
        resultadoDiv.innerHTML += '<hr>';
    });

    resultadoDiv.innerHTML += '</ul>';
});