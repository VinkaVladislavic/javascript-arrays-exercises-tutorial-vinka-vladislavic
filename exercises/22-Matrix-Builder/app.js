// Your code here
function matrixBuilder(integer) {
    let matrix = [];
    for(let i=0; i<integer; i++) {
        matrix[i] = [];
        for(let j=0; j<integer; j++) {
            matrix[i][j] = Math.floor(Math.random()*2);
        }
    }
    return matrix;
}


// Do not change anything from this line down
console.log(matrixBuilder(5))
