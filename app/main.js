import { clearScreen, exibirNaTela, bannerDescontoTodosLivros } from './componente.js'
import { esolharDeFiltroUsuario, filterLivrosDisponiveis } from './filter.js'
import { ordenarLivrosPorPreco } from './sort.js'
import { livrosComDescontoLoja } from './map.js'
import { descontoTodosLivros } from './reduce.js'

const endpointDaAPI = 'https://guilhermeonrails.github.io/casadocodigo/livros.json'

let livros = []
console.log(livros)

let btns = document.querySelectorAll('.btn')
const elementoParaInserirLivros = document.getElementById('livros')
const btnLivrosDisponiveis = document.getElementById('btnLivrosDisponiveis')
let btnOdenarPorPreco = document.getElementById('btnOrdenarPorPreco')

let bannerPromocao = document.querySelector('.livros__disponiveis')

btnLivrosDisponiveis
const getBuscarLivrosDaAPI = async () => {
  try {
    const response = await fetch(endpointDaAPI, {
      method: 'GET',
      // Você pode adicionar mais opções de configuração aqui, como headers, etc.
    });

    if (!response.ok) {
      throw new Error('Erro na requisição');
    }

    const data = await response.json();
    console.log('Dados recebidos:', data);
    data.forEach(livro => livros.push(livro))

    exibirOsLivrosNaTela(data)

  } catch (error) {
    console.error('Erro ao buscar dados:', error);
  } finally {
    console.log('Concluido com Sucesso')
  }
};

btns.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    console.log(event.target.value)
    let livrosFiltrados = esolharDeFiltroUsuario(livros, event.target.value)
    clearScreen()
    exibirNaTela(livrosFiltrados)
    bannerPromocao.setAttribute('id', 'bannerPromocao')
  })
})

btnLivrosDisponiveis.addEventListener('click', () => {
  var livrosDisponiveis = filterLivrosDisponiveis(livros)
  clearScreen()
  bannerPromocao.removeAttribute('id')
  let listaLivrosDiponiveisComDesconto = livrosComDescontoLoja(livrosDisponiveis)
  exibirNaTela(listaLivrosDiponiveisComDesconto)
  console.log(listaLivrosDiponiveisComDesconto)
  let valorTotalLivros = descontoTodosLivros(listaLivrosDiponiveisComDesconto)
  console.log(valorTotalLivros)
  bannerDescontoTodosLivros(valorTotalLivros.toFixed(2))
})

btnOdenarPorPreco.addEventListener('click', () => {
  let LivrosPrecoOrdenados = ordenarLivrosPorPreco(livros)
  clearScreen()
  exibirNaTela(LivrosPrecoOrdenados)
})

function exibirOsLivrosNaTela(listaDeLivros) {
  let livrosComDesconto = livrosComDescontoLoja(listaDeLivros)
  console.log(livrosComDesconto)
  exibirNaTela(livrosComDesconto)
}

window.onload = getBuscarLivrosDaAPI()