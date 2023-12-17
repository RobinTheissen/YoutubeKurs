let score = JSON.parse(localStorage.getItem('score')) || {
  wins: 0,
  losses: 0
}

function playGame(guess) {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    guess === result ? score.wins += 1 : score.losses += 1
    console.log(guess === result ? 'You win!' : 'You lose!');
    console.log(score)

    localStorage.setItem('score', JSON.stringify(score))
  }