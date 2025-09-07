import CollegeStudent from "../classes/class-college.js";
import HighSchoolStudent from "../classes/class-high-school.js"

const students = [
  new HighSchoolStudent("Alice", [80, 90, 85]),
  new CollegeStudent("Bob", [75, 85, 95])
];

students.forEach(student => {
  console.log(`${student.name} საშუალო შეფასება: ${student.calculateAverage()}`);
});

