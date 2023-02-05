export class Table {
    #schema // array of objects {displayname: <string>, fieldname: <name>}
    #tbodyElement
    constructor(parentId, tableName, schema) {
        const parentElement = document.getElementById(parentId);
        this.#schema = schema;
        if (!parentElement) { throw `wrong parent id ${parentId}` };
        parentElement.innerHTML = `<h3 class="table-logo"> ${tableName} </h3>
        <table class = "general-table">
            <thead>
                <tr>
              ${getHeader(schema)}
                </tr>
            </thead>
            <tbody id="${tableName}">
            </tbody>
        </table>`
        this.#tbodyElement = document.getElementById(tableName)
    }
    addRow(object) {
        this.#tbodyElement.innerHTML += getRow(object, this.#schema);
    }
}
function getHeader(schema) {
    return schema.map(obj => `<th class = "table-style">${obj.columnName}</th>`).join(``);
}
function getRow(data, schema) {
    return `<tr> ${getTds(data, schema)}</tr>`;
}
function getTds(data, schema) {
    return schema.map(obj => `<td class = "table-style">${data[obj.fieldName]}</td>`).join(``);
}