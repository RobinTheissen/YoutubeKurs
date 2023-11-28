function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = '';

    if (playerMove === 'Schere') {
        if (computerMove === 'Schere'){
            result = 'Unentschieden';
        }
        else if(computerMove === 'Stein'){
            result = 'Verloren';
        }
        else if(computerMove === 'Papier'){
            result = 'Gewonnen';
        }
    }
    else if (playerMove === 'Stein') {
        if (computerMove === 'Stein'){
            result = 'Unentschieden';
        }
        else if(computerMove === 'Paper'){
            result = 'Verloren';
        }
        else if(computerMove === 'Schere'){
            result = 'Gewonnen';
        }
    }
    else if (playerMove === 'Papier') {
        if (computerMove === 'Stein'){
            result = 'Gewonnen';
        }
        else if(computerMove === 'Papier'){
            result = 'Unentschieden';
        }
        else if(computerMove === 'Schere'){
            result = 'Verloren';
        }
    }
    alert(`Du hast ${playerMove} gewählt. Gegner hat ${computerMove} gewählt. ${result}.`)
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
