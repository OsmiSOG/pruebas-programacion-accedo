const myTextElement = document.getElementById('myText');
const answerElement = document.getElementById('answer');


function code(e) {
    const morseText = morseCode(myTextElement.value);
    answerElement.innerText = morseText;
}

function decode(e) {
    const plainText = morseDecode(myTextElement.value);
    answerElement.innerText = plainText;
}