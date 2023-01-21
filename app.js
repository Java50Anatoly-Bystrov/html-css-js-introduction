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
//console.log(computeSalaryBudget(employees));

let field = "salary";
function displayFieldValue(employees,index,field){
    console.log(employees[index][field])
}
// displayFieldValue(employees, 3, "id");
// employees[0].salary = 20000;
// employees[0].department = "QA";
// displayFieldValue (employees,1,"department");
// delete employees[0].department
// displayFieldValue(employees,0,"department");
function computeMinMaxAvgSalary(employees)
{
   const res = employees.reduce((res,empl)=>{
        if (res.minSalary > empl.salary)
        {
            res.minSalary = empl.salary;
        }
        else if (res.maxSalary < empl.salary)
        {
            res.maxSalary = empl.salary;
        }
        res.avgSalary += empl.salary;
        return res;
    }, {minSalary: employees[0].salary, maxSalary: employees[0].salary, avgSalary: 0});
    res.avgSalary= res.avgSalary / employees.length;
    return res;
}
console.log(computeMinMaxAvgSalary(employees));

function displayValue(minMaxAvg, field){
    console.log(`value of the fied ${field} is ${minMaxAvg[field]}`)
};
const minMaxAvg =computeMinMaxAvgSalary(employees);
// displayValue(minMaxAvg,"avgSalary");
// displayValue(minMaxAvg,"minSalary");
// displayValue(minMaxAvg,"maxSalary");
const strings = ["b", "xyz","lmn", "xyz", "lmn", "xyz", "a"];
// assumed result : 
// xyz -> 3 
// lmn -> 2
//   a -> 1 
//   b -> 1 
function displayStringOccurrences(strings){
    const stingOccurrences = getStringOccurences(strings);
    const arrayOccurrences = Object.entries(stingOccurrences);
    arrayOccurrences.sort(stringComp);
    arrayOccurrences.forEach(entry => console.log(`${entry[0]} -> ${entry[1]}`));
}
function getStringOccurences(string){
    const res = {};
    strings.forEach(str => {
        if(!res[str]){
            res[str] = 1; 
        }else{
            res[str]++;
        }
    })
    return res; 
}
function stringComp(entry1, entry2){
let res = entry2[1] - entry1[1];
if(res === 0){
    res = entry1[0] < entry2[0] ? -1 : 1; 
}
return res; 
}
displayStringOccurrences(strings)
//HW#19 
function getMostPapulatedCountry(employees) {
    const countryCount = employees.reduce((acc, curr) => {
        if (acc[curr.adress.country]) {
            acc[curr.adress.country]++;
        } else {
            acc[curr.adress.country] = 1;
        }
        return acc;
    }, {});
    return Object.keys(countryCount).reduce((a, b) => countryCount[a] > countryCount[b] ? a : b);
}
console.log(getMostPapulatedCountry(employees));
function getMostPopulatedCountries(employees, counter) {
    const countryCount = employees.reduce((acc, curr) => {
        if (acc[curr.adress.country]) {
            acc[curr.adress.country]++;
        } else {
            acc[curr.adress.country] = 1;
        }
        return acc;
    }, {});
    const sortedCountries = Object.keys(countryCount).sort((a, b) => countryCount[b] - countryCount[a]);
    return sortedCountries.slice(0, counter);
}
console.log(getMostPopulatedCountries(employees, 3)); 

function isAnagram(word, anagram) {
    if(word.length != anagram.length) return false;
    return word.split('').sort().join('') === anagram.split('').sort().join('');
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("triangle", "integral")); 
console.log(isAnagram("word", "drow")); 
console.log(isAnagram("elite", "title")); 
console.log(isAnagram("table", "bleat")); 
console.log(isAnagram("cinema", "iceman")); 
console.log(isAnagram("school", "cholas")); 
