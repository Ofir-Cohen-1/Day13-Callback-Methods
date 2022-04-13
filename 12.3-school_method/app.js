const school = {
  teachers: [
    {
      id: 1,
      name: "Pinchas",
      subjects: ["chemistry", "biology", "physics"],
      students: [],
      capacityLeft: 3,
    },
    {
      id: 2,
      name: "Williams",
      subjects: ["history", "ethics"],
      students: [],
      capacityLeft: 2,
    },
  ],
  students: [
    {
      id: 10,
      name: "Jennifer",
      age: 20,
    },
    {
      id: 11,
      name: "Howard",
      age: 23,
    },
    {
      id: 12,
      name: "Old-Timmy",
      age: 86,
    },
    {
      id: 13,
      name: "Houston",
      age: 21,
    },
  ],

  //1.
  findPerson(type, id) {
    if (!this[type]) {
      return `wrong type: ${type}`;
    }
    const newObj = this[type].filter((person) => person.id === id);
    if (newObj[0]) {
      return newObj[0];
    }
    return "Person not found!";
  },

  //2.
  assignStudent(id, subject) {
    let flagAdded = false,
      flagEnd = false;
    this.students.forEach((student) => {
      if (student.id === id) {
        this.teachers.forEach((teacher) => {
          if (teacher.subjects.includes(subject)) {
            if (teacher.capacityLeft > 0 && !flagAdded) {
              teacher.students.push(student.name);
              teacher.capacityLeft -= 1;
              flagAdded = true;
            } else {
              flagEnd = true;
            }
          }
        });
        if (flagEnd && !flagAdded) {
          console.log("Sorry, no available teachers left");
        }
      }
    });
  },

  //3.
  assignTeachersSubject(id, newSubject) {
    this.teachers.forEach((teacher) => {
      if (teacher.id === id) {
        if (!teacher.subjects.includes(newSubject)) {
          teacher.subjects.push(newSubject);
        }
      }
    });
  },

  //4. method that takes a student id, subject, and a grade, adds object of subject:grade to new key grades
  assignGrade(id, subject, grade) {
    this.students.forEach((student) => {
      if (student.id === id) {
        if (student.grades) {
          student.grades.push({ [subject]: grade });
        } else {
          student.grades = [{ [subject]: grade }];
        }
      }
    });
  },
};

console.log(school.findPerson("students", 12));
school.assignStudent(12, "biology");
school.assignTeachersSubject(1, "histology");
console.log("\n\n", school.teachers);

//4.
school.assignGrade(13, "biology", 86);
school.assignGrade(13, "math", 100);
school.assignGrade(13, "history", 93);
console.log("\n\n", school.students[3]);
