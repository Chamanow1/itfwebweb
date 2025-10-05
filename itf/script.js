function copytotext() {
	let inputtext = document.getElementById("myinput").value;
	let outputtext = document.getElementById("ourinput").value;
	let result = "Current account balance :" + inputtext + "\nCurrent cash balance :" + outputtext;
	document.getElementById("mytextarea").value = result;
}

function proceed() {
	let amount = document.getElementById("amount").value;
	
}