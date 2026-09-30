// * task 1

let Students = [{
    id: 1,
    name: "Mostafa Mohamed",
    age: 28,
    city: "Cairo",
    grade: 95,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS"]
},
{
    id: 2,
    name: "Ali Hassan",
    age: 17,
    city: "Alex",
    grade: 60,
    isGraduated: false,
    skills: ["HTML"]
},
{
    id: 3,
    name: "Sara Ali",
    age: 24,
    city: "Mansoura",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"]
},
{
    id: 4,
    name: "Youssef Mohamed",
    age: 21,
    city: "cairo",
    grade: 88,
    isGraduated: true,
    skills: ["HTML", "CSS", "JS", "React"]
},
{
    id: 5,
    name: "sara Mohamed",
    age: 19,
    city: "Mansoura",
    grade: 88,
    isGraduated: false,
    skills: ["HTML", "CSS", "JS"]
}
];

// console.log(Students.length);

// console.log(Students[0].name);
// console.log(Students[3].name);
// console.log("********************");

// Object.entries(Students).forEach(([key,value]) => {
//     console.log(value.name);
// });

// Object.entries(Students).forEach(([key,value]) => {
//     console.log(value);
// });

// for (let st = 0; st < Students.length; st++) {
//     if (Students[st].age > 18) console.log(Students[st].name);
//     else console.log("no st here");
// }


// let grade_st = Students.filter(st => st.grade > 90);
// console.log(grade_st);

// let graduation_st = Students.filter(st=>st.isGraduated == true)
// console.log(graduation_st);

// let notGraduation_st = Students.filter(st=>st.isGraduated == false)
// console.log(notGraduation_st);

// let sum = 0;
// for (let st = 0; st < Students.length; st++) {
//     sum += Students[st].grade
// }
// console.log("sum: ",sum);

// let avg = sum / Students.length
// console.log("avg: ",avg);

// * max
// for (let st = 0; st < Students.length -1; st++) {
//     if(Students[st].grade > Students[st+1].grade){
//         console.log(Students[st].grade);
//         break
// }}

// * min

// for (let st = 0; st < Students.length -1; st++) {
//     if(Students[st].grade <  Students[st+1].grade){
//         console.log(Students[st].grade);
//         break
// }}

// Students.sort((a,b)=> a.name.localeCompare(b.name));
// console.log(Students);

// Students.sort((a,b)=> (b.name.localeCompare(a.name)));
// console.log(Students);


// todo string method

// Students.forEach(st=>{
//     let name = st.name;
//     console.log(`Name: ${name}`);
//     console.log(`number of characters: ${name.length}`);
//     console.log(`first char: ${name[0]}`);
//     console.log(`last char: ${name.length-1}`);
//     console.log("--------------------------------------");
// })

// Students.name

// console.log(Students[0].name.toLowerCase());
// console.log(Students[0].name.toUpperCase());


// Students.forEach(st=>{
//     let specificName = st.name.toLowerCase().includes("ali")
//     console.log(specificName);
// })


// console.log(Students[0].name.split(" "));
// console.log(Students[0].name.split(" ").join(" "));

// console.log(Students[0].name.split(" ").join(" ").trim());


// todo Array

// Students.forEach(st=>{
//     console.log(st.name,st.skills.length);    
//     })

// Students.forEach(st=>{
//     console.log(st.name,st.skills.length,st.skills);    
//     })


// *part 25

// let new_skill = "python"
// Students[0].skills.push(new_skill)
// console.log(Students[0].skills);

// Students[0].skills.pop(new_skill)
// console.log(Students[0].skills);



// console.log(Students[0].skills.includes("JS"));



// console.log(Students[0].skills.reverse());

// console.log(Students[0].skills.sort());


// console.log(Students[0].skills.toString());


// Object.keys(Students).forEach(key=>{
//     console.log(key);
// })

// Object.values(Students).forEach(key=>{
//     console.log(key);
// })


// Object.entries(Students).forEach(([key,values])=>{
//     console.log(key,values);
// })


// let new_ele = {"country":"egypt"}

// Students.push(new_ele)
// console.log(Students);
// Students.pop(new_ele)
// console.log(Students);

// if("grade" in Students[2]) console.log("yes");
// else console.log("no");



// Students.forEach(st=>{

// if (st.grade>= 90 && st.grade <=100) console.log(`Your grad is ${st.grade} , Excellent`);
// else if (st.grade >= 80 && st.grade < 90) console.log(`Your grade is ${st.grade} , Good`);
// else if (st.grade >= 70 && st.grade < 80) console.log(`Your grade is ${st.grade} , Average`);
// else if (st.grade >= 60 && st.grade < 70) console.log(`Your grade is ${st.grade} , Pass`);
// else if (st.grade < 50) console.log(`Your grade is ${st.grade} , failed`);
// else console.log(`Invailed input`);
// })


// Students.forEach(st=>{
//     if(st.age<18) console.log("minor");
//     else if (st.age >=18) console.log("Adult");
//     else console.log("Invalid age");
// })

// function names(){
//     Students.forEach(st=>{
//     console.log(st.name);
// })}

// names()

// function Ages(){
//     Students.forEach(st=>{
//     console.log(st.age);
// })}

// Ages()


// function isSucssed(){
//     Students.forEach(st=>{

// if (st.grade>= 90 && st.grade <=100) console.log(`Your grad is ${st.grade} , Excellent`);
// else if (st.grade >= 80 && st.grade < 90) console.log(`Your grade is ${st.grade} , Good`);
// else if (st.grade >= 70 && st.grade < 80) console.log(`Your grade is ${st.grade} , Average`);
// else if (st.grade >= 60 && st.grade < 70) console.log(`Your grade is ${st.grade} , Pass`);
// else if (st.grade < 50) console.log(`Your grade is ${st.grade} , failed`);
// else console.log(`Invailed input`);
// })
// }

// isSucssed()

// let sum = 0;
// let avg = 0;
// function Avg_grades(){
// for(let i =0;i<Students.length;i++){
//     sum += Students[i].grade
//     avg = sum / Students.length
// }
// console.log(avg);
// }

// Avg_grades()


// * Math

// let num1 = Math.round(4.6)
// console.log(num1);

// let num2 = Math.round(2.4)
// console.log(num2);
// ****************************
// let num1 = Math.ceil(4.6)
// console.log(num1);

// let num2 = Math.ceil(2.4)
// console.log(num2);
// ****************************
// let num1 = Math.floor(4.6)
// console.log(num1);

// let num2 = Math.floor(2.4)
// console.log(num2);
// ****************************
// let num1 = Math.min(0, 150, 30, 20, -8, -200);
// console.log(num1);

// let num1 = Math.max(0, 150, 30, 20, -8, -200);
// console.log(num1);
// ****************************
// let num1 = Math.random()
// console.log(num1);


// ^ //////////////////////////////////////////////////////////////////////////

// * task 2

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const jobInput = document.querySelector("#job");
const submitBtn = document.querySelector("#submitBtn");

submitBtn.addEventListener('click', function () {
    const name = nameInput.value.trim();
    const age = ageInput.value.trim();
    const job = jobInput.value.trim();

    if (name === "" || age === "" || job === "") {
        alert("Please fill all fields");
    } else {
        console.log(`Name:  ${name}`);
        console.log(`Age: ${age}`);
        console.log(`Job: ${job}`);
        if(Number(age)<18){
            alert("You are under age");
        }else{
            alert("Registration Completed");
        }
        
    }

})