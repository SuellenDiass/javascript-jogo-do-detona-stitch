document.addEventListener("DOMContentLoaded", function() {
    /* Configuração do estado global */
    const state = {
        view: {
            squares: document.querySelectorAll(".square"), // Use o seletor correto com um ponto (.) antes da classe
            enemy: null,
            timeLeft: document.querySelector("#time-left"),
            score: document.querySelector("#score"),
        },
        values: {
            gameVelocity: 1000,
            hitPosition: 0,
            result: 0,
            currentTime: 60,
        },
        actions: {
            timeId: null,
            countDownTimeId: null,
        }
    };

    /* Função para mostrar alerta de instruções */
    function showInstructions() {
        const instructions = "Bem-vindo ao jogo! Instruções:\n\n" +
            " - Clique nos quadrados que mostram o personagem inimigo Capitão Gantu.\n" +
            " - Evite clicar nos quadrados com o personagem amigável Stitch.\n" +
            " - Você tem um tempo limitado para conseguir a maior pontuação possível.\n\n" +
            "Clique em 'OK' para começar o jogo.";

        window.alert(instructions);
    }

    /* Função para tocar som */
    function playSound(audioName) {
        const audio = new Audio(`./src/audios/${audioName}.m4a`);
        audio.volume = 0.2;
        audio.play();
    }

    /* Função para adicionar ouvintes de clique */
    function addListenerHitBox() {
        state.view.squares.forEach((square) => {
            square.addEventListener("mousedown", () => {
                if (square.classList.contains("enemy")) {
                    state.values.result++;
                    playSound("hit");
                } else if (square.classList.contains("friendly")) {
                    state.values.result--;
                    playSound("lose");
                }
                state.view.score.textContent = state.values.result;
            });
        });
    }

    /* Função para fazer contagem regressiva de tempo */
    function countDown() {
        state.values.currentTime--;
        state.view.timeLeft.textContent = state.values.currentTime;

        if (state.values.currentTime < 0) {
            clearInterval(state.actions.countDownTimeId);
            clearInterval(state.actions.timeId);
            alert("Fim do jogo! Sua pontuação final é: " + state.values.result);
        }
    }

    /* Função para escolher quadrado aleatório */
    function randomSquare() {
        state.view.squares.forEach((square) => {
            square.classList.remove("enemy");
            square.classList.remove("friendly");
        });
        /* loop dos personagens */
        for (let i = 0; i < 3; i++) {
            const enemyRandomNumber = Math.floor(Math.random() * 9);
            const enemySquare = state.view.squares[enemyRandomNumber];
            enemySquare.classList.add("enemy");
        }

        for (let i = 0; i < 2; i++) {
            const friendlyRandomNumber = Math.floor(Math.random() * 9);
            const friendlySquare = state.view.squares[friendlyRandomNumber];
            friendlySquare.classList.add("friendly");
        }

        state.values.hitPosition = state.view.squares[0].id; // Define uma posição padrão
    }

    /* Função principal para iniciar o jogo */
    function initialize() {
        showInstructions();
        addListenerHitBox();

        // Iniciar o jogo
        state.actions.timeId = setInterval(randomSquare, state.values.gameVelocity);
        state.actions.countDownTimeId = setInterval(countDown, 1000);
    }

    initialize(); // Inicia o jogo quando a página está pronta
});




