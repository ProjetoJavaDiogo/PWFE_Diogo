const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars =["%", "*","/","-","+","="];
let output = "";

const calculate = (btnValue) =>{
    if(btnValue === "=" && btnValue !== ""){
        //se o output for % então mude para /100 para realizar o cálculo de porcentagem
       output = eval(output.replace("%", "/100")); 
    } else if(btnValue === "CE"){
        //se ce for clicado substituir o output atual por nada
        output = "";
    } else if(btnValue === "DEL"){
        //se del for clicado remover o último elemento adicionado
        output = output.toString().slice(0, -1);
    } else {
        //se output é vazio e botao é specialChars então 
        if(output === "" && specialChars.includes(btnValue)) return;
        output+=btnValue;   
    }
    display.value = output;
};

//adicionar um eventListener aos botões, para ocorreer um vento, ou seja, as operações e 'aparições' no display no caso dos números
buttons.forEach((button) =>{
    //eventListener que faz aparecer o valor de cada botao no console.log
    //button.addEventListener("click", e => console.log(e.target.dataset.value));
    button.addEventListener("click", e => calculate(e.target.dataset.value));

});

const themeToggleBtn = document.querySelector(".theme-toggler");
const calculator = document.querySelector(".container");
const toggleIcon = document.querySelector(".toggler-icon");
let isDark = true;
themeToggleBtn.onclick = () => {
  calculator.classList.toggle("dark");
  themeToggleBtn.classList.toggle("active");
  isDark = !isDark;
};