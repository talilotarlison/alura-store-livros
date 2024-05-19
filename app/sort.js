export function ordenarLivrosPorPreco(livros) {
    let lirvosOrdenados = livros.sort((a, b) => a.preco - b.preco)
    return lirvosOrdenados
}