const findVowels = (str) => {
    if (typeof str !== 'string') {
        return 'Passed argument is not a string'
    }
    if (str.length === 0) {
        return 'String is empty'
    }
    let regExp = /[aeiou]/gi
    let mathes = str.match(regExp)
   return mathes ? mathes.length : 'String does not contain vowels'
};
module.exports = findVowels;


