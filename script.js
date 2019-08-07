let button = document.getElementById("enter");
let input = document.getElementById("userInput");
let appendul = document.querySelector("ul");

// return the length from the input field
function inputLength() {
    return input.value.length;
}

// create the li element and erase the input field afetr button pressed or enter key pressed
function createListElement() {
    let addli = document.createElement("li");
    addli.classList.add("item");
    addli.appendChild(document.createTextNode(input.value));
    addli.addEventListener("click", function() {
        addli.classList.toggle("done");
    });
    let addButton = document.createElement("button");
    addButton.appendChild(document.createTextNode("remove"));
    addButton.addEventListener("click", function(){
        addli.remove();
    });
    addli.appendChild(addButton);
    appendul.appendChild(addli);
    input.value = "";

    
}

/* check the input length and if not empty add li element using createListElement function
with the input text to the list after click the button */
function addListAfterClick() {
    if (inputLength() > 0) {
    createListElement();
    }
}

/*  check the input length and if not empty add li element using createListElement function
with the input text to the list after press enter key */
function addListAfterKeyPressed(enterPressed) {
    if (inputLength() > 0 && enterPressed.keyCode == 13) {
    createListElement();    
    }
}



// add event click and keypress to their respective functions
button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeyPressed);
