
const staff = [
    {name: "Misganaw", age: 23, position: "Developer", salary: 100},
    {name: "Lebaw", age: 25, position: "Lawyer", salary: 300},
    {name: "Maregu", age: 19, position: "Designer", salary: 400},
    {name: "addisu", age: 20, position: "Business Man", salary: 10}

];

const dailyTotal = staff.reduce((total, person) =>{
    console.log(total)

  console.log(person.salary)
  total += person.salary
  return total

}, 1000);


console.log(dailyTotal)





//let me start using the function filter to adjust the component of the array

// const youngPeople = people.filter((person) =>{

//     return person.age < 20;
 
// });
// console.log(youngPeople)

// const Developer = people.filter((person) => person.position === "Developer");
// console.log(Developer)
























