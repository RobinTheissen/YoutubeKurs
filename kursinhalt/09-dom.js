// Subscribe Button
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


//shopping calculator
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


// 9c
function choose(option) {
    document.getElementById('fill').innerHTML = 'You chose: ' + option
}


// 9d
function showValue() {
    let inputValue = document.getElementById('meinInput').value
    let showDiv = document.getElementById('show')
    showDiv.innerHTML = 'You entered: ' + inputValue
}


// 9e
document.addEventListener('keyup', function(event){
        event.preventDefault();
        showValue()
})