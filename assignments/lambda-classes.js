// CODE here for your Lambda Classes

const fred = new Instructor({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the homies`
  });

class Person {
    constructor(baseClass){
        this.name = baseClass.name;
        this.age = baseClass.age;
        this.location = baseClass.location;
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}.`;
    }
}

console.log(fred.name);