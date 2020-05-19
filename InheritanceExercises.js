// Inheritance Exercises
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getInfo() {
        return `${this.firstName} ${this.lastName} is ${this.age} years old.`
    }
}
class Student extends Person {
    constructor(firstName, lastName, age, grades) {
        super(firstName, lastName, age);
        this.grades = grades;
    }
    averageGrade() {
        // let total = 0;                                            // using for loop
        // for (let i = 0; i < this.grades.length; i++) {
        //     total += this.grades[i];
        // }
        // return total / this.grades.length;
        let totalGrades = this.grades.reduce(function (total, currentValue) {             // using reduce
            return total + currentValue;
        });

        return totalGrades / this.grades.length;
    }
    getInfo() {
        return super.getInfo() + ` And their average grade is ` + this.averageGrade() + `.`;
    }
}
class Teacher extends Person {
    constructor(firstName, lastName, age, students) {
        super(firstName, lastName, age);
        this.students = students;
    }
    getStudentAverageGrade() {
        // let totalGrades = 0;
        // for (let i = 0; i < this.students.length; i++) {
        //     let student = this.students[i];
        //     let avgGrade = student.getAverageGrade();
        //     totalGrades += avgGrade;
        // }

        let totalGrades = this.students.reduce(function (total, student) {
            let studentAvg = student.averageGrade();
            return total + studentAvg;
        }, 0);
        return totalGrades / this.students.length;
    }
}
//let myArrOfGrades = [21,99,76];
let myPerson = new Person("Aileen", "Gallacher", 37, [21, 18, 31, 99]);
let myStudent = new Student("Ayla", "Gallacher", 7, [87, 68, 78, 91])
let myTeacher = new Teacher("Aileen", "Gallacher", 37, [
new Student("Ayla", "Gallacher", 7, [21, 78, 98, 99, 100]),
new Student("Wynter", "Pedreira", 7, [54, 78, 32, 23, 11]),
new Student("Yowie", "Manahan", 8, [66, 83, 57, 24, 86]),
new Student("Aubree", "Gallacher", 5, [90, 99, 87, 89, 100])]);

// console.log(myPerson.myArrOfGrades);
// console.log(myPerson);
// console.log(myPerson.getInfo());
// console.log(myStudent);
// console.log(myStudent.averageGrade());
// console.log(myStudent.getInfo());
console.log(myTeacher);

console.log(myTeacher.getStudentAverageGrade());


