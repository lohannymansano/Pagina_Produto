//Seleciona a imagem principal
const imagemPrincipal = document.getElementById('imagem-princippal');

//Seleciona todas as miniaturas
const miniaturas = document.querySelectorAll('.miniatura');

//Adiciona em evento de clique para cada miniatura 
miniaturas.forEach(miniatura => {
    miniatura.addEventListener('click', function() { 
    //Pega o valor do atributo 'data-imagem' da miniatura clicada
    const novaImagem = this.getAttribute('data-imagem');
    //Substitui a imagem principal pela imagem da miniatura clicada 
    imagemPrincipal.src = novaImagem;
});
});