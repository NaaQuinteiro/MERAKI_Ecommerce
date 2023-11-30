//importando o catalogo para vizualizar na página todos os produtos
import { catalogo } from "./dados.js";

//importando a função de carregar produtos de forma dinamica  
import { findProduct, carregarProduto, addItemCarrinho} from "./funcoes.js";

// criando a lista que armazenara a lista dos pedidos que ficam no carrinho 
let carrinhoCompras = JSON.parse(localStorage.getItem('carrinho'))

//quando o carrinho n existe ainda (primeira vez add algo) é necessário criá-lo 
if(carrinhoCompras == null){
    carrinhoCompras = []
}


let produto = localStorage.getItem("prodID")
console.log(produto)

let item = findProduct(catalogo, produto)

carregarProduto(item)


// bloco para funcionamento e interação do usuário com os incones de quantidade 
//também armazena o valor na tag para colocar no carrinho
let qtd = parseInt(document.querySelector('div.quantidade span').innerText);

let botaoPlus = document.querySelector('div.mais i')
let botaoMinus = document.querySelector('div.menos i')

let spanQuantidade = document.querySelector('div.quantidade span')

botaoPlus.addEventListener('click', () => {
    qtd += 1;
    spanQuantidade.innerText = qtd;
} )

botaoMinus.addEventListener('click', () => {
    if (qtd > 1){
        qtd -= 1;
    }
        
    spanQuantidade.innerText = qtd;
} )

addItemCarrinho(item, carrinhoCompras)