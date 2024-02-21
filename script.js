var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let deleteBtn = document.getElementsByClassName("deleteButton")
function inputLength() {
	return input.value.length;
}

function createListElement() {
	var newDiv = document.createElement("div");
	var li = document.createElement("li");
	newDiv.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(newDiv)
	input.value = "";
	// Now add a delete button
	var deleteBtn = document.createElement("button")
	deleteBtn.appendChild(document.createTextNode("Delete"));
	li.appendChild(deleteBtn)
	// Allows new items to be deleted
	deleteBtn.addEventListener("click", deleteItem)
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function toggleListItem(event) {
	let targetList = event.target;
	targetList.classList.toggle("done")
	// targetListDelete.toggle("done")
	console.log(event.target.children[0])
}
// Removes the parent element (associated list item)
function deleteItem (event) {
	event.target.parentNode.remove();
}

for(var i = 0; i < deleteBtn.length; i++) {
	deleteBtn[i].addEventListener("click", deleteItem)
}
button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

ul.addEventListener("click", toggleListItem);

// deleteBtn.addEventListener("click", deleteItem)
// If you click on the list item, it toggles the .done class on and off.
// Add buttons next to each list item to delete the item when clicked on its corresponding delete button.
// BONUS: When adding a new list item, it automatically adds the delete button next to it (hint: be sure to check if new items are clickable too!)
