let student = {
    name: "Amit",
    age: 20,
    grade: "A",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "India"
    }
};
console.log(student);

let studentName = student.name
console.log(studentName)

student.phone = "123-456-7890"
console.log(student);

console.log(student);
delete student.grade;
console.log(student);

student.age= 21;
console.log(student);