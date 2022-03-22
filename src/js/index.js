//a classe aberto do HTML possui um display:block, definindo que quando um cartao estiver aberto ele sobrepoe os outros
//classe "ativo" faz com que o selecionado fique vermelho, entao tambem precisa ser trocada

const listaSelecaoPokemons = document.querySelectorAll('.pokemon') //busca todos os pokemons que estao na lista li
const pokemonsCard = document.querySelectorAll('.cartao-pokemon');

listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click', () => {   
        //remove classe aberto do pokemon que está em primeiro plano
        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto') //remove a classe aberto de onde estiver
        //classList é a lista de classes
        
        
        //ao clicar em um pokemon da listagem, o id é pegado é é adicionado 'aberto na sua classe'
        const idPokemonSelecionado = pokemon.attributes.id.value
        const idCartaoPokemonParaAbrir = 'cartao-'+ idPokemonSelecionado //idPokemonSelecinado está puxando o nome do pokemon e com isso há a concatenaacao das variaveis virando o id do cartao-pokemon
        const cartaoPokemonParaAbrir = document.getElementById(idCartaoPokemonParaAbrir) 
        cartaoPokemonParaAbrir.classList.add('aberto') //adiciona a classe aberta onde o usuario clicar


        //remover classe ativo e mudar a cor vermelha no pokemon selecionado
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')



        //adicionar 'ativo' na classe de outro elemento
        const pokemonSelecionadonaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadonaListagem.classList.add('ativo')
    })  


})   //passa a lista inteira e para cada elemento de classe pokemon e executa a arrow function 
//esse for each adiciona um evento de click para cada elemento da classe pokemon