// CODE here for your Lambda Classes


// Person=================================================================

class Person{
    constructor(personObj){
        this.personName = personObj.name;
        this.personAge = personObj.age;
        this.personLocation = personObj.location;
    }
    speak(){
        return `Hello my name is ${this.personName}, I am from ${this.personLocation}!`;
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
    demo(){
        return `Today we are learning about ${this.InstSpec}`;
    };

    grade(){
        return `${this.personName} receives a perfect score on ${this.InstLang}`;
    };
}


// Student================================================================

class Student extends Person{
    constructor(StudentObj){
        super(StudentObj);
        this.studentName = StudentObj.Name
        this.studentBack = StudentObj.previousBackground;
        this.studentClass = StudentObj.className;
        this.studentSubject = StudentObj.favSubjects;
    };

    listsSubjects(){
        return this.studentSubject;
    };

    PRAssignment(){
        return `${this.personName} has submitted a PR for ${this.studentSubject}.`;
    }

    sprintChallenge(){
        return `${this.personName} has begun a Sprint Challenge for ${this.studentClass}.`;
    }
}


// Project Manager =======================================================

class ProjectManager extends Instructor{
    constructor(PmObj){
        super(PmObj);
        this.pmClass = PmObj.gradeClassName;
        this.pmInst = PmObj.favInstructor;
    }

    standUp(){
        return `${this.personName} announces to channel ${this.pmClass}, high time for stand up!`;
    }

    debugsCode(student, subject){
        return `${this.personName} debugs ${student}'s code on ${subject}.`
    };

}


// CONSTS ================================================================



const Jerald = new Instructor({
    name: 'Jerald',
    favInstructor: 'Yoda',
    favSubjects: 'Minecraft, wow, eso',
    favLanguage: 'JavaScript, Python, Elmo',
    age: 45,
    subject: 'testing3',
    location: 'Bottom of the Sea',
    specialty: 'redux',
    catchPhrase: "Don't forget the cookies!",
    className: 'Mighty Many',
    gradeClassName: 'Web20',
    previousBackground: 'Jumanji Player',
});



const Kevin = new ProjectManager({
    name: 'Kevin',
    favInstructor: 'The Mighty Frank',
    favSubjects: 'JS, CSS, HTML, Python',
    favLanguage: 'Clingon',
    age: 'TBD',
    subject: 'testing2',
    location: 'In the room',
    specialty: 'Up, Up, Down, Down, Left, Left, Right, Up, Up, Down.',
    catchPhrase: "yeah man! EXactly",
    className: 'School of the Cat',
    gradeClassName: 'CS1',
    previousBackground: 'Power Ranger',
});


const Madison = new Student({
    name: 'Madison',
    favInstructor: 'Bible',
    favSubjects: 'Cookies, doughnuts, pancakes, French Toast.',
    favLanguage: 'elvish',
    age: 22,
    subject: 'testing',
    location: 'right behind you...',
    specialty: 'gamer/coder',
    catchPhrase: "There's always a bigger fish.",
    className: 'School of the Wolf.',
    gradeClassName: 'Homeschooled',
    previousBackground: 'King slayer and monster hunter.',
});



// CONSOLE LOGS ==========================================================


console.log(Madison.listsSubjects());

console.log(Madison.speak());

console.log(Jerald.grade());

console.log(Kevin.demo());

console.log(Madison.PRAssignment());

console.log(Madison.sprintChallenge());

console.log(Kevin.standUp());

console.log(Kevin.debugsCode('Madison', 'JavaScript'));






/*

*PLEASE READ*

As I was working on it, I did exactly what the 
work said to do, then I went back to play around 
with the concepts. I left my last console log 
similar to how the work said to do it to show that 
I do understand what I'm writing.
*/