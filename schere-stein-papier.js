function schereSteinPapier() {

    const randomNr = Math.random();

    let computerMove = '';

    if (randomNr >= 0 && randomNr < 1/3){
        let computerMove = 'Schere';
        console.log(computerMove);
    }

    else if (randomNr >= 1/3 && randomNr < 2/3){
        let computerMove = 'Stein';
        console.log(computerMove);
    }

    else if (randomNr >= 2/3 && randomNr < 1){
        let computerMove = 'Papier';
        console.log(computerMove);
    }

    


    let result = '';

    if (computerMove === 'Schere'){
        result = 'Tie.'
    }

    else if(computerMove === 'Stein'){
        result = 'you loose'
    }

    else if(computerMove === 'Paper'){
        result = 'you won'
    }

    alert(`You picked rock. Computer picked ${computerMove} ${result}`);
}
