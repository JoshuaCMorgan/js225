/*
Create an object factory for a student object. The student object should have the 
following methods and it should produce the expected results demonstrated in the 
sample code:

info: Logs the name and year of the student.
addCourse: Enrolls student in a course. A course is an object literal that has 
properties for its name and code.
listCourses: Returns a list of the courses student has enrolled in.
addNote: Adds a note property to a course. Takes a code and a note as an argument. 
If a note already exists, the note is appended to the existing one.
updateNote: Updates a note for a course. Updating a note replaces the existing 
note with the new note.
viewNotes: Logs the notes for all the courses. Courses without notes are not 
displayed.

courses: { name: 'Math', code: 101, notes: [note1, note2...] }

*/

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

let foo = createStudent('Foo', '1st');
foo.info();
foo.listCourses();
foo.addCourse({name: 'Math', code: 101});
foo.addCourse({ name: 'Advanced Math', code: 102 });
foo.listCourses();
foo.addNote(101, "Fun course");
foo.addNote(101, "Remember to study for Algebra")
foo.addNote(102, 'Difficult subject');
 foo.viewNotes();
foo.updateNote(101, 'Fun Course');
foo.viewNotes();