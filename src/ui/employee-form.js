import { employeeConfig } from "../config/employee-config.js";


export class EmployeeForm {
    #formElement;
    #citiesElement;
    #countriesElement;
    #inputElements
    constructor(idParentForm) {
        const parentFormElement = document.getElementById(idParentForm);
        if (!parentFormElement) {
            throw `wrong parent id ${idParentForm}`;
        }
        parentFormElement.innerHTML = `
        <form id="employee-form">
            <input required name="name" type="text" placeholder="Enter employee name" class="form-input">
            <input required name="birthYear" type="number" placeholder="Enter year of birth" class="form-birthYear">
            <input required name="salary" type="number" placeholder="Enter salary" class="form-salary">
            <div class="form-select-group-c">
                <label id = "text_country" class ="select-label" >Select Country</label>
                <select name="country" id="countries" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-select-group">
                <label id = "text_city" class ="select-label">Select City</label>
                <select name="city" id="cities" class="form-select">
                    <option value="uuuu"></option>
                    
                </select>
            </div>
            <div class="form-buttons">
                <button class = "submit" type="submit">Submit</button>
                <button class = "reset" type="reset">Reset</button>
            </div>
        </form>
        `
        this.#formElement = document.getElementById("employee-form");
        this.#countriesElement = document.getElementById("countries");
        this.#citiesElement = document.getElementById("cities");
        this.#inputElements  = document.querySelectorAll("#employee-form [name]");
        this.setCountries();
        this.setCities();
        this.#countriesElement.addEventListener("change", () => this.setCities());
        
    }
    setCountries() {
        this.#countriesElement.innerHTML = Object.keys(employeeConfig.countries)
        .map(country => `<option value="${country}">${country}</option>`)

    }
    setCities() {
        this.#citiesElement.innerHTML = employeeConfig.countries[this.#countriesElement.value]
        .map(city => `<option value="${city}">${city}</option>`)
    }
    addFormHandler(handlerFun) {
    
        this.#formElement.addEventListener('submit', (event) => {
    event.preventDefault(); //canceling default handler of "submit"
    const employeeData = Array.from(this.#inputElements)
    .reduce((res, inputElement) => {
        res[inputElement.name] = inputElement.value;
        return res;
    }, {});

    const msg = handlerFun(employeeData);
    if(msg){
          alert(msg);
      }
    const result = document.querySelector('.Result-message');
    result.style.display = 'block';
    nullingoRows();
})
    }

}

function nullingoRows()
{
    const inputElementBirthYear = document.querySelector(".form-birthYear"); 
    const inputElementSalary = document.querySelector(".form-salary"); 
    const inputElementName = document.querySelector(".form-input");
    inputElementName.value ='';
    inputElementSalary.value ='';
    inputElementBirthYear.value ='';
}