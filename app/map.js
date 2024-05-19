// https://cursos.alura.com.br/forum/topico-duvida-operador-spread-310905

export let livrosComDescontoLoja = (livrosFiltro) => {
    let livrosDeconto = 0.3
    let todosLivrosComDesconto = livrosFiltro.map(livro => {
        return (
            { ...livro, 'preco': (livro.preco - (livro.preco * livrosDeconto)).toFixed(2) }
        )
    })
    return todosLivrosComDesconto
}