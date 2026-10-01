// const employees = [
// {
// id: 1,
// name: "Ahmed",
// age: 22,
// salary: 6000,
// department: "IT",
// active: true
// },
// {
// id: 2,
// name: "Sara",
// age: 27,
// salary: 8500,
// department: "HR",
// active: true
// },
// {
// id: 3,
// name: "Ali",
// age: 20,
// salary: 4500,
// department: "IT",
// active: false
// },
// {
// id: 4,
// name: "Mona",
// age: 30,
// salary: 10000,
// department: "Finance",
// active: true
// },
// {
// id: 5,
// name: "Omar",
// age: 24,
// salary: 7000,
// department: "Marketing",
// active: false
// },
// {
// id: 6,
// name: "Youssef",
// age: 29,
// salary: 12000,
// department: "IT",
// active: true
// }
// ];

// for (let i = 0; i < employees.length; i++) {
// console.log(employees[i].name);
// }

// for (const emp of employees) {
// console.log(emp.name);
// }

// employees.forEach(emp => console.log(emp.name));

// for (const index in employees) {
// console.log(index);
// }

// for (let i = 0; i < employees.length; i++) {
// if (employees[i].active) {
// console.log(employees[i]);
// }
// }

// const welcome = name => `Welcome ${name}`;
// console.log(welcome("Ahmed"));

// const employee = employees[0];
// const { name, salary } = employee;
// console.log(`Name: ${name}, Salary: ${salary}`);

// const updatedEmployee = { ...employee, country: "Egypt" };
// console.log(updatedEmployee);

// console.log(`${employee.name} works in ${employee.department} and earns ${employee.salary}`);

// console.log("\n--- Part 3: map() ---");

// const names = employees.map(emp => emp.name);
// console.log("Names:", names);

// const salaries = employees.map(emp => emp.salary);
// console.log("Salaries:", salaries);

// const nameAndDept = employees.map(emp => `${emp.name} (${emp.department})`);
// console.log("Name & Dept:", nameAndDept);

// const increasedSalaries = employees.map(emp => ({ ...emp, salary: emp.salary + 1000 }));
// console.log("Increased Salaries:", increasedSalaries);

// console.log("\n--- Part 4: filter() ---");

// const highEarners = employees.filter(emp => emp.salary > 7000);
// console.log("Salary > 7000:", highEarners);

// const itEmployees = employees.filter(emp => emp.department === "IT");
// console.log("IT Department:", itEmployees);

// const activeEmployees = employees.filter(emp => emp.active);
// console.log("Active Employees:", activeEmployees);

// const youngEmployees = employees.filter(emp => emp.age < 25);
// console.log("Age < 25:", youngEmployees);

// const itHighEarners = employees.filter(emp => emp.department === "IT" && emp.salary > 5000);
// console.log("IT & Salary > 5000:", itHighEarners);

// console.log("\n--- Part 5: find() ---");

// const firstHighSalary = employees.find(emp => emp.salary > 9000);
// console.log("Salary > 9000:", firstHighSalary);

// const firstHREmp = employees.find(emp => emp.department === "HR");
// console.log("First HR:", firstHREmp);

// const firstInactive = employees.find(emp => !emp.active);
// console.log("First Inactive:", firstInactive);

// const notFoundEmp = employees.find(emp => emp.id === 100);
// console.log("ID 100 (Result):", notFoundEmp);

// const activeNames = employees.filter(emp => emp.active).map(emp => emp.name);
// console.log("Active Names:", activeNames);

// const itNames = employees.filter(emp => emp.department === "IT").map(emp => emp.name);
// console.log("IT Names:", itNames);

// const richNames = employees.filter(emp => emp.salary > 7000).map(emp => emp.name);
// console.log("Salary > 7000 Names:", richNames);

// const bonuses = employees.map(emp => ({
// employee: emp.name,
// bonus: emp.salary * 0.1
// }));

// console.log("Bonuses:", bonuses);

// const initials = employees.map(emp => emp.name[0]);
// console.log("Initials:", initials);

// const numbers = [5, 12, 8, 20, 15, 30, 3, 40];

// const greaterThan10 = numbers.filter(n => n > 10);
// console.log("Greater than 10:", greaterThan10);

