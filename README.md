<h1 align="center"> Node.js </h1>
<h4 align="center">
No imites, entiende
</h4>

## V8

V8 es el motor de código abierto de alto rendimiento de JavaScript y WebAssembly de Google, escrito en C ++. Se usa en Chrome y en Node.js, entre otros. Implementa [ECMAScript](https://tc39.es/ecma262/) y [WebAssembly](https://webassembly.github.io/spec/core/) , y se ejecuta en Windows 7 o posterior, macOS 10.12+ y sistemas Linux que usan procesadores x64, IA-32, ARM o MIPS. V8 puede ejecutarse de forma independiente o puede integrarse en cualquier aplicación C ++.

## Repaso JavaScript

### Expresiones

Es cualquier cosa que produzca un valor primitivo...

```javascript
'Hi' // Esto es una exprecsón
1 // Esto es una expresión
1.1 // Esto es una expresión
true // Esto es una expresión
function() {} // Esto es una expresión
```

### Tipos de datos

- Object: es el padre de los demas tipos, esto quiere decir que los tipos heredan de aquí.
- String: cadenas de texto representados por: "" '' ``.
- Number: familia de números enteros.
- Boolean: true o false.
- Array, Set, Map: colecciones que se almacenan de forma secuencial que se puede acceder a ellos por un índice.
- Function: tipo de función que realiza una acción.
- Symbol: es un tipo de datos cuyos valores son únicos e immutables.
- Undefined: valor no ha sido definido.
- Null: Ausencia de valor.

### Variables

Una variable está formada por un espacio en el sistema de almacenaje y nombre simbólico que esta asociado a dicho espacio.

Las variables persisten en la memoria RAM.

```javascript
var catName; // versiones anteriores
let myAge = 25;
const PI = 3.1416

const greet = () => {};
greet()
```

### Operadores lógicos

```javascript
// ==
// >
// <
// >=
// <=
// &&
// ||
let color = 'blue'
let isBlue = color === 'blue'
let edad = 18
let mayorEdad = edad >= 18
console.log(mayorEdad)
```

### Condicionales

```javascript
const age = 45
const calification = 80
const operation = 'add'
let n1 = 80
let n2 = 60

if (age >= 18 ) {
    console.log('es meyor de edad')
} else {
    console.log('es menor de edad')
}

if (calification >= 90) {
    console.log('A')
} else if (calification >= 80 && calification < 90) {
    console.log('B')
} else if (calification >= 70 && calification < 80) {
    console.log('C')
} else {
    console.log('Reprobado')
}

switch (operation) {
    case 'add':
        console.log(n1 + n2)
        break
    case 'subs':
        console.log(n1 - n2)
        break
	default: 'operación no valida'
}
```

### Objetos

Se conoce tambien como json, estan representados por un key y una value.

Podemos acceder al objeto de manera:

- Bracket notation. ejem object['key']
- Dot notation. ejem object.key

```javascript
const person = {
    name: 'Hugo',
    lastName: 'Roca',
    isStudent: true,
    getFullName () {
        return `${this.name} ${this.lastName}`
    }
}
console.log(person['name'])
console.log(person.name)
console.log(person.getFullName())
```

También podemos llevarlo a clase.

```javascript
class Person {
    constructor (name) {
        this.name = name
    }
    
    getName () {
        return this.name
    }
}

const person = new Person('Hugo')
console.log(person.getName())
```

### Colecciones

```javascript
// ARRAYS
const fruits = ["apple", "melon", "mango"]
console.log(fruits[1]) // melon
console.log(fruits[1]) // apple
// -
const fruits = ["apple", "melon", "mango", () => { console.log("Hola") }]
console.log(fruits[3]()) // Hola

// SETS
const numbers = new Set()
numbers.add(5) // no almacena valores repetidos
numbers.add(6)

// MAPS
const students = new Map()
students.set("one", "Hugo")
console.log(students.get("one"))
```

### Bucles

```javascript
const fruits = ["apple", "melon", "mango"]
console.log(fruits(0)) // bad
console.log(fruits(1)) // bad
console.log(fruits(2)) // bad

for (let i = 0; i <= fruits.length; i++) {
    console.log(fruits[i])
}

for (const fruit of fruits) {
    console.log(fruit)
}

const people = [{ name: "hugo1" }, { name: "hugo2" } ]
for (const person in people) {
    console.log(people[person].name)
}

let iterator = 0
while (iterator < people.length) {
    console.log(people[iterator])
    iterator++
}

do {
    console.log(people[iterator])
    iterator++
} while (iterator < people.length)
```

### Funciones

```javascript
function greet(name) {
    console.log("hi" + name)
}
greet("hugo") // hi hugo

function calc(n1, n2) {
    console.log(n1 + n2)
}
calc(1, 2) // 3

const greetMe = (name) => console.log(`Hola ${name}`)
greetMe("hugo") // Hola hugo
```

### Callbacks

#### Callbacks

```javascript
setTimeout(function, time, arg?)
setTimeout(() => {
	console.log(`Hello word`)
}, 2000)

// Ejemplo
function calculate(n1, n2, operation) {
    return operation(n1, n2)
}
function add(n1, n2) {
    return n1 + n2
}
const result = calculate(1, 8, add)
console.log(result) // 9
```

- **Ventajas**
  - Simple: son conceptualmente simples. Pasas una función que quieres que se ejecute después.
  - Universal: corren donde se, no requiere de una transpilador.
- **Desventajas**
  - Composición tosca: las llamadas anidadas pueden llevar a realizar un código con aún mas anidaciones dentro (callback hell).
  - Flujo poco intuitivo: requieres que te muevas dentro del código para comprender el flujo del mismo.

Aquí veremos un ejemplo mas completo:

```javascript
const booksDb = [
    {
        id: 1,
        title: "web development with nodejs"
    },
    {
        id: 2,
        title: "the pragmatic programmer"
    }
]

function getBookById(id, callback) {
    const book = booksDb.find(book => book.id === id)
    if (!book) {
        // el primer parametro siempre es error
        const error = new Error()
        error.message = "book not found!"
		return callback(error)
    }
    
    callback(null, book)
}

getBookById(2, (error, book) => {
    if (error) return console.log(error.message)
    return console.log(book)
})
```

#### Callbacks hell

Es una mala practica el cual se puede solucionar con funciones async/await. Aquí un ejemplo:

```javascript
const booksDb = [
    {
        id: 1,
        title: "web development with nodejs",
        authorId: 1
    },
    {
        id: 2,
        title: "the pragmatic programmer",
        authorId: 2
    }
]

const authorsDb = [
    {
        id: 1,
        name: "Robert C. Martin"
    },
    {
        id: 2,
        name: "Steve Forest"
    }
]

function getBookById(id, callback) {
    const book = booksDb.find(book => book.id === id)
    if (!book) {
        // el primer parametro siempre es error
        const error = new Error()
        error.message = "book not found!"
		return callback(error)
    }
    
    callback(null, book)
}

function getAuthorById(id, callback) {
    const author = authorsDb.find(author => author.id === id)
    if (!author) {
        // el primer parametro siempre es error
        const error = new Error()
        error.message = "author not found!"
		return callback(error)
    }
    
    callback(null, author)
}

getBookById(2, (err, book) => {
    if (err) return console.log(err.message)
    getAuthorById(book.authorId, (err, author) => {
        if (err) return console.log(err.message)
        console.log(`This book ${book.title} was written by ${author.name}`)
    })
    return console.log(book)
})
```

### Promesas

Es un objeto que representa la terminación o el fracaso eventual de una operación asíncrona. Esencialmente una promesa es un objeto devuelto al cual se adjuntan funciones callback, en lugar de pasar callbacks a una función.

```javascript
// tienen dos parametros resolver y reject
function executor(resolve, reject) {
    resolve() // si todo funciona bien
    reject() // si falla
}
const promise = new Promise(executor)
// tiene 3 métodos:
// .then() llega la data, siempore y cuando el metodo se haya invocado
// .catch() llega el error
// .finaly() siempre pasa por aqui
```

| Ventajas                                                     | Desventajas                                                  |
| :----------------------------------------------------------- | :----------------------------------------------------------- |
| - Fácilmente enlazable: se pueden enlazar fácilmente para manejar flujos asíncronos complejos sin tener que recurrir a mas anidaciones como se requieren en callbacks. | - Excepciones que desaparecen: Se debe declarar .catch() para manejar errores en lugar del tradicional try/catch. |
| - Poderoso: proporcionan una cantidad excepcional para componer operaciones asíncronas complejas. |                                                              |

Aquí un ejemplo de promesas usando el ejemplo de callbaks anterior:

```javascript
const booksDb = [] // datos en ejemplos anteriores
const authorsDb = [] // datos en ejemplos anteriores

function getBookById(id) {
    return new Promise((resolve, reject) => {
        const book = booksDb.find(book => book.id === id)
        if (!book) {
            const error = new Error()
            error.message = "book not found!"
            reject(error)
        }

        resolve(book)
    })
}

function getAuthorById(id) {
    return new Promise((resolve, reject) => {
        const author = authorsDb.find(author => author.id === id)
        if (!author) {
            const error = new Error()
            error.message = "author not found!"
            reject(error)
        }

        resolve(author)
    })
}

getBookById(1)
    .then(book => { 
        return getAuthorById(book.id) 
    })
    .then(author => {
        console.log(author)
    })
    .catch(err => {
        console.log(err.message)
    })
```



> **Usa promesas en vez de callbacks para mantener el standard. Ten cuidado en caer en el promise hell por la excesiva anidación.**



### Async/Await

| Async                                                        | Await                                                        |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| Cuando se llama a una función **async**, esta devuelve un elemento **Promise**. Cuando la función **async** devuelve un valor, **promise** se resolverá con el valor devuelto. Si la función **async** genera una excepción o algún valor, **promise** se rechazará con el valor generado. | La expresión **await** provoca que la ejecución de una función **async** sea pausada hasta que la **promise** sea terminada o rechazada, y regresa a la ejecución de la función **async** después del termino. Al regreso de la ejecución, el valor de la expresión **await** es la regresada por una promesa terminada |

Vamos a trabajar en el mismo ejemplo de callbacks:

```javascript
const booksDb = [] // datos en ejemplos anteriores
const authorsDb = [] // datos en ejemplos anteriores

async function getBookById(id) {
    const book = booksDb.find(book => book.id === id)
    if (!book) {
        const error = new Error()
        error.message = "book not found!"
        throw error
    }

    return book
}

async function getAuthorById(id) {
    const author = authorsDb.find(author => author.id === id)
    if (!author) {
        const error = new Error()
        error.message = "author not found!"
        throw error
    }
    return author
}

async function main() {
    try {
        const book = await getBookById(1)
        const author = await getAuthorById(book.authorId)
        console.log(`This book ${book.title} was written by ${author.name}`)
    } catch (error) {
        console.log(error.message)
    }
}

main()
```


> **Cuando utilizas async y await tienes un código muchas más limpio y sobre todo un mejor control de las excepciones. De ser posible, siempre utiliza async y await.**




## Notas

- **CLI**: es un método que permite a los usuario dar instrucciones a algún programa informático por medio de una línea de texto simple:
  - Linux: Bash
  - Mac: Terminal
  - Windows: Command Promt
- **Código de máquina**: a veces llamado, lenguaje de máquina, estos son lenguajes de programación hablados por procesadores de computadora.
- **ECMA**: se trata de un acrónimo es "European Computer Manufacturers Association (ECMA)", una organización internacional basada en membresías de estándares para la comunicación y la información.
- **ECMAScript**: estándares por los cuales se rige de JavaScript.
- **Engine**: es un programa que convierte código javascript en algo que le procesador pueda entender.
- **Callback**: es una función "X" que se usa como argumento de otra función "Y". Cuando se llama a  "Y", esta ejecuta "X".
