
let answer = document.getElementById('answer');
let inputArray = document.getElementById('inputArray');
let calculateButton = document.getElementById('calculateButton');

calculateButton.addEventListener('click', function() {
    let inputValues = inputArray.value.split(',').map(Number); 
    let sum = inputValues.reduce((total, currentValue) => total + currentValue, 0);
    answer.innerHTML = `${sum} is the sum of the array`;
});

