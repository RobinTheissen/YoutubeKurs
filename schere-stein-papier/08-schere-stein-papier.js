let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0,
};
//definiert den score


document.addEventListener('DOMContentLoaded', function() {
    const scoreElement = document.querySelector('.js-score');
    const scoreText = `${score.wins} Gewonnen, ${score.losses} Verloren, ${score.ties} Unentschieden.`;
    scoreElement.textContent = scoreText;
});
//Gibt den score auf der Webpage zurück


function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Schere') {
        if (computerMove === 'Schere'){
            result = 'UNENTSCHIEDEN';
        }
        else if(computerMove === 'Stein'){
            result = 'VERLOREN';
        }
        else if(computerMove === 'Papier'){
            result = 'GEWONNEN';
        }
    }
    else if (playerMove === 'Stein') {
        if (computerMove === 'Stein'){
            result = 'UNENTSCHIEDEN';
        }
        else if(computerMove === 'Papier'){
            result = 'VERLOREN';
        }
        else if(computerMove === 'Schere'){
            result = 'GEWONNEN';
        }
    }
    else if (playerMove === 'Papier') {
        if (computerMove === 'Stein'){
            result = 'GEWONNEN';
        }
        else if(computerMove === 'Papier'){
            result = 'UNENTSCHIEDEN';
        }
        else if(computerMove === 'Schere'){
            result = 'VERLOREN';
        }
    }

    if (result === 'GEWONNEN') {
        score.wins += 1;
    } else if (result === 'VERLOREN') {
        score.losses += 1;
    } else if (result === 'UNENTSCHIEDEN'){
        score.ties += 1;
    }

    localStorage.setItem('score', JSON.stringify(score))

    alert(`Du hast ${playerMove} gewählt. Gegner hat ${computerMove} gewählt. ${result}`)
    console.log(score)
}


function pickComputerMove() {

    const randomNr = Math.random();
    
    if (randomNr >= 0 && randomNr < 1/3){
        computerMove = 'Schere';
    }

    else if (randomNr >= 1/3 && randomNr < 2/3){
        computerMove = 'Stein';
    }

    else if (randomNr >= 2/3 && randomNr < 1){
        computerMove = 'Papier';
    }
    return computerMove;
}
