function createStudent(name, year) {
  return {
    name,
    year,
    courses: [],
    info() {
      console.log(`${this.name} is a ${this.year} year student`);
    },

    listCourses() {
      return this.courses;
    },

    addCourse(course) {
      this.courses.push(course);
    },

    addNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        if (course.note) {
          course.note += `; ${note}`;
        } else {
          course.note = note;
        }
      }

    },

    viewNotes() {
      this.courses.forEach(course => {
        if (course.note) {
          console.log(`${course.name}: ${course.note}`);
        }
      });
    },

    updateNote(courseCode, note) {
      const course = this.courses.filter(({code}) => code === courseCode)[0];

      if (course) {
        course.note = note;
      }
    },
  };
}

let school = (function() {
  const students = [];
  
  function isValid(year) {
    return ['1st', '2nd', '3rd', '4th', '5th'].indexOf(year) >= 0;
  };

  function getCourse(student, courseName) {
      return student.listCourses().filter(({name}) => name === courseName)[0];
  };

  return {
    addStudent(name, year) {
      if (isValid(year)) {
        const student = createStudent(name, year);
        students.push(student);
        return student;
      } else {
        console.log("Invalid Year");
      }
    },

    enrollStudent(student, courseName, courseCode) {
      student.addCourse({name: courseName, code: courseCode}); 
      console.log(`student enrolled in ${courseName}`);

    },


    addGrade(student, courseName, grade) {
      const course = getCourse(student, courseName); 

      if (course) {
        course.grade = grade;
      }
    },

    getReportCard(student) {
      student.listCourses().forEach(({grade, name}) => {
        if (grade) {
          console.log( `${name}: ${grade}`);
        } else {
          console.log(`${name}: In Progress`);
        }
      });
    },

    courseReport(courseName) {
      const courseStudents = students.map(student => {
        const course = getCourse(student, courseName) || { grade: undefined };
        return { name: student.name, grade: course.grade };
      }).filter(({grade}) => grade);

      if (courseStudents.length > 0) {
        console.log(`=${courseName} Grades=`);

        const average = courseStudents.reduce((total, {name, grade}) => {
          console.log(`${name}: ${String(grade)}`);
          return total + grade;
        }, 0) / courseStudents.length;

        console.log('---');
        console.log(`Course Average: ${String(average)}`);
      }
    },
  }
})();

let foo = school.addStudent('foo', '3rd');
school.enrollStudent(foo, 'Math', 101);
school.enrollStudent(foo, 'Advanced Math', 102);
school.enrollStudent(foo, 'Physics', 202);
console.log();
let bar = school.addStudent('bar', '1st');
school.enrollStudent(bar, 'Math', 101);
console.log();
let qux = school.addStudent('qux', '2nd');
school.enrollStudent(qux, 'Math', 101);
school.enrollStudent(qux, 'Advanced Math', 102);
console.log();
school.addGrade(foo, 'Math', 95);
school.addGrade(foo, 'Advanced Math', 90);
school.addGrade(bar, 'Math', 91);
school.addGrade(qux, 'Math', 93);
school.addGrade(qux, 'Advanced Math', 90);
// console.log(foo.listCourses());
// console.log(bar.listCourses());
// console.log(qux.listCourses());
school.getReportCard(foo);
console.log();
school.courseReport('Math');
console.log();
school.courseReport('Advanced Math');