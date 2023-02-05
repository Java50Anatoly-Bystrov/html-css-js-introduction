import { employeeConfig } from "../config/employee-config.js";
import { getRandomNumber } from "../utils/random.js";

export function createEmployee (name, birthYear, salary, city, country)
{
    // const id =  getRandomNumber (employeeConfig.minId, employeeConfig.maxId)
    return{name, birthYear, salary, address: {city, country}}
}

export class Company
{
 #employees;
constructor ()
{
    this.#employees = {};
}
addEmployee(empl) 
{
    const res = checkEmployeeData(empl);
    const id = this.#getId();
    if (res === "Employee added successfully")
    { empl.id = id;
    this.#employees[id] =empl;}
    return {message :res , id};
}

removeEmloyee(id)
{
    if(!this.#employees[id])
    {console.log("Employee with this number was not found"); return false};
    delete this.#employees[id];
    console.log("Employee is removed");
    return true;
}
getEmployeesByID(id)
{
    return Object.values(this.#employees).filter(empl =>
        empl.id === id)
}
getEmployessCountry(country)
{
    return Object.values(this.#employees).filter(empl =>
    empl.address.country === country)
}
getEmployeesByAge(age)
{
 let yearOfBirth = new Date().getFullYear()-age;  
 return Object.values(this.#employees).filter(empl => empl.birthYear === yearOfBirth);
}

getEmployeesBySalaries(salaryFrom, salaryTo)
{
   const res = Object.values(this.#employees).filter(function (empl) 
   {
    if (salaryFrom<=0 && salaryTo<=0) {return empl.salary}
    else if (salaryFrom>0 && salaryTo>0) {return empl.salary>salaryFrom && empl.salary<salaryTo}
    else if (salaryFrom<=0) {return empl.salary<=salaryTo}
    else if (salaryTo<=0) {return empl.salary>=salaryFrom}
    });   
    return res;
}

getAllEmployees()
{
    return Object.values(this.#employees);
}
#getId()
{
let id = 0;
do{
    id = getRandomNumber(employeeConfig.minId, employeeConfig.maxId+1);
}while(this.#employees[id])
return id;
}

}
function checkEmployeeData(empl) 
{
    let res = '';

    const pattern = /^[a-zA-Z]+$/;
    const iscontrolNameValid = pattern.test(empl.name);

    if (empl.salary < employeeConfig.minSalary || empl.salary > employeeConfig.maxSalary) {
        res = `WRONG SALARY. SALARY MUST BE FROM ${employeeConfig.minSalary} UNTIL ${employeeConfig.maxSalary}; `;
    }
    if (empl.birthYear > employeeConfig.maxYear || empl.birthYear < employeeConfig.minYear) {
        res +=  `WRONG YEAR OF BIRTH. YEAR OF BIRTH MUST BE FROM ${employeeConfig.minYear} UNTIL ${employeeConfig.maxYear}; `;
    } 
    if(!iscontrolNameValid){res += `YOU CAN ENTER ONLY LETTERS IN FIlD "NAME"`};

    return res;
}

      