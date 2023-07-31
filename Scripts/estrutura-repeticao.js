// Estrutura de repetição

// for

// break - para a execução do loop
// continue - pula a execução do momento


/* for (let i = 10; i > 0; i--) {
  if (i === 5) {
    continue;    
  }
  console.log(i)  
} */

// while

/* let i = 49586394505;
while(i > 10) {
  console.log(i)

  i /= 35;
} */

// for...of

/* let name = 'Elson' //char
let names = ['João', 'Paulo', 'Pedro'] //name

for (let name of names) {
  console.log(name)
} */

// for...in

let person = {
  name: 'Jhon',
  age: 30,
  weight: 88.6
}

for(let property in person) {
  console.log(property)
  console.log(person[property])
}