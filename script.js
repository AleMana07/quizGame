// Variabili globali
let currentQuestionIndex = 0;
let score = 0;
let timeLeft = 30;
let timer;
let leaderboard = JSON.parse(localStorage.getItem("leaderboard")) || [];
let randomList = 0;
let indexRandom = 0;
let rows = [];
for(let i=0;i<questions.length;i++){
    rows[i] = i;
}
let columns = questions[1].length;
let wrong = false;
console.log("righe: "+rows);

// Elementi DOM
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

// Avvia il quiz
startBtn.addEventListener("click", startQuiz);

// Funzione per iniziare il quiz
function startQuiz() {
    wrong = false;
    startScreen.classList.add("hidden");
    quizScreen.classList.remove("hidden");
    loadQuestion();
    startTimer();
}

function generateRandom(){
    if(rows.length>=1){
        indexRandom = Math.floor(Math.random()*rows.length);
        randomList = rows[indexRandom];
        console.log("righe: "+rows);
    }else{
        for(let i=0;i<questions.length;i++){
            rows[i] = i;
        }
        indexRandom = 0;
        indexRandom = Math.floor(Math.random()*rows.length);
        randomList = rows[indexRandom];
    }
    
}

// Carica una domanda
function loadQuestion() {
    const currentQuestion = questions[randomList][currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionsElement.innerHTML = "";
    
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");
        button.addEventListener("click", () => selectAnswer(index, button));
        optionsElement.appendChild(button);
    });
}

// Timer
function startTimer() {
    timeLeft = 30;
    timeElement.textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

function startTimerAfterChose() {
    timeLeft = 0;
    timeElement.textContent = timeLeft;
    timer2 = setInterval(() => {
        timeLeft--;
        timeElement.textContent = timeLeft;
        
        if (timeLeft <= 0) {
            clearInterval(timer2);
            nextQuestion();
        }
    }, 1000);
}

// Seleziona risposta
function selectAnswer(optionIndex, button) {
    clearInterval(timer);
    const currentQuestion = questions[randomList][currentQuestionIndex];
    
    if (currentQuestion.answer === optionIndex && !wrong) {
        wrong = true;
        button.style.backgroundColor = "green";
        button.style.color = "white";
        score += timeLeft; // Più veloce rispondi, più punti ottieni
        scoreElement.textContent = score;
        startTimerAfterChose();
    }else if (!wrong){
        startTimerAfterChose();
        wrong = true;
        button.style.backgroundColor = "red";
        button.style.color = "white";
    }
    
   
}

// Prossima domanda o fine quiz
function nextQuestion() {
    wrong = false;
    currentQuestionIndex++;
    
    if (currentQuestionIndex < columns) {
        loadQuestion();
        startTimer();
    } else {
        endQuiz();
    }
}

// Termina il quiz
function endQuiz() {
    rows.splice(indexRandom,1);
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
    leaderboard.sort((a, b) => b.score - a.score).slice(0, 5).forEach((entry, index) => {
        leaderboardElement.innerHTML += `<div>${index + 1}. ${entry.name}: ${entry.score}</div>`;
    });
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
    resultScreen.classList.add("hidden");
    startQuiz();
});