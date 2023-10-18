
<p> <h1 align="center">Criando um Jogo do Detona Stitch com JavaScript</h1></p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/22d3c7e6-bd21-47c0-a165-f3fa79b556c0">
</p>

<p align="center">
    <img width="700" src="https://github.com/SuellenDiass/SuellenDiass/assets/102911341/07fa57c7-511a-4563-9acf-1b50eb6d3933">
</p>


<p align="center">Seja redirecionado à página do 
<a href="https://jogo-do-detona-stitch-com-javascript.suellensouza.repl.co/" target="_blank">projeto</a></p>

O tema escolhido foi Stitch, um alienígena azul que foge para a Terra e aterrissa em uma ilha havaiana, Kauai, onde é confundido com um cachorro e adotado por Lilo Pelekai. Stitch e Lilo enfrentam uma série de desafios e aventuras, mas a mensagem central permanece: a importância do amor, da família e da aceitação. É uma história de redenção e transformação de um personagem inicialmente problemático em alguém que encontra um lar e um propósito na Terra.

Resummo do que foi feito no código, explicando cada estrutura e sua finalidade, bem como o que aprendemos  com esse projeto de jogo.


**1. HTML (index.html):**
   - O arquivo HTML define a estrutura da página do jogo.
   - Há uma seção `<head>` para metadados, como o título da página e links para estilos.
   - O corpo da página contém um contêiner com três seções: menu, painel de jogo e script do jogo.
   - O painel de jogo é composto por 9 quadrados (divs) onde os personagens aparecerão.
   - Cada quadrado tem uma classe que define seu comportamento (inimigo ou amigável) e um ID para identificação.

**2. CSS (styles.css):**
   - O arquivo CSS define o estilo e a aparência dos elementos na página.
   - Ele define o layout do contêiner, do menu e dos quadrados do jogo.
   - As classes `enemy` e `friendly` definem o estilo dos quadrados inimigos e amigáveis.

**3. JavaScript (engine.js):**
   - O código JavaScript controla a lógica do jogo.
   - Ele inicia com a definição de um objeto `state`, que armazena as informações do jogo.
   - O objeto `state` contém propriedades para elementos da tela, valores do jogo e ações a serem executadas.
   - As funções `showInstructions`, `playSound`, `addListenerHitBox`, `countDown` e `randomSquare` controlam a lógica do jogo.
   - O evento `DOMContentLoaded` garante que o JavaScript seja executado após o carregamento da página.
   - O jogo é iniciado após a exibição das instruções ao jogador.

**O que aprendemos com esse projeto:**
   
1. **HTML e Estrutura do Documento:** Aprendemos como estruturar um documento HTML, criar elementos, definir classes e IDs e organizar o conteúdo da página.

2. **CSS e Estilização:** Aprendemos como usar CSS para estilizar elementos, definir cores, tamanhos, bordas e imagens de fundo.

3. **JavaScript e Programação:** Aprendemos os conceitos básicos de programação em JavaScript, como variáveis, funções, loops e condicionais.

4. **Lógica de Jogo:** Aprendemos a criar a lógica de um jogo simples, incluindo a geração aleatória de elementos, contagem regressiva de tempo e gerenciamento de eventos de clique.

5. **Interação com o Usuário:** Aprendemos como interagir com o usuário por meio de alertas, atualização de elementos na página e reprodução de sons.

6. **Gerenciamento de Eventos:** Aprendemos a adicionar ouvintes de eventos para responder a ações do usuário, como cliques em elementos.

Este projeto  envolve conceitos fundamentais de desenvolvimento web e lógica de programação, enquanto cria um jogo simples e interativo. 

Responsividade:

- Usei uma unidade de medida relativa (`vh`) para garantir que o contêiner ocupe pelo menos a altura da janela (viewport height), o que ajuda a evitar problemas com a imagem de fundo.
- Adicionei uma media query para telas menores, onde os quadrados ficam um pouco menores (ajuste conforme necessário).
- Adicionei uma segunda media query para reduzir o tamanho da fonte para telas menores (ajuste conforme necessário).

###

## Tecnologias utilizadas

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original.svg" alt="html" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="css" width="40" height="40"/> </a> 

<a href="#" target="_blank"> <img src="https://camo.githubusercontent.com/ee5225ba7c4338f1a1c10121ec32c396e1a4a2f5b0b58b6afd6d5c56ff5d6196/68747470733a2f2f63646e2e6a7364656c6976722e6e65742f67682f64657669636f6e732f64657669636f6e2f69636f6e732f7673636f64652f7673636f64652d6f726967696e616c2d776f72646d61726b2e737667" alt="firebase" width="40" height="40"/> </a>

###

#### Aula  administrada pelo mentor Felipe Aguiar / Tech Lead da DIO

## Curso administrado pela Dio.me

 [DIO](https://www.dio.me/).





