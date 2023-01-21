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

//HW#19 
function getMostPapulatedCountry(employees) {
    const countryCount = employees.reduce((acc, curr) => {
        if (acc[curr.address.country]) {
            acc[curr.address.country]++;
        } else {
            acc[curr.address.country] = 1;
        }
        return acc;
    }, {});
    return Object.keys(countryCount).reduce((a, b) => countryCount[a] > countryCount[b] ? a : b);
}
console.log(getMostPapulatedCountry(employees));
function getMostPopulatedCountries(employees, counter) {
    const countryCount = employees.reduce((acc, curr) => {
        if (acc[curr.address.country]) {
            acc[curr.address.country]++;
        } else {
            acc[curr.address.country] = 1;
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
