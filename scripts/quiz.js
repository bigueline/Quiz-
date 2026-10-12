const startQuizButton = document.querySelector('#start');
const finishQuizButton = document.querySelector('#finish-quiz');

const question1 = document.querySelector('#question-1');
const question2 = document.querySelector('#question-2');
const question3 = document.querySelector('#question-3');

startQuizButton.addEventListener('click', () => {
   console.log('quiz iniciado');

   startQuizButton.classList.add('quiz__btn--hidden');

   question1.classList.remove('quiz__question--hidden');
});

question1.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log('questão 1 respondida');

   const isCorrect = event.submitter.hasAttribute('data-correct')
   console.log('marcou a certa?', isCorrect)

   if (isCorrect) {
      event.submitter.classList.add('quiz__option--correct')
   } else {
      event.submitter.classList.add('quiz__option--incorrect')
   }

 question1.querySelectorAll('.quiz__option').forEach((option) => {
    option.setAttribute('disabled', true)
 })

 question2.classList.remove('quiz__question--hidden');

});

question2.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log('questão 2 respondida');

    const isCorrect = event.submitter.hasAttribute('data-correct')
   console.log('marcou a certa?', isCorrect)

    if (isCorrect) {
      event.submitter.classList.add('quiz__option--correct')
   } else {
      event.submitter.classList.add('quiz__option--incorrect')
   }

 question2.querySelectorAll('.quiz__option').forEach((option) => {
    option.setAttribute('disabled', true)
 })

 question3.classList.remove('quiz__question--hidden');

});

question3.addEventListener('submit', (event) => {
   event.preventDefault();
   console.log('questão 3 respondida');

    const isCorrect = event.submitter.hasAttribute('data-correct')
   console.log('marcou a certa?', isCorrect)

    if (isCorrect) {
      event.submitter.classList.add('quiz__option--correct')
   } else {
      event.submitter.classList.add('quiz__option--incorrect')
   }

 question3.querySelectorAll('.quiz__option').forEach((option) => {
    option.setAttribute('disabled', true)
 })

 finishQuizButton.classList.remove('quiz__btn--hidden');

});

finishQuizButton.addEventListener('click', () => {
  console.log('Quiz finalizado')
})