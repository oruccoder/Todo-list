const addToDoButton = document.getElementById("addToDo");
const inputText = document.getElementById("inputText");
const toDoContainer = document.getElementById("toDoContainer");
const clearToDoButton = document.getElementById("clearToDo");

addToDoButton.addEventListener("click", function(){
    const paragraph = document.createElement("p");
    paragraph.classList.add("paragraph-style")
    paragraph.innerHTML = inputText.value;
    toDoContainer.appendChild(paragraph);
    inputText.value = "";

    paragraph.addEventListener("click", function(){
        paragraph.style.textDecoration = "line-through";
    });

    paragraph.addEventListener("dblclick", function(){
        toDoContainer.removeChild(paragraph);
    });

    clearToDoButton.addEventListener("click", function(){
        paragraph.style.display = "none";
    });
});