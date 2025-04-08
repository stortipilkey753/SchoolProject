// A simple example of TypeScript code to demonstrate basic usage

interface Student {
  name: string;
  age: number;
}

function addStudent(student1: Student, student2: Student) {
  return { ...student1, ...student2 };
}

const student = {
  name: "Alice",
  age: 25,
};

console.log(addStudent(student));
