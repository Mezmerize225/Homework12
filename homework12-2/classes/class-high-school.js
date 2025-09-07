import Student from "./class-student.js";

export default class HighSchoolStudent extends Student {
    calculateAverage() {
        const sum = this.grades.reduce((acc, e) => acc + e, 0);
        const average = Math.round(sum/this.grades.length);
        console.log(sum);
        console.log(average, 'abc');
        return average;
    }
}