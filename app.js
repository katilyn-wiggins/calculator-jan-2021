// import functions and grab DOM elements
const welcomeElement = document.getElementById('welcome');
const myButton = document.getElementById('banana-button');
const fruitsElement = document.getElementById('whats-that');

const input = document.getElementById('user-input');


// initialize state

// set event listeners to update state and DOM

myButton.addEventListener('click', () => {
    console.log('more bananas!!');

    fruitsElement.style.background = 'yellow';
    fruitsElement.style.color = 'orange';
    fruitsElement.textContent = 'bananas - thats the code word Jimmy';

    welcomeElement.textContent = input.Value;


});

//Banana Ipsum by Jed Hartman https://www.kith.org/jed/2001/09/25/immortal-bananas/
// console.log('Hello World!')

//add a button
//when the user clicks the button, change the style and text content of the welcomeElement

