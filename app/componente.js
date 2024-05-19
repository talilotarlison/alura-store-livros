
const elementoParaInserirLivros = document.getElementById('livros')
let bannerPromocao = document.querySelector('.livros__disponiveis')

export let componenteLivroTela = (livro) => {
  return (
    elementoParaInserirLivros.innerHTML += `
        <div class="livro">
              <img class="livro__imagens ${livro.quantidade > 0 ? '' : 'indisponivel'}" src="${livro.imagem}"
              alt="${livro.alt}" />
              <h2 class="livro__titulo">
                  ${livro.titulo}
              </h2>
              <p class="livro__descricao">${livro.autor}</p>
              <p class="livro__preco" id="preco">R$${livro.preco}</p>
          <div class="tags">
              <span class="tag">${livro.categoria}</span>
          </div>
        </div>
  `)
}

export let exibirNaTela = (livrosFiltro) => {
  livrosFiltro.forEach(livro => componenteLivroTela(livro))
}

export let clearScreen = () => {
  elementoParaInserirLivros.innerHTML = ""
}

export let bannerDescontoTodosLivros = (valorTotal)=>{
  bannerPromocao.innerHTML = `<p>Todos os livros disponíveis por R$ <span id="valor">${valorTotal}</span></p>`
}