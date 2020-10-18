const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
    '': " "
};
function decode(expr) {
    letterArr = [];
    str = "";
    expr = expr.match(/.{10,10}/g);
    expr.forEach(expression => {
        expression = expression.match(/.{2,2}/g).map(letter => {
            str += (letter==="10")?".":"";
            str += (letter==="11")?"-":"";
        });
        letterArr.push(str);
        str=" "
    });

    letterArr.forEach(letter=>{
     str+=MORSE_TABLE[letter.trim()];
    })
 return str.trim();
}

module.exports = {
    decode
}