let counter = 0;
def buttonclick(){
	let count1 = counter++; 
	let newtext = "the of times the button was clicked is: " + count1;

	let buttonDiv = document.getElementById("button-div");

	buttonDiv.innerHTML = newtext; 
}