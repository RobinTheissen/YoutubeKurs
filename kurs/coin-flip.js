function playGame(guess) {
    const randomNumber = Math.random();
    const result = randomNumber < 0.5 ? 'heads' : 'tails';

    console.log(guess === result ? 'You win!' : 'You lose!');
  }