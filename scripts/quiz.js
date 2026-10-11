const question1 = document.getElementById('question-1');

console.log("question1", question1);
console.log("Classes CSS da questão 1:", question1.classList);

question1.classList.remove('quiz__question--hidden');
console.log('questão 1: classes css', question1.classList);
