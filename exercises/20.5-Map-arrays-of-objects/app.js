let people = [
	{ name: 'Joe', birthDate: new Date(1986,10,24) },
	{ name: 'Bob', birthDate: new Date(1975,5,24) },
	{ name: 'Erika', birthDate: new Date(1989,6,12) },
	{ name: 'Dylan', birthDate: new Date(1999,12,14) },
	{ name: 'Steve', birthDate: new Date(2003,4,24) }
];

let simplifier = function(person) {
	// Your code here
	let currentYear = new Date().getFullYear();
	let birthDateYear = person.birthDate.getFullYear();
	let age = currentYear - birthDateYear;
	
	let currentMonth = new Date().getMonth();
	let birthDateMonth = person.birthDate.getMonth();

	let currentDay = new Date().getDate();
	let birthDateDay = person.birthDate.getDate();



	if(currentMonth < birthDateMonth || currentMonth == birthDateMonth && currentDay < birthDateDay) {
		age = age - 1;
	 }
	let sentence = 'Hello, my name is '+person.name+' and I am '+age+' years old'; 
	return sentence;
};

console.log(people.map(simplifier));
