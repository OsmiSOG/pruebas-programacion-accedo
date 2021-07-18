const alphabet = {
    a : '.-',
    h : '....',    
    o : '---',
    v : '...-',
    b : '-...',    
    i : '..',      
    p : '.--.',    
    w : '.--',
    c : '-.-.',    
    j : '.---',
    q : '--.-',
    x : '-..-',
    d : '-..',     
    k : '-.-',
    r : '.-.',     
    y : '-.--',
    e : '.',       
    l : '.-..',    
    s : '...',     
    z : '--..',
    f : '..-.',    
    m : '--',
    t : '-',
    g : '--.',     
    n : '-.',      
    u : '..-'
}

function morseCode (phrase) {
    let morse = [];
    if (phrase.search(/[^a-zA-Z\s]/g) === -1) {
        let words = phrase.trim().toLowerCase().split(' ');
        words.forEach(word => {
            let wordMorse = '';
            for (const letter of word) {
                wordMorse += `${alphabet[letter]} `;
            }
            morse.push(wordMorse.trim());
        });
        return morse.join('  ');
    } else {
        return 'Only alphabet characters are accepted';
    }
}

function morseDecode (morse) {
    let phrase = '';
    
    if (morse.search(/[^.\-\s]/g) !== -1) {
        return 'Only . and - are accepted';
    }

    let lettersMorse = morse.split(' ');
    let morefour = element => element.length > 4;
    if (lettersMorse.some(morefour)) {
        return 'Error in the sintax morse'
    }

    lettersMorse.forEach(letterMorse => {
        let letter = getLetterAlphabet(letterMorse);
        if (letter) {
            phrase += `${letter} `
        } else {
            phrase += letterMorse
        }
    });
 
    return phrase;
}

function getLetterAlphabet (letterMorse) {
    for (const letter in alphabet) {
        if (Object.hasOwnProperty.call(alphabet, letter)) {
            const srcLetterMorse = alphabet[letter];
            if (srcLetterMorse === letterMorse ) {
                return letter;
            }
        }
    }
    return false;
}

