// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input_button = document.getElementById("copy");
const input_text1 = document.getElementById("userInput1");
const output1 = document.getElementById("output");

// add an event listener on the target element
input_button.addEventListener("click", copyInput1);

// callback function to handle event
function copyInput1() {
  output1.innerHTML = input_text1.value;
}

// Exercise #2:
// when the user enters input text, copy the user input to the output area

// fetch JavaScript objects representing specific elements in the DOM
const input_text2 = document.getElementById("userInput2");
let inputEventSection = document.getElementById("inputEventExample");
let element = document.createElement("div");
element.setAttribute("class", "output");
inputEventSection.append(element);

// add an event listener on the target element
input_text2.addEventListener("input", copyInput2);

// callback function to handle event
function copyInput2() {
  element.innerHTML = input_text2.value;
}
