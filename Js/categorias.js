//importando o catalogo para vizualizar na página home os produtos
import { catalogo } from "./dados.js";

//importando a função de carregar produtos 
import { carregarProdutos, handleClick} from "./funcoes.js";

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaFemininos = catalogo.filter(item => item.categoriaProduto === "perfumes_femininos")
//variável constante com o caminho no html
const feminino = document.querySelector("#perfumes_femininos")

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaMasculinos = catalogo.filter(item => item.categoriaProduto === "perfumes_masculinos")
//variável constante com o caminho no html
const masculino = document.querySelector("#perfumes_masculinos")

//gerando um filtro para mostrar apenas os produtos de acordo com sua categoria
const listaInfantis = catalogo.filter(item => item.categoriaProduto === "perfumes_infantis")
//variável constante com o caminho no html
const infantil = document.querySelector("#perfumes_infantis")


//passando para a função carregar produtos os parametros necessários para mostrar a categoria de perfumes femininos
carregarProdutos(listaFemininos, feminino)

//passando para a função carregar produtos os parametros necessários para mostrar a categoria de perfumes masculinos
carregarProdutos(listaMasculinos, masculino)

//passando para a função carregar produtos os parametros necessários para mostrar a categoria de perfumes infantis
carregarProdutos(listaInfantis, infantil)

handleClick()