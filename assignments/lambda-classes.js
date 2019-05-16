// CODE here for your Lambda Classes


// class Person===================================================
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

//  CLASSES instuctor ==========================================

class Instructor {
    constructor(baseInst) {
        super(baseInst)
        
        this.specialty = baseInst.specialty;
        this.favLanguage = baseInst.favLanguage;
        this.catchPhrase = baseInst.catchPhrase;
    }
    demo(subject){
        return `Today we are learning about ${subject}`;
    }
    grade(student, subject) {
        `${student.name} receives a perfect score on ${subject}`
    }
}

class Student extends Person{
    constructor(baseStudent) {
        super(baseStudent)
        
        this.previousBackground = baseStudent.previousBackground;
        this.className = baseStudent.className;
        this.favSubjects = baseStudent.favSubjects;
    }
}


// CONSTS =========================================================













// const fred = new Instructor({
//     name: 'Fred',
//     location: 'Bedrock',
//     age: 37,
//     favLanguage: 'JavaScript',
//     specialty: 'Front-end',
//     catchPhrase: `Don't forget the homies`
// });



let dog = "woof";




// CONSOLE LOGS =================================================

// console.log(fred.location);
console.log(dog);