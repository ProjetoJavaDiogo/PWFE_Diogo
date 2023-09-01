const $luzesDoCirculo = document.querySelectorAll('.luz-circular')
let contadorDeLuz = 0;

const mostrarLuz = () => {
    $luzesDoCirculo[contadorDeLuz].className = 'luz-circular';
    contadorDeLuz++;

    if (contadorDeLuz > 2) contadorDeLuz = 0
        
    const luzAtual = $luzesDoCirculo[contadorDeLuz];
    luzAtual.classList.add(luzAtual.getAttribute('color')) 
}
setInterval(mostrarLuz,1000)