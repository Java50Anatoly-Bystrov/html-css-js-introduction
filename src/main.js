import { Company, createEmployee } from "./service/company.js";
import { EmployeeForm } from "./ui/employee-form.js";
import { getRandomNumber } from "./utils/random.js";
const MIN_ID = 1000000000;
const MAX_ID = 9999999999;
const company = new Company();


// const formElement = document.getElementById("employee-form");
// const inputElements = document.querySelectorAll("#employee-form [name]");
const employeeForm = new EmployeeForm("form-section");
function addEmployee(employeeData){
    const id = getRandomNumber(MIN_ID, MAX_ID);
    const employee = createEmployee(id,employeeData.name,
     +employeeData.birthYear, +employeeData.salary,
      employeeData.city, employeeData.country);
      company.addEmployee(employee);
}