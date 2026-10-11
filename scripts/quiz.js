console.log("Quiz iniciando...");

// O HTML usa id="start"; buscar "start-quiz" retornava null.
// O script usa defer, então o botão já existe quando esta linha executa.
const startButton = document.getElementById("start");

console.log('texto do botão', startButton.textContent);

// Reutiliza a variável declarada acima; startQuizButton não estava definida.
startButton.textContent = "Iniciando Quiz...";
