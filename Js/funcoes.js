//todas as funções que serão usadas 

//Função para mostrar os produtos que recebe 2 parâmetros, uma lista de produtos 
//e o local onde o html será interizado 
export function carregarProdutos(listaProdutos, localHtml){
    //LOOP FOR PARA CARREGAR DINAMICAMENTE AS PÁGINAS de acordo com os intens na lista catálogo
    listaProdutos.forEach(produto => {
       let produto_html =` <div class="borda_produto" id=${produto.codProduto}>
            
                            <div class="prod-img">
                                <a href="produto_unico.html"><img src="${produto.imagemProduto}" alt="${produto.textoAlternativo}" id = ${produto.codProduto}></a>
                            </div>
    
                            <div class="titulo_produto">
                                <p>${produto.tituloProduto}</p>
                            </div>
    
                            <div class="preco">
                                <button><a href="produto_unico.html" id = ${produto.codProduto}> R$ ${produto.precoProduto} </a></button>
                            </div>
    
                        </div>`
    localHtml.innerHTML += produto_html
    }); 
}

//função para armazenar qual o elemento que foi clicado 
export function handleClick(){
    let produtos = document.querySelectorAll("div.borda_produto")
    console.log(produtos)

    produtos.forEach(produto => produto.addEventListener('click', (evento)=>{
        //o target permite visualizar quasl elemento clicado 
        //guardando na variável o código do produto clicado

        let idProduto = evento.target.id
        //local storege é para salvar em um local e setar o item desejado nele
        localStorage.setItem('prodID', idProduto)
    }))
}

//com o find é possível procurar o produto 
export function findProduct(produtos, prodID){
    let produto = produtos.find(prod => prod.codProduto == prodID)
    console.log(produto)
    return produto
}

//função para mostrar a pág do produto escolhido 
export function carregarProduto(item){
    console.log(item)
    const container = document.querySelector("#product_container")
    //identificando a parte do html q será carregada 
    let html = `<div class="img-produto">
                    <img src="${item.imagemProduto}" alt="${item.textoAlternativo}">
                </div>

                <div class="text-produto">
                    <h3>${item.tituloProduto}</h3>
                    <div class="stars">
                        <i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
                    </div>
                    <div class="options">
                        <p>R$ ${item.precoProduto}</p>
                        <div class="quantidade">
                            <div class="menos">
                                <i class="fa-solid fa-minus"></i>
                            </div>
                            <span>1</span>
                            <div class="mais">
                                <i class="fa-solid fa-plus"></i>
                            </div>
                        </div>
                    </div>
                    
                        <div class="adicionar">
                            <button>Adicionar 
                                <i class="fa-solid fa-cart-shopping"></i>
                            </button>
                        </div>
                </div>
                </div>

                <div class="container-descricao">
                <div class="descricao">
                    <h4>DESCRIÇÃO DO PRODUTO</h4>
                </div>
                <div class="text-descricao">
                    <ul>
                        <li>${item.descricaoProduto1}</li>
                        <li>${item.descricaoProduto2}</li>
                        <li>${item.descricaoProduto3}</li>
                        <li>${item.descricaoProduto4}</li>
                        <li>${item.descricaoProduto5}</li>
                    </ul>
                </div>`
    container.innerHTML = html
}

//criando a função responsável por add os produtos no carrinho de compras 
export function addItemCarrinho (item, carrinhoCompras){

    //selecionando o botão da página no html
    let botaoAdd = document.querySelector('div.adicionar')
    console.log(botaoAdd)

    //o add eventlistener diz que quando ocorrer um click ele deve pegar o evento
    botaoAdd.addEventListener('click', () => {
    //variável pra pegar a quantidade selecionada, o parserInt permite transformar o valor em inteiro 
    let qtd = parseInt(document.querySelector("div.quantidade span").innerText);
    console.log(qtd);
    
    //variável para juntar a quantidade de produtos com o produto usando um objeto 
    let newItem = {...item, qtd}
    
    carrinhoCompras.push(newItem)
    alert("Item adicionado ao carrinho!")

    //salvando a informação no local storege, o stringfy converte pro formato de jason
    //o local storege é a mempria do computador e sempre que queremos guardaqr arrays ou objetos lá, é necessários convertelos para um JSON
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    console.log(carrinhoCompras)
    })
}

//função para calcular o preço total 
export function calcTotal(carrinhoCompras){
    let total = 0;

    const totalCarrinho = document.querySelector('.totalCarrinho')

    totalCarrinho.innerHTML = '';

    console.log(totalCarrinho)

    carrinhoCompras.forEach(item =>{
        total += (item.precoProduto * item.qtd);
    })

    let totCarrinho = `<p><b>R$${total.toFixed(2)}</b></p>`;

    totalCarrinho.innerHTML += totCarrinho;

}

// função para calcular o subtotal
export function calcSub(carrinhoCompras){
    let total = 0;

    const totalSub = document.querySelector('.text-value-sub')

    totalSub.innerHTML = '';

    carrinhoCompras.forEach(item =>{
        total += (item.precoProduto * item.qtd);
    })

    let totSub = `<p>R$ ${total.toFixed(2)}</p>`;

    totalSub.innerHTML += totSub;

}

//função para calcular a quantidade
export function calcQuant(carrinhoCompras){
    let total = 0;

    const totalquantidade = document.querySelector('.text-quant-sub')

    totalquantidade.innerHTML = '';

    carrinhoCompras.forEach(item =>{
        total += item.qtd;
    })

    let totalQtd = `<p>${total}</p>`;

    totalquantidade.innerHTML += totalQtd;
}


