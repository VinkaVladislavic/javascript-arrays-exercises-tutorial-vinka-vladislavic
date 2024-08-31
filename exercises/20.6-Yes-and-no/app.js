let theBools = [0, 1, 0, 0, 1, 1, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];

// Your code here
function wikiWoko (number) {
    if(number == 0) {
        return 'woko';
    } else {
        return 'wiki';
    }
}

let newArray = theBools.map(wikiWoko);
console.log(newArray);