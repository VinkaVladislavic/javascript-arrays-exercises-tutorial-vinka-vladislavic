function sumTheElements(theArray) {
	let total = 0;
	// Your code here
	for(let i=0; i<theArray.length; i++) {
		total = total + theArray[i];
	}
	return total;
}

let test = sumTheElements([20, 20, 10, 4])
console.log(test)