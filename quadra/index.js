

var burguer = document.querySelector('.burguer');
var navLinks = document.querySelector('.nav-links');
var linha1 = document.querySelector('.burguer div:first-child');
var linha2 = document.querySelector('.burguer div:nth-child(2)');
var linha3 = document.querySelector('.burguer div:last-child');

burguer.addEventListener('click', () => {
    //exibição do menu
    navLinks.classList.toggle('exibir');

    //alteração da primeira div do burguer
    linha1.classList.toggle('close1');
    //alteração da segunda div do burguer
    linha2.classList.toggle('close2');
     //alteração da terceira div do burguer
    linha3.classList.toggle('close3');
})