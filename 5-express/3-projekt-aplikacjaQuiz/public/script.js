const question = document.querySelector('#question');

function fillQuestionElements(data) {
  const gameBoard = document.querySelector('#game-board');
  const h2 = document.querySelector('h2');

  if (data.winner === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Wygrałeś!!!'
    return;
  }


  if (data.loser === true) {
    gameBoard.style.display = 'none';
    h2.innerText = 'Nie poszło tym razem, spróbuj ponownie.'
    return;
  }

  question.innerText = data.question;

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

const buttons = document.querySelectorAll('.answer-btn');

for (const button of buttons) {
  button.addEventListener('click', (event) => {

    const answerIndex = event.target.dataset.answer;
    sendAnswer(answerIndex);

  })
}
// telefon do przyjaciela
const tipDiv = document.querySelector('#tip')

function handleFriendsAnswer(data) {
  tipDiv.innerText = data.text;
}


function callToAFriend() {
  fetch(`/help/friend`, {
      method: 'GET',
    })
    .then(resp => resp.json())
    .then(data => {
      handleFriendsAnswer(data);
    })
}


document.querySelector('#callToAFriend').addEventListener('click', callToAFriend);

// pół na pół
function handleHalfOnHalfAnswer(data) {
  if (typeof data.text === 'string') {
    tipDiv.innerText = data.text;
  } else {
    for (const button of buttons) {
      if (data.answersToRemove.indexOf(button.innerText) > -1) {
        button.innerText = ""
      }
    }
  }
}


function halfOnHalf() {
  fetch(`/help/half`, {
      method: 'GET',
    })
    .then(resp => resp.json())
    .then(data => {
      handleHalfOnHalfAnswer(data);
    })
}


document.querySelector('#halfOnHalf').addEventListener('click', halfOnHalf);

// pytanie do publiczości

function handleCrowdAnswer(data) {
  if (typeof data.text === 'string') {
    tipDiv.innerText = data.text;
  } else {
    data.chart.forEach((percent, index) => {
      buttons[index].innerText = `${buttons[index].innerText}:${percent}%`
    })
  }

}

function questionToTheCrowd() {
  fetch(`/help/crowd`, {
      method: 'GET',
    })
    .then(resp => resp.json())
    .then(data => {
      handleCrowdAnswer(data);
    })
}


document.querySelector('#questionToTheCrowd').addEventListener('click', questionToTheCrowd);