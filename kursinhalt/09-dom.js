// buttonFunctionality.js
function toggleSubscription() {
    const buttonElement = document.querySelector('.js-subscribe-button');

    if (buttonElement.innerHTML === 'Subscribe') {
        buttonElement.innerHTML = 'Subscribed';
    } else {
        buttonElement.innerHTML = 'Subscribe';
    }
}

// Event-Listener hinzufügen, der auf das Laden des DOMs wartet
document.addEventListener('DOMContentLoaded', function() {
    // Das Element mit der Klasse '.js-subscribe-button' auswählen
    const subscribeButton = document.querySelector('.js-subscribe-button');

    // Event-Listener für das Klick-Ereignis des ausgewählten Elements hinzufügen
    subscribeButton.addEventListener('click', toggleSubscription);
});
