const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=","x²"];
let output = ""; // output é let pois os valores recebidos variam


const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") { //compara os valores levando em conta o valor e o tipo de dado
        output = evalExpression(output.replace("%", "/100"));
    } else if (btnValue === "CE") { //apagar as informações do display
        output = "";
    } else if (btnValue === "DEL") {  //apagar a primeira informação do display
        output = output.toString().slice(0, -1); 
    } else if (btnValue === "x²") {
        output = Math.sqrt(parseFloat(output));
    } else {
        output += btnValue; //o valor do botão é adicionado ao display
    }
    display.value = output; //aparecer no display o output
};

// declarando a função "avalExpression"
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
            case "/": 
            if (num2 !== 0) {
                return num1 / num2;
            } else {
                return "Erro: / por 0";
            }
            case "x²": return Math.sqrt(num1);
            //adicionar mais operações
            default: return NaN;  
        }
        
    }

    return NaN; //else da expressão
};

// const evalExpression = (expression) => {
//     try {
//         return eval(expression);
//     } catch (error) {
//         return "Erro";
//     }
// };

buttons.forEach((button) => { 
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
    //eventListener para quando um botão é clicado, rodar a função calculate  de acordo com os argumentos fornecidos pelo usuário
});

//código para alternar entre os modos de cor
const themeToggleBtn = document.querySelector(".theme-toggler");
const calcular = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => { //função onclick para ocorrer um evento ocorret quando tal botao for clicado
  calcular.classList.toggle("dark"); //alterna entre os modos refernciados no container - .dark
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark; //inverte o valor de isDark, true and false
};
