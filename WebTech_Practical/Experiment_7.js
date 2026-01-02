// Q7: Leap Year
let year = 2024;
console.log(
    (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0
        ? "Leap Year"
        : "Not Leap Year"
);
