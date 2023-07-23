// Manipulando Arrays

let techs = ["html", "css", "js"]

// adicionar um item no fim

techs.push("nodejs")

// adicionar no comeco

techs.unshift("sql")

// remover do fim

//techs.pop()

// remover do comeco

//techs.shift()

// pegar somente alguns elementos do array

//console.log(techs.slice(1,3))

// remover 1 ou mais items em qualquer posicao do array

//techs.splice(1,2)

// encontrar a posicao de um elemento no array

let index = techs.indexOf('html')
techs.splice(index, 1)

console.log(techs)