// 1. **შექმენით ბეიზ კლასი `Student`** შემდეგი თვისებებით:
//    - `name` (სტრინგი)
//    - `grades` (რიცხვების მასივი)
//    - მეთოდი: `calculateAverage()` – საშუალო შეფასების გამოთვლისთვის.

// 2. **შექმენით კლასი (subclasses):**
//    - `HighSchoolStudent` → გაუკეთეთ (override) `calculateAverage()` საჭიროების მიხედვით 
//    (მაგალითად, სხვა წონების გამოყენებით).  
//    - `CollegeStudent` → განსხვავებულად გაუკეთეთ override `calculateAverage()`.

// 3. **პოლიმორფიზმის დემონსტრაცია:**
//    - შექმენით სტუდენტების მასივი (შერეული `HighSchoolStudent` და `CollegeStudent`).  
//    - გადაუარეთ მასივს და თითოეული სტუდენტისათვის გამოიძახეთ `calculateAverage()` მეთოდი.  
//    - აჩვენეთ, რომ ერთი და იგივე მეთოდი სხვადასხვა ტიპის ობიექტზე სხვადასხვაგვარად მუშაობს.

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
        // const sum = this.grades.reduce((acc, e) => acc + e, 0);
        // const average = Math.round(sum/this.grades.length);
        // console.log(sum);
        // console.log(average, 'abc');
    }
}

class HighSchoolStudent extends Student {
    calculateAverage() {
        const sum = this.grades.reduce((acc, e) => acc + e, 0);
        const average = Math.round(sum/this.grades.length);
        console.log(sum);
        console.log(average, 'abc');
        return average;
    }
}

class CollegeStudent extends Student {
    calculateAverage() {
        const sum = this.grades.reduce((a, b) => a + b, 0);
        const average = Math.round(sum / this.grades.length * 1.05);
        console.log(sum);
        console.log(average, 'def');
        return average;
    }
}



const students = [
  new HighSchoolStudent("Alice", [80, 90, 85]),
  new CollegeStudent("Bob", [75, 85, 95])
];

students.forEach(student => {
  console.log(`${student.name} საშუალო შეფასება: ${student.calculateAverage()}`);
});