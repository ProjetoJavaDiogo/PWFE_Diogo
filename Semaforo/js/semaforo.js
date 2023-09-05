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

const minhaDiv = document.getElementById("minhaDiv");

    minhaDiv.style.backgroundColor = "#2aa5a5";

    function mudarCorDeFundo() {

        // Verifica a cor atual da div e alterna entre azul e vermelho
  
        if (minhaDiv.style.backgroundColor === "blue") {
  
          minhaDiv.style.transition = "background-color 1s";
  
           minhaDiv.style.backgroundColor = "grey";
  
        } else {
  
          minhaDiv.style.transition = "background-color 1s";
  
          minhaDiv.style.backgroundColor = "blue";
  
        }
  
      }