class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName= lastName;
    this.age = age;
    this.gender = gender;
  }

  fullName = function() {
    return this.firstName + ' ' + this.lastName;
  }

  communicate = function() {
    console.log('communicating');
  }

  sleep = function() {
    console.log('sleeping');
  }

  eat = function() {
    console.log('eating');
  }
}

class Doctor extends Person {
  constructor(firstName, lastName, age, gender, specialization) {
    super(firstName, lastName, age, gender);
    this.specialization = specialization;
  }

  diagnose = function() {
    console.log('diagnosing');
  }
}

class Professor extends Person {
  constructor(firstName, lastName, age, gender, subject) {
    super(firstName, lastName, age, gender);
    this.subject = subject;
  }

  teach = function() {
    console.log('teaching');
  }
}

class Student extends Person {
  constructor(firstName, lastName, age, gender, degree) {
    super(firstName, lastName, age, gender);
    this.degree = degree;
  }

  study = function() {
    console.log('studying');
  }
}

class GraduateStudent extends Student {
  constructor(firstName, lastName, age, gender, graduateDegree) {
    super(firstName, lastName, age, gender);
    this.graduateDegree = graduateDegree;
  };

  research = function() {
    console.log('researching');
  }
}

const person = new Person('foo', 'bar', 21, 'gender');

console.log(person instanceof Person);     // logs true
person.eat();                              // logs 'Eating'
person.communicate();                      // logs 'Communicating'
person.sleep();                            // logs 'Sleeping'
console.log(person.fullName());            // logs 'foo bar'

const professor = new Professor('James', 'Bright', 45, 'gender', 'Mathematics');
console.log(professor instanceof Person);
professor.eat();
professor.teach();
console.log(professor.fullName());

const graduateStudent = new GraduateStudent('foo', 'bar', 21, 'gender', 'BS Industrial Engineering', 'MS Industrial Engineering');
// logs true for next three statements
console.log(graduateStudent instanceof Person);
console.log(graduateStudent instanceof Student);
console.log(graduateStudent instanceof GraduateStudent);
graduateStudent.eat();                     // logs 'Eating'
graduateStudent.communicate();             // logs 'Communicating'
graduateStudent.sleep();                   // logs 'Sleeping'
console.log(graduateStudent.fullName());   // logs 'foo bar'
graduateStudent.study();                   // logs 'Studying'
graduateStudent.research();                // logs 'Researching'