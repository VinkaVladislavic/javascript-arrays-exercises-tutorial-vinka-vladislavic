let par = "Lorem ipsum dolor sit amet consectetur adipiscing elit Curabitur eget bibendum turpis Curabitur scelerisque eros ultricies venenatis mi at tempor nisl Integer tincidunt accumsan cursus"
let counts = {};

// Your code here

for(let i=0; i<par.length; i++) {
    let letra = par[i].toLowerCase();
    if (letra==" ") continue
    if(!counts[letra]){
        counts[letra] = 0
    }
    counts[letra] = counts[letra]+1
}

console.log(counts);
