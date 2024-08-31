let arrayOfCelsiusValues = [-2, 34, 56, -10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(item) {
	
	// Add your code here and return the new value
	return item * 1.8 + 32
});

console.log(arrayOfFahrenheitValues);
