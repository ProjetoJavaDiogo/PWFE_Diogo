const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "=","x²"];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && output !== "") {
        output = evalExpression(output.replace("%", "/100"));
    } else if (btnValue === "CE") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1);
    } else if (btnValue === "x²") {
        output = Math.sqrt(parseFloat(output));
    } else {
        output += btnValue;
    }
    display.value = output;
};

const evalExpression = (expression) => {
    const operators = /[+\-*/]/g;
    const parts = expression.split(operators);
    const operator = expression.match(operators);

    if (parts.length === 2 && operator) {
        const [num1, num2] = parts.map(parseFloat);
        switch (operator[0]) {
            case "+": return num1 + num2;
            case "-": return num1 - num2;
            case "*": return num1 * num2;
            case "/": return num1 / num2;
            case "x²": return Math.sqrt(num1);
            default: return NaN;  
        }
        
    }

    return NaN;
};

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value));
});

//código para alternar entre os modos de cor
const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");

let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};