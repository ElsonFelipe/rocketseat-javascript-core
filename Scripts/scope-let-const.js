// const e let são locais e funcionam no escopo onde foi criada
const y = 1;

{
   const y = 0
    console.log('> existe y? ', y)
}

console.log('> existe y depois do bloco? ', y)