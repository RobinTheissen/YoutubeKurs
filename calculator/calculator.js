let calculation = localStorage.getItem('calculation') || '';

      function updateCalculation(value) {
        calculation += value;
        console.log(calculation);
        localStorage.setItem('calculation', calculation);
        showCalculation()
      }

function saveCalculation() {
    localStorage.setItem('calculation', calculation);
}

function showCalculation() {
    document.getElementById('result').innerHTML = calculation
}

window.onload = function() {
    showCalculation()
}