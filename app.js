// const employee1 = {id: 123,name:"Vasya", birthYear : 2000, 
// salary: 15000, adress :{city : "lod", country: "Israel"}};
// const employee2 = {id: 123,name:"Vasya", birthYear : 2000, 
// salary: 15000, adress :{city : "lod", country: "Israel"}};
// console.log(`employee1==employee2 is ${employee1 == employee2}`)
// const employee3 = employee1;
// console.log (`employee3==employee1 is ${employee3 == employee1}`)
// employee3.salary = 20000;
// console.log(`employee1 salary = ${employee1.salary}`)

function createEmployee(id, name, birthYear, salary, city, country) {
    return { id, name, birthYear, salary, address: { city, country } }
}
const employees = [
    createEmployee(12323, "Gogi", 1999, 15000, "Lod", "Israel"),
    createEmployee(12324, "David", 1975, 15500, "Tel-Aviv", "Israel"),
    createEmployee(12325, "Sara", 1998, 20000, "New York", "USA"),
    createEmployee(12326, "Abraham", 1990, 13000, "London", "England"),
    createEmployee(12327, "Moshe", 1991, 11200, "Rehovot", "Israel"),
    createEmployee(12328, "Goga", 1993, 14000, "Tbilisi", "Georgea"),
    createEmployee(12329, "Sasha", 1988, 25000, "Ramat Gan", "Israel"),
    createEmployee(12330, "Victor", 2003, 10000, "Arad", "Israel")
];
// TASK 1
function getEmployee(employees, id) {
    // const person = employees.find(function (worker) { return worker.id === idEmpl });
    // return person;
    return employees.find(empl => empl.id === id);
}
console.log(getEmployee(employees, 12329));

// TASK 2
function getEmployeesBySalary(employees, salaryFrom, salaryTo) {
    // const peoplsWithSalary = employees.filter(function (worker) {
    //     if (worker.salary >= salaryFrom && worker.salary <= salaryTo) { return worker };
    // });
    // return peoplsWithSalary;
    return employees.filter(empl => empl.salary >= salaryFrom && empl.salary <= salaryTo);
}
console.log(getEmployeesBySalary(employees, 10000, 12000));

// TASK 3
function getEmployeesByCity(employees, city) {
    // const findCity = employees.find(function (worker) {
    //     return worker.address.city === city;
    // })
    // return findCity;
    return employees.filter(empl => empl.address.city === city);
}
console.log(getEmployeesByCity(employees, "Lod"));

//TASK 4
function getEmployeeNames(employees) {
    // const nameAllEmployees = employees.map(function (worker, index) { return index + 1 + "." + worker.name });
    // return nameAllEmployees;
    return employees.map(empl=>empl.name);
}
console.log(getEmployeeNames(employees));

// TASK 5
function sortEmployeesByAge(employees) {
    // let sortEmployeesByAge = employees.sort(function (empl1, empl2) {
    //     if (empl1.birthYear < empl2.birthYear) { return 1 }
    //     if (empl1.birthYear > empl2.birthYear) { return -1 }
    //     return 0
    // });
    // sortEmployeesByAge = employees.map(function (worker, index) {
    //     return index + 1 + "." + worker.name + " - birth year - " + worker.birthYear + ", "
    //         + (2023 - worker.birthYear) + " years"
    // });
    // return sortEmployeesByAge;
    return  employees.sort((e1, e2) => e2.birthYear - e1.birthYear);
}

console.log(sortEmployeesByAge(employees))

// TASK 6
function computeSalaryBudget(employees) {
//     const salaryBudget = employees.reduce(function (budget, worker) {
//         budget = budget + worker.salary;

//         return budget;
//     }, 0)
//     return salaryBudget;
    return employees.reduce((res, empl) => res + empl.salary, 0)
    employees.reduce((res,empl) => res + empl.salary);
}
console.log(computeSalaryBudget(employees));

