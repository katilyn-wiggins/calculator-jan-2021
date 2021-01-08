
import { sumWhat, subWhat, multWhat, divWhat } from './utils.js';

//Addition
const additionField = document.getElementById('input-1');
const additionField2 = document.getElementById('input-2');
// const addResults = document.getElementById('add-results');

//Subtraction 
const subField = document.getElementById('input-1');
const subField2 = document.getElementById('input-2');
// const subResults = document.getElementById('sub-results');

//Multiplication 
const multField = document.getElementById('input-1');
const multField2 = document.getElementById('input-2');
// const multResults = document.getElementById('mult-results');

//Division 
const divField = document.getElementById('input-1');
const divField2 = document.getElementById('input-2');
// const divResults = document.getElementById('div-results');


const allResults = document.getElementById('results');

//Addition
export function mySumClickHandler() {
    const fieldValue = additionField.valueAsNumber;
    const fieldValue2 = additionField2.valueAsNumber;

    const sum = sumWhat(fieldValue, fieldValue2);

    allResults.innerHTML = sum;

}

//Subtraction
export function mySubClickHandler() {
    const subValue = subField.valueAsNumber;
    const subValue2 = subField2.valueAsNumber;

    const sub = subWhat(subValue, subValue2);

    allResults.innerHTML = sub;

}

//Multiplication
export function myMultClickHandler() {
    const multValue = multField.valueAsNumber;
    const multValue2 = multField2.valueAsNumber;

    const mult = multWhat(multValue, multValue2);

    allResults.innerHTML = mult;

}

//Division
export function myDivClickHandler() {
    const divValue = divField.valueAsNumber;
    const divValue2 = divField2.valueAsNumber;

    const div = divWhat(divValue, divValue2);

    allResults.innerHTML = div;

}

// handleChange:function(e){
//     this.setState
// }