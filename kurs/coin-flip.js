const random = Math.random();
const guess = 'tail'


    if (random < 0.5 && guess === 'tail') {
        result = 'You win!'
        console.log(`yeah ${guess} was right ,${result}`)
    }
    else if (random > 0.5 && guess === 'heads') {
        result = 'You win!'
        console.log(`yeah ${guess} was right ,${result}`)
    }
    else {
        console.log(`sorry ${guess} was wrong, you lose`)
    }


