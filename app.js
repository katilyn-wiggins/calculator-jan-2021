// import functions and grab DOM elements
//Addition
const additionField = document.getElementById('add-input-1');
const additionField2 = document.getElementById('add-input-2');
const addButton = document.getElementById('add-button');
const addResults = document.getElementById('add-results');
//Subtraction
const subField = document.getElementById('sub-input-1');
const subField2 = document.getElementById('sub-input-2');
const subButton = document.getElementById('sub-button');
const subResults = document.getElementById('sub-results');
//Mult
const multField = document.getElementById('mult-input-1');
const multField2 = document.getElementById('mult-input-2');
const multButton = document.getElementById('mult-button');
const multResults = document.getElementById('mult-results');
//Div
const divField = document.getElementById('div-input-1');
const divField2 = document.getElementById('div-input-2');
const divButton = document.getElementById('div-button');
const divResults = document.getElementById('div-results');

// initialize state

// set event listeners to update state and DOM

//Addition
addButton.addEventListener('click', () => {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;
    // console.log(fieldValue, fieldValue2)
    const sum = fieldValue + fieldValue2;

    // console.log(sum);

    addResults.innerHTML = sum;

});

//Subtraction
subButton.addEventListener('click', () => {
    const subValue = subField.valueAsNumber;
    const subValue2 = subField2.valueAsNumber;
    // console.log(fieldValue, fieldValue2)
    const sub = fieldValue - fieldValue2;

    // console.log(sum);

    subResults.innerHTML = sub;

});


//Multiplication
multButton.addEventListener('click', () => {
    const multValue = multField.valueAsNumber;
    const multValue2 = multField2.valueAsNumber;
    // console.log(fieldValue, fieldValue2)
    const mult = multValue * multValue2;

    // console.log(sum);

    multResults.innerHTML = mult;

});

//Division
divButton.addEventListener('click', () => {
    const divValue = divField.valueAsNumber;
    const divValue2 = divField2.valueAsNumber;
    // console.log(fieldValue, fieldValue2)
    const div = divValue + divValue2;

    // console.log(sum);

    divResults.innerHTML = div;

});





