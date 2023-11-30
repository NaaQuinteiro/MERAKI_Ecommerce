import { calcTotal, calcQuant, calcSub } from "./funcoes.js"
// criando a lista que armazena a lista dos pedidos que ficam no carrinho 
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

//lista de pedidos 
let pedidos = JSON.parse(localStorage.getItem("pedidos"))
if (pedidos == null){
    pedidos = []
}

//quando o carrinho n existe ainda, (primeira vez que se está add algo) é necessário criá-lo
if(carrinhoCompras == null){
    carrinhoCompras = []
}

// selecionando o elemento do html onde se encontra o carrinho 
let listaCarrinho = document.querySelector("div.container_card")

//função que carrega o html do carrinho na página 
carrinhoCompras.forEach(item => {
    let html = ` <div class="borda_card" id = "${item.codProduto}">

                    <div class="caixinha-check">
                        <input class="chk" type="checkbox" name="" id="check" />
                    </div>

                    <div class="img_card">
                        <img src="${item.imagemProduto}" alt="Alicates">
                    </div>

                    <div class="text_product">
                        <p>${item.tituloProduto}</p>
                    </div>

                    <div class="text_preco">
                        <p>R$ ${item.precoProduto}</p>
                    </div>

                    <div class="quant">
                        <div class="menos">
                            <i class="fa-solid fa-minus"></i>
                        </div>
                        <span>${item.qtd}</span>
                        <div class="mais">
                            <i class="fa-solid fa-plus"></i>
                        </div>
                    </div>

                    <div class="trash">
                        <i class="fa-solid fa-trash-can"></i>
                    </div>

                </div>`
    listaCarrinho.innerHTML += html
                    
});

//selecionando todas as lixeiras para criar a fução de deletar 
let delBtn = document.querySelectorAll('div.trash i')

// para cada botão eu preciso add o meu escutador de evento
// passa função que retorna oq click
delBtn.forEach(botao => botao.addEventListener("click", (event) => {
    let item = event.target.parentElement.parentElement
    listaCarrinho.removeChild(item)
    let index = carrinhoCompras.findIndex(produtoItem => produtoItem.codProduto == item.id)
    carrinhoCompras.splice(index,1)
    //salvando a informação no local sttorege, o stringfy converte pro formato de jason
    //o local storege é a memória do computador e sempre que queremos guardar ou remover arrays ou objetos lá, é necessários convertelos para um JSON
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
    
}))

// funções para qu seja possível mexer na quanitdade de produtos dentro do carrinho e salvar o novo valor no localStorage
let qtd = document.querySelectorAll("div.quant span")
console.log(qtd);

let botaoPlus = document.querySelectorAll("div.mais i")
let botaoMinus = document.querySelectorAll("div.menos i")

botaoPlus.forEach(botao => botao.addEventListener('click', (event)=> {
    let i = carrinhoCompras.findIndex(prod => prod.codProduto == event.target.parentElement.parentElement.parentElement.id)
    let spanQtd = event.target.parentElement.parentElement.children[1]
    let quantidade = parseInt(event.target.parentElement.parentElement.innerText)

    quantidade += 1

    spanQtd.innerHTML = quantidade

    carrinhoCompras[i].qtd = parseInt(spanQtd.innerHTML)
    localStorage.setItem('carrinho', JSON.stringify(carrinhoCompras))
}))

botaoMinus.forEach(botao => botao.addEventListener('click', (event) => {
    let i = carrinhoCompras.findIndex(prod => prod.codProduto == event.target.parentElement.parentElement.parentElement.id)
    let spanQtd = event.target.parentElement.parentElement.children[1]
   let quantidade = parseInt(event.target.parentElement.parentElement.innerText)

    if (quantidade > 1){
        quantidade -= 1;
    }

    spanQtd.innerHTML = quantidade

    carrinhoCompras[i].qtd = parseInt(spanQtd.innerHTML)
    localStorage.setItem('carrinho',JSON.stringify(carrinhoCompras))

} ))


// função para gerar o pedido após o usuário clicar no botão de finaliizar 
let finalizar = document.querySelector(".continue")
finalizar.addEventListener('click', () => {
    // objeto que vai armazenar as informações vindas do formulario de endereço
    let endereco = {
        adress: document.querySelector("input#adress").value,
        numero: document.querySelector("input#number").value,
        cep: document.querySelector("input#CEP").value,
        complemento: document.querySelector('input#Complemento').value,
        bairro: document.querySelector('input#bairro').value,
        cidade: document.querySelector('input#Cidade').value
    }

    let codPedido = (pedidos.length) + 1
        // if (codPedido = null || pedidos == 0){
        //     codPedido = 1
        // }

    //criação do objeto que guarda a lista de perodutos e o endereço do comprador 
    let pedido = {
        itens: carrinhoCompras,
        endereco: endereco,
        id:codPedido
    }

    pedidos.push(pedido)// coloca o pedido na lista de pedidos 
    // salvando a lista no localStorage para recuperá-la depois 
    localStorage.setItem('pedidos', JSON.stringify(pedidos))
})

// funções que carregam o preço da compra no html
calcTotal(carrinhoCompras);
calcSub(carrinhoCompras);
calcQuant(carrinhoCompras);