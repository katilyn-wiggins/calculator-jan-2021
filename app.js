// import functions and grab DOM elements

// initialize state

// set event listeners to update state and DOM

// console.log('Hello World!')


//add a button
//when the user clicks the button, change the style and text content of the welcomeElement


const welcomeElement = document.getElementById('welcome')
console.log(welcomeElement);

const myButton = document.getElementById('change-button');

myButton.addEventListener('click', () => {
    console.log('they clicked!!');
    welcomeElement.style.color = 'magenta';
    welcomeElement.style.background = 'lightgreen';

    welcomeElement.textContent = 'I CAN DO ANYTHING!!';
});


