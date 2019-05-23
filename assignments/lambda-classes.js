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

class Student extends Person{
    constructor(StudentObj){
        super(StudentObj);
        this.studentBack = StudentObj.previousBackground;
        this.studentClass = StudentObj.className;
        this.studentSubject = StudentObj.favSubjects;
    };

    listsSubjects(){
        console.log(studentSubject);
    };

    PRAssignment(subject){
        console.log(`${StudentObj.name} has submitted a PR for ${subject}.`);
    }

    sprintChallenge(subject){
        console.log(`${StudentObj.name} has begun a Sprint Challenge for ${subject}.`);
    }
}


// Project Manager =======================================================

class ProjectManager extends Instructor{
    constructor(PmObj){
        super(PmObj);
        this.pmClass = PmObj.gradeClassName;
        this.pmInst = PmObj.favInstructor;
    }

    standUp(channel){
        console.log(`${PmObj.name} announces to channel ${channel}, high time for stand up!`);
    }

    debugsCode(student, subject){
        console.log(`${PmObj.name} debugs ${student.name}'s code on ${subject}.`)
    };

}


// CONSTS ================================================================




// CONSOLE LOGS ==========================================================



