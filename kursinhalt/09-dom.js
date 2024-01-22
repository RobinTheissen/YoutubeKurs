// buttonFunctionality.js
function toggle() {
    const buttonElements = document.querySelector('.js-subscribe-button');

    if (buttonElements.innerHTML === 'Subscribe') {
        buttonElements.innerHTML = 'Subscribed';
    } else {
        buttonElements.innerHTML = 'Subscribe';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.js-subscribe-button');
    subscribeButton.addEventListener('click', toggle);
});





function calculateFees() {
    const inputElement = document.querySelector('.js-input');
    let cost = parseFloat(inputElement.value);
    
    
    if (cost < 40) {
        cost = cost + 10
    }

    document.querySelector('.js-fees').innerHTML = `${cost}€`
}


//9b
function changeButton() {
    const buttonElements = document.querySelector('.button-9a');

    if (buttonElements.innerHTML === '9a') {
        buttonElements.innerHTML = 'done';
    } else {
        buttonElements.innerHTML = '9a';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.button-9a');
    subscribeButton.addEventListener('click', changeButton);
});


function changeButtons() {
    const buttonElements = document.querySelector('.button-9b');

    if (buttonElements.innerHTML === '9b') {
        buttonElements.innerHTML = 'fertig';
    } else {
        buttonElements.innerHTML = '9b';
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const subscribeButton = document.querySelector('.button-9b');
    subscribeButton.addEventListener('click', changeButtons);
});


function choose(option) {
    document.getElementsByClassName('fill').innerHTML = 'You chose: ' + option
}