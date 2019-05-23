// CODE here for your Lambda Classes


// Person=================================================================

class Person{
    constructor(personObj){
        this.personName = personObj.name;
        this.personAge = personObj.age;
        this.personLocation = personObj.location;
    }
    speak(){
        return `Hello my name is ${personName}, I am from ${personLocation}!`;
    }
}


// Instuctor =============================================================

class Instructor extends Person{
    constructor(InstObj){
        super(InstObj);
        this.InstSpec = InstObj.specialty;
        this.InstLang = InstObj.favLanguage;
        this.InstPhrase = InstObj.catchPhrase;
    };
    demo(subject){
        console.log(`Today we are learning about ${subject}`)
    };

    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`)
    };
}


// Student================================================================




// Project Manager =======================================================




// CONSTS ================================================================




// CONSOLE LOGS ==========================================================



