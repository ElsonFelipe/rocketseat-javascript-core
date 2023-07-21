# Dados

* Gramática
    * Elementos da linguagem e suas combinações
    * A arte de falar e escrever corretamente

* Vocabulário
    * Conjunto de termos e expressões
    * Agrupamento de palavras 

* Precisamos saber como escrever
* Precisamos saber os significados
* Precisamos continuar aprendendo, para crescer o vocabulário.

## Como vai ser a dinâmica do aprendizado ?

* Conceitos e escrita

> Vamos aprender os tipos de dados mais utilizados na linguagem
    * Você sabia que é possível aprender 80% de uma lingua nova, com cerca de 20% de vocabulário? (até menos)

## Tipos de dados

Conforme o ECMAScript standard temos 9 tipos de dados:

* Data types
    * Primitive / Primitive value
    * Structural
    * Structural Primitive

## Primitivos

* String
* Number
* Boolean
* undefined
* Symbol
* BigInt

## Estruturais

* Object
    * Array
    * Map
    * Set
    * Date
    * ...
* Function

## Primitivo Estrutural / Structural Root Primitive

* null

##  Exemplos

### String

* Cadeia de caracteres

    "" -- aspas duplas
    '' -- aspas simples
    `` -- template literals ou template strings (permite interpolação)

```js
    console.log("Mayk") // duplas se for usar as simples dentro e vice-versa
```

### Number

* Números

    33 -- inteiros
    12.5 -- reais
    NaN -- Not a Number
    Infinity -- infinito (funciona somente com o I maiusculo)

```js
    console.log(12.5 + 12)
```

### Boolean

* Somente 2 valores

    true -- verdadeiro
    false -- falso

```js
    console.log(true)
```

### Vazio

* undefined
    * indefinido

* null
    * nulo
    * objeto que não possui nada dentro
    * diferente de indefinido

```js
    console.log(null === undefined) // false
```
 
 ### Object 

* Objeto
* Propriedades / Atributos
* Funcionalidades / Métodos

 ```js
    console.log({
        nome: "Elson",
        idade: 29,
        andar: function() {
            console.log('andar')
        }
    })
 ```

 ### Array

* Vetores
* Uma lista
* Agrupamento de dados

```js
    console.log(["Leite", "Ovos", 2, 3])
```