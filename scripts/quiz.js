const startQuizButton = document.querySelector('#start');
const finishQuizButton = document.querySelector('#finish-quiz');
const scoreBoard = document.querySelector('.quiz__scoreboard');
const score = document.querySelector('#score');

const question1 = document.querySelector('#question-1');
const question2 = document.querySelector('#question-2');
const question3 = document.querySelector('#question-3');
const questions = [question1, question2, question3];

let totalScore = 0;
// Cada pergunta pode ser contabilizada apenas uma vez.
const answeredQuestions = new Set();

startQuizButton.addEventListener('click', () => {
   startQuizButton.classList.add('quiz__btn--hidden');
   scoreBoard.classList.remove('quiz__scoreboard--hidden');
   question1.classList.remove('quiz__question--hidden');
});

questions.forEach((question, index) => {
   question.addEventListener('submit', (event) => {
      event.preventDefault();
      const option = event.submitter;
      if (answeredQuestions.has(question) || !option) return;
      answeredQuestions.add(question);

      const isCorrect = option.hasAttribute('data-correct');
      option.classList.add(isCorrect ? 'quiz__option--correct' : 'quiz__option--incorrect');

      // Cada acerto soma 10 pontos; erros mantêm o total.
      if (isCorrect) totalScore += 10;
      score.textContent = totalScore;

      question.querySelectorAll('.quiz__option').forEach((answer) => {
         answer.setAttribute('disabled', true);
      });

      const nextQuestion = questions[index + 1];
      if (nextQuestion) {
         nextQuestion.classList.remove('quiz__question--hidden');
      } else {
         finishQuizButton.classList.remove('quiz__btn--hidden');
      }
   });
});

finishQuizButton.addEventListener('click', () => {
   if (answeredQuestions.size !== questions.length) return;
   // Recarrega a página para voltar ao estado inicial.
   window.location.reload();
});



