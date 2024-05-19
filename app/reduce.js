// https://pt.stackoverflow.com/questions/254866/como-usar-o-fazer-opera%C3%A7%C3%A3o-de-redu%C3%A7%C3%A3o-reduce-em-objetos
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce

export let descontoTodosLivros = (livros) => {
    var descontoLivros = livros.reduce(function(soma, atual) {
        return soma + parseInt(atual.preco);
      },0)
    return descontoLivros
}


