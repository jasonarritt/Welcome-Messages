const output = document.querySelector('.output');
const button = document.querySelector('button');
const inputName = document.querySelector('input');

function showMessage() {
  output.innerHTML = `Hello ${inputName.value}. Have a nice day!`;
}

button.addEventListener('click', showMessage);
