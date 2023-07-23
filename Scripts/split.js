// Manipulando Strings e Arrays

// Separe um texto que contem espacos, em um novo array onde cada texto e uma posicao do array. Depois disso, transforme o array em um texto e onde eram espacos coloque _

let phrase = "Eu quero viver o Amor!"
let myArray = phrase.split(" ")
let phraseWithUnderscore = myArray.join("_")
console.log(phraseWithUnderscore.toLowerCase())