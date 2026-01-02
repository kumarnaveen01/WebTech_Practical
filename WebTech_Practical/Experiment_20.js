// Q20: Iterate over object properties using for...in

let student = {
    name: "Rahul",
    age: 20,
    course: "BCA"
};

for (let key in student) {
    console.log(key + " : " + student[key]);
}
