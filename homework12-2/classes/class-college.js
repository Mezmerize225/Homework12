import Student from "./class-student.js";

export default class CollegeStudent extends Student {
    calculateAverage() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        const average = Math.round(sum / this.grades.length * 1.05);
        console.log(sum);
        console.log(average, 'def');
        return average;
    }
}