let shoppingList = [
    "Milk",
    "Eggs",
    "Bread",
    ["Apples", "Bananas", "Oranges"],
    ["Potatoes", "Tomatoes", "Onions"]
];
console.log(shoppingList);
let firstItem = shoppingList[0];
console.log(firstItem);

 shoppingList.push("carrots");
 console.log(shoppingList);

 shoppingList.pop("carrots");
 console.log(shoppingList);
 
//  shoppingList.splice( 5 [2]);
//  console.log(shoppingList);

let vegetables = shoppingList[4];
vegetables.splice(1, 2, "Cucumbers", "Bell Peppers");
console.log(shoppingList);


// object assignment

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
console.log(student.name);

student.phone = "123-456-7890"
console.log(student);

console.log(student);
delete student.grade;
console.log(student);
student.age = 21;
console.log(student);

