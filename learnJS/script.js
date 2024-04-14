'use strict'

const inputArea = document.createElement('input');
inputArea.type = 'text';
const inputText = 'Введите ваше имя';
inputArea.value = inputText;
document.body.append(inputArea);

const okButton = document.createElement('button');
okButton.type = 'button';
okButton.innerText = 'OK';
document.body.append(okButton);

 okButton.addEventListener('click', function() {
      if (inputArea.value != inputText){
        alert(inputArea.value)
      }
  })


