// 1. **შექმენით ბეიზ კლასი `Student`** შემდეგი თვისებებით:
//    - `name` (სტრინგი)
//    - `grades` (რიცხვების მასივი)
//    - მეთოდი: `calculateAverage()` – საშუალო შეფასების გამოთვლისთვის.

// 2. **შექმენით კლასი (subclasses):**
//    - `HighSchoolStudent` → გაუკეთეთ (override) `calculateAverage()` საჭიროების მიხედვით 
//    (მაგალითად, სხვა წონების გამოყენებით).  
//    - `CollegeStudent` → განსხვავებულად გაუკეთეთ override `calculateAverage()`.

class Student {
    name;
    grades;

    constructor (
        _name,
        _grades,
    ) {
        this.name = _name;
        this.grades = _grades;
    }

    calculateAverage() {
        const myArr = this.grades.split(' ');
        const sum = myArr.forEach(e => {e + e});
        console.log(myArr);
        console.log(sum);
        // console.log(Number(this.grades), 'bbc');
        // const gradesSum = (Number(this.grades)).forEach(e => {e + e})
        // console.log(gradesSum/this.grades.length, 'abc');
    }
}

const myStudent = new Student(
    'Alice Malcovic',
    10, 7, 8,
)

console.log(myStudent);
myStudent.calculateAverage();