<h1 align="center"> Projetos JavaScript | PWFE </h1>


<h2 id=indice> 🗂️ Índice </h2>
<p align="center">
 <a href="#objetivo">Objetivo</a> |
 <a href="#descricao">Descrição</a> |
 <a href="#tecnologias">Tecnologias</a> |
 <a href="#funcionalidades">Funcionalidade</a> |
 <a href="#layout">UX|UI</a> |
 <a href="#responsividade">Responsividade </a> |
 <a href="#resumo">Resumo do Projeto</a> |
 <a href="#referencia">Referências | Estudos</a> |
 <a href="#relatorios">Relatórios</a> |
 <a href="#autor">Autores</a>
</p>

<h2 id="#objetivo"> 🎯 Objetivo </h2>

<h2 id="#descricao"> 📃 Descrição </h2>

- `Projeto 1`: Lâmpada 💡
  - 
  - O código implementa um controle interativo de uma lâmpada através de botões de ligar e desligar, além de permitir que a lâmpada seja quebrada ao ser clicada duas vezes.
  
- `Projeto 2`: Semáforo ⚙
  - 
  - Resumidamente, o código cria uma animação de alternância de luzes circulares que mudam de cor. Além disso, há uma função que alterna o fundo de uma div entre azul e cinza (ou vermelho e azul) a cada segundo.
  
- `Projeto 3`: Calculadora 🧮
  - 
  - Este código cria uma calculadora interativa com funcionalidades básicas de operações matemáticas e um recurso para alternar entre modos de cor.
  
 - `Projeto 3a`: Relógio ⏳
   - 
   - Neste projeto o  código JavaScript cria uma função para atualizar e exibir a data e a hora atuais, utilizando arrays para armazenar os nomes de meses e dias da semana, e um loop para atualizar os elementos HTML correspondentes.

<h2 id="#tecnologias"> 🛠️ Tecnologias </h2>
As seguintes ferramentas foram usadas na construção do projeto:

- [x]  HTML
- [x]  CSS
- [x]  JavaScript

<h2 id="#funcionalidades"> Funcionalidades dos Projetos </h2>

## Calculadora
  - Seleção de Elementos HTML:
    - O código seleciona elementos HTML como o display da calculadora, os botões e elementos relacionados à troca de tema.

  - Função de Cálculo (calculate):
    - Esta função processa os cliques nos botões da calculadora, realizando operações como adição, subtração, multiplicação, divisão, porcentagem e exclusão de caracteres.

  - Avaliação de Expressões (avalExpression):
    - A função avalExpression analisa uma expressão matemática, identificando os operadores e operandos, e realiza as operações correspondentes.

  - Event Listeners para Botões:
    - Cada botão na página recebe um event listener para reagir aos cliques. Isso resulta na chamada da função calculate com o valor associado ao botão clicado.

  - Alternância de Modo de Cor:
    - Um botão de alternância de tema permite ao usuário mudar entre modos de cor claro e escuro na interface da calculadora.

## Lâmpada
Certamente! Aqui está um resumo em cinco tópicos do código fornecido:

 - Seleção de Elementos HTML:
   - O código seleciona elementos HTML usando `document.getElementById` para os botões de ligar e desligar (`LigarOn` e `DesligarOff`) e para a lâmpada (`lamp`).

 - Definição de Funções:
   - O código define três funções: `lampOn`, `lampOff` e `LampadaQuebrada`.
   - `lampOn` altera a fonte da imagem da lâmpada para a versão acesa.
   - `lampOff` altera a fonte da imagem da lâmpada para a versão apagada.
   - `LampadaQuebrada` altera a fonte da imagem da lâmpada para a versão quebrada.

  - Associação de Eventos:
     - Ao clique do botão "Ligar", a função `lampOn` é chamada.
     - Ao clique do botão "Desligar", a função `lampOff` é chamada.
     - Quando o mouse passa sobre a lâmpada, a função `lampOn` é chamada.
     - Quando o mouse sai da área da lâmpada, a função `lampOff` é chamada.
     - Quando a lâmpada é clicada duas vezes (`dblclick`), a função `LampadaQuebrada` é chamada.

 - Manipulação de Imagens:**
   - As funções `lampOn`, `lampOff` e `LampadaQuebrada` alteram a fonte da imagem da lâmpada para refletir seu estado.

 - Resumidamente, o código implementa um controle interativo de uma lâmpada através de botões de ligar e desligar, além de permitir que a lâmpada seja quebrada ao ser clicada duas vezes.

## Relógio
 - Função updateClock:
   - Esta função é responsável por obter e atualizar as informações de data e hora atuais.
   - Ela utiliza o objeto Date para obter detalhes como dia da semana, mês, dia do mês, ano, horas, minutos e segundos.
   - Além disso, ela formata os minutos e segundos para terem sempre dois dígitos (adicionando um zero à esquerda se necessário).

 - Arrays de Nomes de Mês e Dia da Semana:
   - O código inclui arrays predefinidos para os nomes dos meses e dias da semana em português.

 - Arrays de IDs e Valores:
   - Define dois arrays, ids e values, que correspondem aos IDs dos elementos HTML onde as informações de data e hora serão exibidas, e seus respectivos valores atualizados.

 - Loop para Atualização de Elementos HTML:
   - Utiliza um loop for para percorrer os IDs e atualizar os elementos HTML correspondentes com os valores calculados e formatados.

 - Função initClock:
   - Chama a função updateClock para inicializar a exibição de data e hora assim que a página é carregada.
   - Usa window.setInterval para chamar a função updateClock a cada milissegundo, garantindo que a data e a hora sejam atualizadas em tempo real.


<h2 id="#layout"> UX|UI </h2>

<h2 id="#responsividade"> Responsividade </h2>

<h2 id="#resumo"> Resumo do Projeto </h2>

<h2 id="#relatorios"> Relatórios </h2>

<a href="RELATÓRIO.md">Relatórios</a>

<h2 id="#autor"> Autores </h2>

| [<img loading="lazy" src="https://avatars.githubusercontent.com/u/82974688?v=4" width=115><br><sub>Matheus Rodrigues da Silva</sub>](https://github.com/TheuZCoder) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/123770371?v=4" width=115><br><sub>Rafael de Sousa Moura</sub>](https://github.com/rafaelmoura23) |  [<img loading="lazy" src="https://avatars.githubusercontent.com/u/123977521?v=4" width=115><br><sub>Leonardo</sub>](https://github.com/vitalinoleo) |
| :---: | :---: | :---: |



