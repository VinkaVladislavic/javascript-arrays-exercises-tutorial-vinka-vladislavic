// Your code here
function lyricsGenerator(array) {
    let song ='';
    let i=0;
    while (i<array.length) {
        if (i + 2 < array.length && array[i]==1 && array[i+1]==1 && array[i+2]==1) {
            song += 'Drop the bass ';
            song += 'Drop the bass ';
            song += 'Drop the bass ';
            song += '!!!Break the bass!!! ';
            i=i+3;
        } else {
            if (array[i] ==1) {
                song += 'Drop the bass ';
                i++;
            } else {
                song += 'Boom ';
                i++;
            }
        }
    }
    return song;
}


// Don't change anything below this line
console.log(lyricsGenerator([0,0,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,1,1,1,0,0,0]))
console.log(lyricsGenerator([0,0,0]))
console.log(lyricsGenerator([1,0,1]))
console.log(lyricsGenerator([1,1,1]))
