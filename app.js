import { mySumClickHandler, mySubClickHandler, myMultClickHandler, myDivClickHandler } from './handlers.js';

const addButton = document.getElementById('add-button');
const subButton = document.getElementById('sub-button');
const multButton = document.getElementById('mult-button');
const divButton = document.getElementById('div-button');

addButton.addEventListener('click', mySumClickHandler);
subButton.addEventListener('click', mySubClickHandler);
multButton.addEventListener('click', myMultClickHandler);
divButton.addEventListener('click', myDivClickHandler);



