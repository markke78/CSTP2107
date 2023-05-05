//HIGHER ORDER FUNCTIONS *******

const fruitsLIst = ["Mango", "Orange", "Pineapple", "banana"];

//HOF, MAP - mAP FUNCTION IS A hof, which manipulates each value inside the array
// and returns a new array

const furitListPlural = fruitsLIst.map(function(fruit){
    return fruit + 's';
})

console.log(furitListPlural, "fruitsList");

//Example 2
//Where i want to tell if the employee is eligible for a gratuity or not?
//Gratuite

const employeeList = [
    {
        name:"Prabh",
        age: 28,
        experienceWithCompany:5
    },
    {
        name: "Daniel",
        age:35,
        experienceWithCompany:12
    },
    {
        name:"Mike",
        age:32,
        experienceWithCompany:2
    }
]

const modifiedEmployeeLIst = employeeList.map((employee)=>{
    if(employee.experienceWithCompany >5){
        employee.eligibleForGratuity = true;
    }else{
        employee.eligibleForGratuity = false;
    }
    return employee;
})

console.log(modifiedEmployeeLIst, "Modied Employee");


// Filter Function
// Filter function is a HOF wihick filters the array based on a condition
//The length of the earray may change

const employeeNoteEligible = employeeList.filter((employee)=>{
    if(employee.experienceWithCompany < 5) {
        return true;
    }

})

console.log(employeeNoteEligible, "Not Elisgible");

//Assignment 1
const products = [{ name: 'Product 1', price: 10 }, { name: 'Product 2', price: 20 }, { name: 'Product 3', price: 30 }]

const productWithTotalPrice = products.reduce((total, product)=>{
    return total + product.price;
}, 0);

console.log(productWithTotalPrice, "Total Price");

let listOfNumbers = [20, 400, 50, 100, 200, -10];

let highestValue = listOfNumbers.reduce((accumulator, currentValue)=>{
    return accumulator > currentValue ? accumulator : currentValue;
}, -Infinity);

console.log(highestValue, "Highest Value");