// const multiplied = numbers.map(n => n * 2);
// console.log("Multiplied by 2:", multiplied);

// const firstOver25 = numbers.find(n => n > 25);
// console.log("First > 25:", firstOver25);

// numbers.forEach(n => console.log(n));

// const numberStrings = numbers.map(n => `Number is ${n}`);
// console.log("Number Strings:", numberStrings);

// const product = {
// id: 1,
// title: "Laptop",
// price: 25000,
// category: "Electronics"
// };

// console.log("Object Keys:");
// for (const key in product) {
// console.log(key);
// }

// console.log("Object Values:");
// for (const key in product) {
// console.log(product[key]);
// }

// const updatedProduct = { ...product, stock: 15 };
// console.log("Updated Product:", updatedProduct);

// const { title, price } = product;
// console.log(`Product Title: ${title}, Price: ${price}`);

// function dashboard() {
// const totalEmployees = employees.length;
// const activeCount = employees.filter(emp => emp.active).length;
// const inactiveCount = totalEmployees - activeCount;
// const itCount = employees.filter(emp => emp.department === "IT").length;

// const highestSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, employees[0].salary);

// const firstHR = employees.find(emp => emp.department === "HR")?.name || "None";
// const allNames = employees.map(emp => emp.name).join("\n");

// console.log(`Total Employees : ${totalEmployees}

// Active Employees : ${activeCount}

// Inactive Employees : ${inactiveCount}

// IT Employees : ${itCount}

// Highest Salary : ${highestSalary}

// First HR Employee : ${firstHR}

// Employee Names :
// ${allNames}`);
// }

// dashboard();

// const totalSalaries = employees.reduce((acc, emp) => acc + emp.salary, 0);
// console.log("Total Salaries:", totalSalaries);

// const averageSalary = totalSalaries / employees.length;
// console.log("Average Salary:", averageSalary);

// const maxSalary = employees.reduce((max, emp) => emp.salary > max ? emp.salary : max, employees[0].salary);
// console.log("Highest Salary:", maxSalary);

// const activeCount = employees.reduce((acc, emp) => emp.active ? acc + 1 : acc, 0);
// console.log("Active Employees Count:", activeCount);

// const numbersQ1 = [1, 2, 3, 4];
// numbersQ1.forEach((num) => {
// console.log(num * 2);
// });

// const nums = [10, 25, 5, 30, 15, 40];
// const resultQ2 = nums.filter((num) => {
// return num > 20;
// });
// console.log(resultQ2);

// const users = [
// { name: "Ali", age: 20 },
// { name: "Sara", age: 28 },
// { name: "Omar", age: 30 }
// ];
// const user = users.find((item) => {
// return item.age > 25;
// });
// console.log(user);

// const namesList = ["ali", "mona", "ahmed"];
// const resultQ4 = namesList.map((name) => {
// return name.toUpperCase();
// });
// console.log(resultQ4);

// const fruits = ["Apple", "Banana", "Orange"];

// for (const fruit of fruits) {
// console.log(fruit);
// }

// for (const index in fruits) {
// console.log(index);
// }

// fruits.forEach((fruit, index) => {
// console.log(`${index} -> ${fruit}`);
// });

// const sum = (a, b) => a + b;

// const userObj = {
// name: "Mostafa",
// age: 25
// };
// const { name: userName, age: userAge } = userObj;

// console.log(`Hello ${userName}`);

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const combined = [...arr1, ...arr2];
// console.log(combined);

// const students = [
// { name: "Ali", degree: 70 },
// { name: "Sara", degree: 95 },
// { name: "Ahmed", degree: 40 },
// { name: "Mona", degree: 85 },
// { name: "Omar", degree: 55 }
// ];

// const studentNames = students.map(student => student.name);
// console.log(studentNames);

// const passedStudents = students.filter(student => student.degree >= 60);
// console.log(passedStudents);

// const topStudent = students.find(student => student.degree > 90);
// console.log(topStudent);

// students.forEach(student => {
// console.log(student.name);
// });

// const numbersBonus = [5, 10, 15, 20];
// const totalSum = numbersBonus.reduce((accumulator, currentVal) => {
// return accumulator + currentVal;
// }, 0);

// console.log(totalSum);