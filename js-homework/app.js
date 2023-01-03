// const ar =[];
// const ar1 = [1,2,3,4,];
// ar.push(...ar1);
// ar.push('abc');
function getRandomNumber(min, max) {
    min = Math.trunc(min);
    max = Math.trunc(max);
    return min + Math.trunc(Math.random()*(max-min +1));
}
for(let i = 0; i < 10 ; i++){
    console.log(getRandomNumber(0,2));
}
function getRandomMatrix(rows, columns, min, max){
const matrix =[];
for(let i =0; i < rows; i++){
    matrix.push([]);
    for( let j = 0; j < columns; j++){
        matrix[i].push(getRandomNumber(min,max))
    }
}
return matrix;
}
//const matrix = getRandomMatrix(3,4,0,1);
const ar10 = [1,2,3,4,5]
const str = ar10.join('_')
console.log(matrix);
// <ul class = "list_class">
// <li class = "item_class">
// <div class = "wite"> </div> 
//</li>
//...........
//</ul>
function getHtmlUl(array){
    //TODO 
    return htmlString;
}
    const strClass = getRandomNUmber (0,1) === 0 ? 'white' : 'black' 
    const str1 = "hello world";
    const str2 = 'hello' + '"world"';
    const str3 = `hello + "${strClass}"`;

    function matrixTransp(matrix){
        //TODO
        //matrix = [[1,2], // input 
        //          [3,4], 
        //           [4,5]
        //                ]
    }   //  output [1,3,4]
                    [2,4,5]