const my_input = document.getElementById("my_input")
let current_value = 1

function calc(x) {
	current_value += Number(x)
	my_input.value = Number(current_value) + 1
}