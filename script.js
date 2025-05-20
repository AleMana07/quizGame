//inizializzazione variabili
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let randomList = 0;
let indexRandom = 0;
//mi serve per poter poi eliminare i gruppi di domande già usciti
let rows = [];
for (let i = 0; i < questions.length; i++) {
    rows[i] = i;
}
let columns = questions[1].length;
let wrong = false;
console.log("righe: " + rows);

// Elementi html
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startBtn = document.getElementById("start-btn");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const timeElement = document.getElementById("time");
const scoreElement = document.getElementById("score");
const finalScoreElement = document.getElementById("final-score");
const playerNameInput = document.getElementById("player-name");
const saveBtn = document.getElementById("save-btn");
const leaderboardElement = document.getElementById("leaderboard");
const restartBtn = document.getElementById("restart-btn");
let correctBtn = null;

// Avvio
startBtn.addEventListener("click", startQuiz);

// Funzione per iniziare il quiz
function startQuiz() {
    generateRandom();
    wrong = false;
    //nasconde il menù principale
    startScreen.classList.add("hidden");
    //mostra le domande
    quizScreen.classList.remove("hidden");
    loadQuestion();
    startTimer();
}


function generateRandom() {
    //prende a caso una riga della matrice
    if (rows.length >= 1) {
        indexRandom = Math.floor(Math.random() * rows.length);
        randomList = rows[indexRandom];
        console.log("righe: " + rows);
    } else {
        for (let i = 0; i < questions.length; i++) {
            rows[i] = i;
        }
        indexRandom = 0;
        indexRandom = Math.floor(Math.random() * rows.length);
        randomList = rows[indexRandom];
    }

}

// Carica una domanda
function loadQuestion() {
    const currentQuestion = questions[randomList][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";

    //genera i bottone delle risposte
    //il vantaggio è che potrebbero esserci più risposte
    //rispetto ad altre domande
    for (let i = 0; i < currentQuestion.options.length; i++) {
        const button = document.createElement("button");
        button.textContent = currentQuestion.options[i];
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(i, button));
        optionsElement.appendChild(button);
        //salva il bottone con la risposta corretta
        if (i == currentQuestion.answer) {
            correctBtn = button;
        }
    }

}

// Timer per le risposte
function startTimer() {
    timeLeft = 30;
    timeElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        //quando il timer scade passa alla domanda successiva
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

//Timer dopo aver risposto
function startTimerAfterChose() {
    timeLeft = 1;
    timeElement.textContent = timeLeft;
    timer2 = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;

        //quando il timer scade passa alla domanda successiva
        if (timeLeft <= 0) {
            clearInterval(timer2);
            nextQuestion();
        }
    }, 1000);
}

// riceve in ingresso l'indice del bottone premuto e il bottone stesso
function selectAnswer(optionIndex, button) {
    clearInterval(timer);
    const currentQuestion = questions[randomList][currentQuestionIndex];

    //controlla che la risposta sia corretta e che non sia già
    //stato premuto un altro bottone
    if (currentQuestion.answer === optionIndex && !wrong) {
        wrong = true;
        button.style.backgroundColor = "green";
        button.style.color = "white";
        score += timeLeft; // meno tempo ci impieghi più punti ottieni
        scoreElement.textContent = score;
        startTimerAfterChose();
    } else if (!wrong) {
        wrong = true;
        //mostra a video la risposta corretta
        correctBtn.style.backgroundColor = "green";
        correctBtn.style.color = "white";
        //segnala in rosso, quella sbagliata
        button.style.backgroundColor = "red";
        button.style.color = "white";
        startTimerAfterChose();
    }
    

}

// Controllo per domanda successiva o per concludere il quiz
function nextQuestion() {
    wrong = false;
    currentQuestionIndex++;

    //quando sono ancora presenti delle domande va avanti
    if (currentQuestionIndex < columns) {
        loadQuestion();
        startTimer();
    } else {
        endQuiz();
    }
}

// Termina il quiz
function endQuiz() {
    //toglie dall'elenco degli argomenti quello che era stato estratto
    rows.splice(indexRandom, 1);
    quizScreen.classList.add("hidden");
    resultScreen.classList.remove("hidden");
    finalScoreElement.textContent = score;
    updateLeaderboard();
    generateRandom();
    console.log(randomList);

}

// Aggiorna la classifica
function updateLeaderboard() {
    leaderboardElement.innerHTML = "<h3>Classifica</h3>";
    //Ordina la classifica dal più alto al più basso)
    leaderboard.sort(function (a, b) {
        return b.score - a.score;
    });

    //Prende solo i primi 5 elementi
    const top5 = leaderboard.slice(0, 5);

    //Aggiunge ogni elemento alla visualizzazione
    for (let i = 0; i < top5.length; i++) {
        const posizione = i + 1;
        const nome = top5[i].name;
        const punteggio = top5[i].score;

        leaderboardElement.innerHTML += `<div>${posizione}. ${nome}: ${punteggio}</div>`;
    }
}

// Salva il punteggio
saveBtn.addEventListener("click", () => {
    const name = playerNameInput.value.trim();
    if (name) {
        leaderboard.push({ name, score });
        localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
        updateLeaderboard();
    }
});

// Ricomincia il quiz
restartBtn.addEventListener("click", () => {
    currentQuestionIndex = 0;
    score = 0;
    scoreElement.textContent = score;
    resultScreen.classList.add("hidden");
    startQuiz();
});