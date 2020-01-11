// const person = require('./person')
// console.log(person)
// console.log(person.name)

// const Person = require('./personClass');
// let person1 = new Person('Soumya Sen', 26);
// person1.greeting();

const Logger = require('./Logger')

const logger = new Logger();

logger.on('message', data => console.log('Called listener ',data));

logger.log('Hello World!')