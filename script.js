const playerChoiceElement = document.querySelector('#player-choice span');
const computerChoiceElement = document.querySelector('#computer-choice span');
const resultMessageElement = document.querySelector('#result-message');

const choices = ['Kő', 'Papír', 'Olló'];

document.getElementById('rock').addEventListener('click', () => playGame('Kő'));
document.getElementById('paper').addEventListener('click', () => playGame('Papír'));
document.getElementById('scissors').addEventListener('click', () => playGame('Olló'));

function playGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];

    playerChoiceElement.textContent = playerChoice;
    computerChoiceElement.textContent = computerChoice;

    const result = getResult(playerChoice, computerChoice);
    resultMessageElement.textContent = result;
}

function getResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) {
        return "Döntetlen!";
    }

    if (
        (playerChoice === 'Kő' && computerChoice === 'Olló') ||
        (playerChoice === 'Papír' && computerChoice === 'Kő') ||
        (playerChoice === 'Olló' && computerChoice === 'Papír')
    ) {
        return "Nyertél!";
    } else {
        return "Vesztettél!";
    }
}