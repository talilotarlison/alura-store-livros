
export let esolharDeFiltroUsuario = (livros, escolha) => {
    console.log(escolha)
    var livrosFiltadros = livros.filter((livro) => {
        return livro.categoria == escolha
    })
    console.log(livrosFiltadros)
    return livrosFiltadros
}

export let filterLivrosDisponiveis = (livros) => {
    var livrosDisponiveis = livros.filter((livro) => {
        return livro.quantidade > 0
    })
    return livrosDisponiveis
}