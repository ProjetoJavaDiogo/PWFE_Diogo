const display = document.querySelector(".display");
const botoes = document.querySelectorAll("button");
let output = ""; // output é let pois os valores recebidos variam
let tipoMostrado = true; // para calculadora cientifica



// ALTERNAR entre os modos da calculadora
const mudarTipoBtn = document.querySelector(".mudarTipo");
mudarTipoBtn.addEventListener("click", mudarTipo);

function mudarTipo() {
    const cientifica = document.querySelectorAll(".cientifica");
    tipoMostrado = !tipoMostrado; // invertendo os valores


    cientifica.forEach(option => {
        option.style.display = tipoMostrado ? "inline-block" : "none";
    });

    mudarTipoBtn.textContent = tipoMostrado ? "Calculadora Normal" : "Calculadora Científica";
    //tipoMostrado = true    => calculadora normal
    //tipoMostrado = false    => calculadora cientifica
}


const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") { //compara os valores levando em conta o valor e o tipo de dado
        output = evalExpression(output.replace("%", "/100"));
    } else if (btnValue === "CE") { //apagar as informações do display
        output = "";
    } else if (btnValue === "DEL") {  //apagar a primeira informação do display
        output = output.toString().slice(0, -1); 
    } else if (btnValue === "√") {
        output = Math.sqrt(parseFloat(output)); //raiz
    } else if(btnValue === "pi"){
        output = Math.PI;
    } else if(btnValue === "e"){
        output = Math.E;
    } else if(btnValue === "fat"){
        output = calcularFatorial(parseFloat(output));
    } else if(btnValue === "log"){
        output = calcularLogaritmo(10, parseFloat(output)); 
    } else {
        output += btnValue; //o valor do botão é adicionado ao display
    }
    display.value = output; //aparecer no display o output
};

//função para calcular o fatorial
const calcularFatorial = (n) => {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * calcularFatorial(n - 1);
    }
};
//função para calular log
const calcularLogaritmo = (base, numero) => {
    return Math.log(numero) / Math.log(base);
};


// função "avalExpression"
const evalExpression = (expression) => {
    const operators = /[+\-*/]/g; // corresponde aos operadores matemáticos +, -, *, /
    const parts = expression.split(operators); // usado em strings para dividir a string em um array de substrings, usando um separador nesse caso os operadores
    //exemplo: 10+20 ==> ("10","20")
    const operator = expression.match(operators); // usando o match para encontrar todos os operadores

    if (parts.length === 2 && operator) {  //verifica se a string foi divida corretamente (nº e operator) e se existe um operador
        const [num1, num2] = parts.map(parseFloat); //extrai os dois valores e converte para float
        //cria um novo array a partir de um array existente, aplicando uma função a cada elemento do array original

        switch (operator[0]) { //usando switch case para definir os casos das operações matemáticas
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;
            case "/": return num2!==0 ? num1/num2 : "Erro: / por 0"; // operador ternário 
            //adicionar mais operações
            default: return NaN;  
        }
        
    } 
    return NaN;
};

// const evalExpression = (expression) => {
//     try {
//         return eval(expression);  // avalia o valor da cadeia de caracteres e calcula o resultado. (VBA)
//     } catch (error) {
//         return "Erro";
//     }
// };

botoes.forEach((button) => { 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    //eventListener para quando um botão é clicado, rodar a função calculate  de acordo com os argumentos fornecidos pelo usuário
});



// Mapeamento das teclas do teclado

document.addEventListener("keydown", (e) => {
    const key = e.key; // recebendo o valor da tecla clicada
    //array para todas as teclas válidas da calculadora
    const teclas = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-", "*", "/", "=", "Enter", "Backspace", "Escape"];
    
    if (teclas.includes(key)) {
      calculate(key); // roda  a função calculate
    }
  });

  //setando o funcionamento de enter e backspace
  document.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        calculate("="); // atribuindo a tecla enter como igual
    } else if(e.key === "Backspace"){
      calculate("CE"); 
    }
  });



// ALTERNANDO entre os modos de cores da calculadora
const themeToggleBtn = document.querySelector(".theme-toggler");
const calcular = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => { //função onclick para ocorrer um evento ocorret quando tal botao for clicado
  calcular.classList.toggle("dark"); //alterna entre os modos refernciados no container - .dark
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark; //inverte o valor de isDark, true and false
};