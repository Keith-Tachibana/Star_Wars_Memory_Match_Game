const mainElement = document.getElementById("gameCards");
const modalElement = document.querySelector('.modal');
const resetButton = document.querySelector('.reset');
const gamesScore = document.querySelector('.games-score');
const attemptsScore = document.querySelector('.attempts-score');
const accuracyScore = document.querySelector('.accuracy-score');
const shuffleButton = document.querySelector('.shuffle-button');
const closeButton = document.querySelector('.close');
const timerScore = document.querySelector('.timer-score');
const startButton = document.querySelector('.start');

var firstCardClicked, secondCardClicked, firstCardClasses, secondCardClasses, maxMatches, matches, gamesPlayed, attempts, accuracy, totalSeconds;

var cardDeck = ['js-logo', 'js-logo', 'html-logo', 'html-logo', 'github-logo', 'github-logo', 'docker-logo', 'docker-logo', 'css-logo', 'css-logo', 'mysql-logo', 'mysql-logo', 'node-logo', 'node-logo', 'php-logo', 'php-logo', 'react-logo', 'react-logo'];

accuracy = 0;
attempts = 0;
maxMatches = 9;
matches = 0;
gamesPlayed = 0;
totalSeconds = 0;

mainElement.addEventListener('click', handleClick);
shuffleButton.addEventListener('click', shuffleCards);
resetButton.addEventListener('click', shuffleCards);
closeButton.addEventListener('click', function() {
  modalElement.classList.add("hidden");
})
startButton.addEventListener('click', startGame);

function handleClick(event) {
  var clickedTarget = event.target;

  if (clickedTarget.className.indexOf("card-back") === -1) {
    return;
  }

  clickedTarget.classList.add("hidden");

  if (!firstCardClicked) {
    firstCardClicked = clickedTarget;
    firstCardClasses = firstCardClicked.previousElementSibling.className;
  } else {
    secondCardClicked = clickedTarget;
    secondCardClasses = secondCardClicked.previousElementSibling.className;
    mainElement.removeEventListener('click', handleClick);
    if (firstCardClasses === secondCardClasses) {
      attempts += 1;
      attemptsScore.textContent = attempts;
      mainElement.addEventListener('click', handleClick);
      firstCardClicked = null;
      secondCardClicked = null;
      matches += 1;
      accuracy = ((matches / attempts) * 100).toFixed(2);
      accuracyScore.textContent = accuracy+'%';
      if (matches === maxMatches) {
        modalElement.classList.remove("hidden");
        gamesPlayed += 1;
        gamesScore.textContent = gamesPlayed;
      }
    } else {
      attempts += 1;
      attemptsScore.textContent = attempts;
      accuracy = ((matches / attempts) * 100).toFixed(2);
      accuracyScore.textContent = accuracy+'%';
      setTimeout(function () {
        firstCardClicked.classList.remove("hidden");
        secondCardClicked.classList.remove("hidden");
        mainElement.addEventListener('click', handleClick);
        firstCardClicked = null;
        secondCardClicked = null;
      }, 1500);
    }
  }
}

function resetCards () {
  mainElement.innerHTML = '';
  var newCardDeck = cardDeck.sort(function() { return 0.5-Math.random() });
  for (var i = 0; i < newCardDeck.length; i++) {
    var newCardItem = document.createElement('div');
    newCardItem.classList.add("card-item", "col-2");
    var newCardFront = document.createElement('div');
    newCardFront.className = "card-front";
    newCardFront.classList.add(newCardDeck[i]);
    var newCardBack = document.createElement('div');
    newCardBack.classList.add("card-back");
    newCardItem.append(newCardFront, newCardBack);
    mainElement.appendChild(newCardItem);
  }
}

function shuffleCards () {
  matches = 0;
  attempts = 0;
  attemptsScore.textContent = attempts;
  accuracy = "0.00";
  accuracyScore.textContent = accuracy + '%';
  var cardsHidden = document.querySelectorAll('.hidden');
  for (var i = 0; i < cardsHidden.length; i++) {
    cardsHidden[i].classList.remove("hidden");
  }
  modalElement.classList.add("hidden");
  resetCards();
}

function startGame () {
  var interval = setInterval(function() {
    ++totalSeconds;
    var minutes = Math.floor(totalSeconds/60);
    var seconds = totalSeconds - (minutes*60);
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timerScore.innerHTML = minutes + ":" + seconds;
  }, 1000);
  if (matches === maxMatches) {
    clearInterval(interval);
  }

}
