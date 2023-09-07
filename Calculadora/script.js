const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%", "*", "/", "-", "+", "="];
let output = "";

const calculate = (btnValue) => {
    if (btnValue === "=" && btnValue !== "") {
        output = evaluateExpression(output.replace("%", "/100"));
    } else if (btnValue === "CE") {
        output = "";
    } else if (btnValue === "DEL") {
        output = output.slice(0, -1);
    } else {
        output += btnValue;
    }
    display.value = output;
};

const evaluateExpression = (expression) => {
    let operators = ['*', '/', '+', '-'];
    let values = expression.split(/[\+\-\*\/]/);

    let result = parseFloat(values[0]);

    for (let i = 1; i < values.length; i++) {
        let operator = expression[values[i].length];
        let value = parseFloat(values[i]);

        switch (operator) {
            case '*':
                result *= value;
                break;
            case '/':
                result /= value;
                break;
            case '+':
                result += value;
                break;
            case '-':
                result -= value;
                break;
        }
    }

    return result;
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
