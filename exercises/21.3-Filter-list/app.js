let names = ['Liam','Emma','Noah','Olivia','William','Ava','James','Isabella','Logan','Sophia','Benjamin','Mia','Mason','Charlotte','Elijah','Amelia','Oliver','Evelyn','Jacob','Abigail','Lucas','Harper','Michael','Emily','Alexander','Elizabeth','Ethan','Avery','Daniel','Sofia','Matthew','Ella','Aiden','Madison','Henry','Scarlett','Joseph','Victoria','Jackson','Aria','Samuel','Grace','Sebastian','Chloe','David','Camila','Carter','Penelope','Wyatt','Riley'];

// Your code here
function filterByName(array, criteria) {
    
    function filterProcess (string) {
        string = string.toLowerCase();
        if (string.includes(criteria)) {
            return string;
        }
    }
    let filteredNames = array.filter(filterProcess);
    return filteredNames;
}

console.log(filterByName(names, 'am'));
