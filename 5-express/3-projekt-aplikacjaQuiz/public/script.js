const question = document.querySelector('#question');
// const answer1 = document.querySelector('#answer1');
// const answer2 = document.querySelector('#answer2');
// const answer3 = document.querySelector('#answer3');
// const answer4 = document.querySelector('#answer4');



function fillQuestionElements(data) {
  const gameBoard = document.querySelector('#game-board');
  const h2 = document.querySelector('h2');
  if (data.winner === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Wygrałeś!!!'
    return;
  }

  question.innerText = data.question;
  // answer1.innerText = data.answers[0];
  // answer2.innerText = data.answers[1];
  // answer3.innerText = data.answers[2];
  // answer4.innerText = data.answers[3];

  for (const i in data.answers) {
    const answerEl = document.querySelector(`#answer${Number(i)+1}`);
    answerEl.innerText = data.answers[i];
  }
}



function showNextQuestion() {
  fetch('/question', {
      method: 'GET',
    })
    .then(resp => resp.json())
    .then(data => {
      fillQuestionElements(data);
    })
}

showNextQuestion();

const goodAnswersSpan = document.querySelector('#good-answers');

function handleAnswerFeedback(data) {
  goodAnswersSpan.innerText = data.goodAnswers;
  showNextQuestion();
}


function sendAnswer(answerIndex) {
  fetch(`/answer/${answerIndex}`, {
      method: 'POST',
    })
    .then(resp => resp.json())
    .then(data => {
      handleAnswerFeedback(data);
    })
}

const buttons = document.querySelectorAll('button');

for (const button of buttons) {
  button.addEventListener('click', (event) => {

    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);

  })
}