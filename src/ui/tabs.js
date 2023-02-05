export class Tabs
{
    #buttonNewEmployee;
    #buttonAllEmployee;

constructor (classOrId)
{
const parentElement = document.getElementById(classOrId);
const nameOfClassButton1 = 'NewEmployee';
const nameOfClassButton2 = 'AllEmployee';
parentElement.innerHTML = 
`<div class="start-buttons">
<button class = "${nameOfClassButton1}" type="submit">Add new employee</button>
<button class = "${nameOfClassButton2}" type="submit">View all employees</button>
</div>`;
this.#buttonNewEmployee=document.querySelector(`.${nameOfClassButton1}`);
this.#buttonAllEmployee=document.querySelector(`.${nameOfClassButton2}`);
}
 event()
 {
    const sectionForm = document.getElementById("form-section");
    const sectionTable = document.getElementById("table-section");
    const NewEmpl = document.querySelector(".NewEmployee");
    const AllEmpl =document.querySelector(".AllEmployee");
    const result = document.querySelector('.Result-message');
   
    
    this.#buttonNewEmployee.addEventListener("click", function ()
{
    sectionForm.style.display = 'block';
    sectionTable.style.display = 'none';
    NewEmpl.style.background = "blue";
    AllEmpl.style.background = "black";
    result.style.display = 'none';
}
)
this.#buttonAllEmployee.addEventListener("click", function ()
{
    sectionTable.style.display = 'block';
    sectionForm.style.display = 'none';
    AllEmpl.style.background = "blue";
    NewEmpl.style.background = "black";
    result.style.display = 'none';
}
)
}}
