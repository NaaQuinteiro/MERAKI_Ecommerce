// criando uma variavel constante para armazenar o catalogo num lista[]
export const catalogo = [{
    //criando um id e um obj pra cada produto, cada chaves dentro dessa lisca cria um novo objeto
    //objeto 1
    codProduto: 1,
    tituloProduto: "Coffee Woman Seductio Desodorante Colônia 100ml",
    //criei 5 descrições pois cada descrição dos produtos são 5 tópicos organizados em lista 
    descricaoProduto1: "O Coffee Woman Seduction Desodorante Colônia é uma fragrância irresistível, sensual e doce. Sua fórmula carrega o equilíbrio entre Madeira e Musk, a intensidade do óleo"+
    " essencial dos grãos de Café Arábica e a sensualidade das notas frutais com delicado toque floral. Tudo isso agregado a notas delicadas e quentes de Chocolate Branco, para entregar uma fragrância doce e intensa ao mesmo tempo.",
    descricaoProduto2: "Ingredientes: Álcool desnaturado; Perfume; Água; Octissalato; Extrato da semente de coffea arábica; Caprililglicol; Avobenzona; Alfa-isometil ionona; Salicilato de benzila; Citral; Citronelol; Cumarina; Hexil cinamal; Limoneno; Linalol.",
    descricaoProduto3: "Como usar: Para levar a perfumação de Coffee Woman Seduction Desodorante Colônia por todos os lugares, aplique à distância de 15 centímetros da pele em regiões mais quentes, como pescoço, dobras dos cotovelos e pulsos.",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Floriental Amadeirado Frutal.",
    precoProduto: 179.90,
    imagemProduto: "../img/prod_Feminino01_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_femininos",
    textoAlternativo: "Perfume Coffe Woman",
    mostrarHome: true
},
{
    //objeto 2
    codProduto: 2,
    tituloProduto: "Floratta My Blue Desodorante Colônia 75ml",
    descricaoProduto1: "Floratta My Blue Desodorante Colônia incentiva você a redescobrir o romance. Inspirada no clássico Floratta Blue, linha de sucesso do Boticário, o novo Floratta My Blue traz uma fragrância inovadora, ainda mais envolvente e marcante, que explora um blend de Musks aliado a cremosidade do Sândalo e a floralidade e sofisticação da Íris."+
    " Escolha ideal para quem para quem busca uma fragrância feminina que traz o sentimento de conforto.",
    descricaoProduto2: "Ingredientes: Álcool Desnaturado; Água; Fragrância; Caprililglicol; Alfa-Isometil Ionona; Salicilato De Benzila; Citral; Cumarina; Geraniol; Limoneno; Linalol.",
    descricaoProduto3: "Como usar: Borrife a fragrância nas áreas onde há maior circulação do sangue, como o pescoço, dobras do cotovelo e atrás das orelhas. Sinta a fragrância marcante de Floratta My Blue exalar no ar.",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Floral Amadeirado.",
    precoProduto: 139.90,
    imagemProduto: "../img/prod_Feminino02_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_femininos",
    textoAlternativo: "Perfume Floratta",
    mostrarHome: false
},
{
    // objeto 3
    codProduto: 3,
    tituloProduto: "Elysée Nuit Eau de Parfum 50ml",
    descricaoProduto1: "Elysee Nuit Eau de Parfum exala ousadia em todos os sentidos. Seu ar moderno mistura a sofisticação do chypre com a jovialidade do gourmand, criando uma fragrância única na perfumaria feminina.",
    descricaoProduto2: "Combina Rosas Damascenas colhidas antes do amanhecer, momento em que exalam sua melhor fragrância, e o toque adocicado do Macaron, um tradicional doce francês. Este Eau de Parfum integra a família olfativa Chypre Gourmand, envolvido por notas de saída de Flor de Ameixa, Cassis, Frutas Vermelhas e Bergamota.",
    descricaoProduto3: "Como usar: Faça a aplicação de Elysee Nuit Eau de Parfum à distância de 15 centímetros da pele em regiões como atrás das orelhas e nos pulsos para levar a fragrância por onde você for!",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Chypre Gourmand Adocicado.",
    precoProduto: 279.90,
    imagemProduto: "../img/prod_Feminino03_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_femininos",
    textoAlternativo: "Perfume Elysée Nuit",
    mostrarHome: true
},
{
    //objeto 4
    codProduto: 4,
    tituloProduto: "Malbec Gold Desodorante Colônia 100ml",
    descricaoProduto1: "O Malbec Gold Desodorante Colônia traz uma fragrância cheia de surpresas com ingredientes tão valiosos quanto o ouro."+
    " Para atrair ainda mais olhares, Malbec Gold apresenta a exclusiva tecnologia GoldSense, trazendo uma fragrância intensa e marcante para aumentar o seu poder de atração."+
    " Sua pirâmide olfativa é uma combinação de notas especiadas e cítricas com frescor e masculinidade. A flor de laranjeira no coração é envolvida por madeiras robustas que, junto com o acorde exclusivo, trazem uma aura de sensualidade e poder.",
    descricaoProduto2: "Ingredientes: Álcool etílico; Perfume; Água; Dipropilenoglicol; Caprililglicol; Extrato da folha de Camellia sinensis; Extrato da raiz de Coleus forskolii; Amarelo de tartrazina; Azul brilhante; Alfa-isometil ionona; Cinamaldeído; Citral; Cumarina; Isoeugenol; Limoneno; Linalol; 2-octinoato de metila.",
    descricaoProduto3: "Como usar: Para uma boa perfumação aplique a fragrância nos pulsos, pescoço e onde mais desejar.",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Chypre Gourmand Adocicado.",
    precoProduto: 209.90,
    imagemProduto: "../img/prod_Masculino01_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_masculinos",
    textoAlternativo: "Colônia Malbec Gold",
    mostrarHome: true
}, 
{
    //objeto 5
    codProduto: 5,
    tituloProduto: "Coffee Man Duo Desodorante Colônia 100ml ",
    descricaoProduto1: "Para homens charmosos e modernos, o Coffee Man Duo Desodorante Colônia é ideal. Possui uma fragrância Amadeirado Fougère que mistura frescor e mistério, daquelas que marcam presença e não são esquecidas."+ 
    " O Coffee Man Duo Desodorante Colônia é a prova de que os opostos podem criar uma mistura irresistível! Café au Cream, que traz a força do café misturada com a cremosidade do licor e o frescor de especiarias com o calor do Âmbar.",
    descricaoProduto2: "Ingredientes: Álcool desnaturado; Água; Perfume; Extrato da semente de coffea arabica; Alfa-isometil ionona; Benzoato de benzila; Citral; Cumarina; Geraniol; Limoneno.",
    descricaoProduto3: "Como usar: Para que a fragrância fique por mais tempo na pele, passe o produto nos locais em que há maior circulação sanguínea: como no pulso, na dobra do braço, atrás das orelhas e atrás dos joelhos. O ideal é aplicar sempre a 20cm da pele.",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Fougère Ambarado Amadeirado.",
    precoProduto: 179.90,
    imagemProduto: "../img/prod_Masculino02_1.PNG",//passar o caminho que está no html
    categoriaProduto: "perfumes_masculinos",
    textoAlternativo: "Colônia Coffee Man",
    mostrarHome: true
    
},
{
    //objeto 6
    codProduto: 6,
    tituloProduto: "Quasar Surf Desodorante Colônia 100ml",
    descricaoProduto1: "O surf surgiu nas ilhas do Pacífico, proporcionando contato entre o homem e a natureza. Essa foi a inspiração para Quasar Surf Desodorante Colônia, que nasceu da beleza e dos mistérios do mar."+
    " Uma fragrância masculina jovem, moderno e com ingredientes exclusivos. Em sua saída pode-se sentir o cheiro de madeiras úmidas que dão a sensação de brisa refrescante e ao fundo o Sândalo Aborígeney traz as notas amadeiradas, que são mais secas.",
    descricaoProduto2: "O segredinho dessa fragrância Amadeirada Marine é a combinação de ingredientes encontrados nos melhores picos de surf do mundo para criar um produto com um novo frescor. Esses ingredientes vieram de praias do mundo todo como a flor Frangipani do Hawaii, o Musgo do Atlântico e o Sândalo Aborígeney da Oceania.",
    descricaoProduto3: "Como usar:Para uma boa perfumação borrife Quasar Surf Desodorante Colônia nos pulsos, pescoço e onde mais desejar.",
    descricaoProduto4: "Orientações: Inflamável. Evite contato com os olhos. Não aplique na região das axilas, em pele irritada ou lesionada. Somente para uso externo. Mantenha fora do alcance de crianças. Produto para perfumar e desodorizar a pele.",
    descricaoProduto5: "Família Olfativa: Fougère Aquoso Fresco.",
    precoProduto: 144.90,
    imagemProduto: "../img/prod_Masculino03_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_masculinos",
    textoAlternativo: "Colônia Quasar Surf",
    mostrarHome: false
}, 
{
    //objeto 7
    codProduto: 7,
    tituloProduto: "Sophie Wakanda Forever Colônia 100ml",
    descricaoProduto1: "Toda história tem um começo. A fragrância infantil de Sophie Wakanda Forever foi feita para quem quer começar sua própria jornada de heroína."+ 
    " Inspirada na princesa Shuri, irmã mais nova de T' Challa, e nas Dora Miraje, guerreiras que protegem com coragem o trono real, traz o floral como protagonista principal, com adição de facetas frutais, para as meninas cheias de personalidade."+
    "\nProduto dermatologicamente e clinicamente testado, seu cheirinho é inspirado na flor nativa de Wakanda, a Erva Coração - fonte de super poderes do Pantera Negra.",
    descricaoProduto2: "Ingredientes: Álcool Desnaturado; Água; Perfume.",
    descricaoProduto3: "Como usar: Com o auxílio de um adulto, aplicar a colônia nos pulsos, no pescoço e atrás das orelhas.",
    descricaoProduto4: "Orientações: Inflamável. Deve ser aplicado por adulto ou com supervisão de adulto. Não usar na pele irritada e lesionada. Em caso de irritação, suspenda o uso e procurar um médico.",
    descricaoProduto5: "Família Olfativa: Floral Frutal",
    precoProduto: 92.90,
    imagemProduto: "../img/prod_Infantil01_1.png",//passar o caminho que está no html
    categoriaProduto: "perfumes_infantis",
    textoAlternativo: "Colônia infantil Sophia Wakanda"
,    mostrarHome:true
    
}, 
{
   //objeto 8
   codProduto: 8,
   tituloProduto: "Quasar Next Colônia 50ml",
   descricaoProduto1: "Essa colônia teen foi desenvolvida exclusivamente para meninos de 7 a 12 anos."+ 
   " Possui uma fragrância Fougère Fresca intensa por conta de suas notas frescas de Bergamota, Limão, Folhas Verdes e fundo amadeirado."+
   " É a combinação certa para acompanhar as mais divertidas aventuras.\nA criança precisa brincar, pois brincando se desenvolve melhor. E com Quasar Next Colônia um universo totalmente"+
   " novo se abre à frente e mil ideias vêm à cabeça! Estar aqui e ali, descobrir, experimentar e viver cada segundo. Quasar Next é a colônia infantil para acompanhar todos os momentos de diversão.",
   descricaoProduto2: "Ingredientes: Álcool Desnaturado; Água; Perfume; Óleo De Rícino Hidrogenado Etoxilado.",
   descricaoProduto3: "Como usar: Quasar Next Colônia deve ser aplicado na criança por um adulto. Aplique uma pequena quantidade atrás da orelha da criança e nos pulsos. Em caso de irritação, suspenda o uso imediatamente.",
   descricaoProduto4: "Orientações: Inflamável. Deve ser aplicado por adulto ou com supervisão de adulto. Não usar na pele irritada e lesionada. Em caso de irritação, suspenda o uso e procurar um médico.",
   descricaoProduto5: "Família Olfativa: Fougère Fresco",
   precoProduto: 89.90,
   imagemProduto: "../img/prod_Infantil02_1.png",//passar o caminho que está no html
   categoriaProduto: "perfumes_infantis",
   textoAlternativo: "Colônia Quasar Next infantil",
   mostrarHome:true
},
{
    //objeto 9
   codProduto: 9,
   tituloProduto: "Naturé Desenho nas Nuvens Água de Colônia",
   descricaoProduto1: "Um convite para deixar a imaginação fluir, aproveitar o conforto e a leveza do musk para desenhar uma flor nas nuvens."+
   " Sentir o momento e deixar o frescor do vento trazer novas formas e outras surpresas.\nNaturé é uma fragrância suave, segura, com cheirinho de conforto e frescor. Sua fórmula é 88% natural, acompanha desenhos para colorir,"+
   " e sua tampa com formato de torneira, encaixa perfeirtamente na mãozinha das crianças.",
   descricaoProduto2: "Ingredientes: ÁGUA, ÁLCOOL CETEARÍLICO, FENOXIETANOL, PARFUM, GLICERINA, MANTEIGA DE BUTYROSPERMUM PARKII, CLORETO DE CETRIMÔNIO, METOSULFATO DE BEHENTRIMÔNIO, SORBATO DE POTÁSSIO, HIDROXIETILCELULOSE, PEG-14M, POLIQUATERNIUM-55, ÁCIDO CÍTRICO, ACE SODIUM TACT, SIL ICA, CAPRILIL GLICOL, CELULOSE, CI 15510, CI 17200, CLORETO DE SÓDIO.",
   descricaoProduto3: "Como usar: Dpois do banho, para passear e brincar, borrife nas orelinhas e punhos.",
   descricaoProduto4: "Dermatológicamente testado.",
   descricaoProduto5: "Produto vegano.",
   precoProduto: 87.90,
   imagemProduto: "../img/prod_Infantil03_1.png",//passar o caminho que está no html
   categoriaProduto: "perfumes_infantis",
   textoAlternativo: "Perfume infantil Naturé" ,
   mostrarHome:false
} 
]

