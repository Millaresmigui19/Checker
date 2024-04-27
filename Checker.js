// script.js 

let password = document.getElementById("password"); 
let power = document.getElementById("power-point"); 
password.oninput = function () { 
	let value = password.value; 

	if (value.length <= 7) { 
		// Bad password: 7 or less characters
		power.style.width = "100%"; 
		power.style.backgroundColor = "#D73F40"; // Red
	} else { 
		// Good password: 8 or more characters
		power.style.width = "100%"; 
		power.style.backgroundColor = "#3ba62f"; // Green
	} 
};
