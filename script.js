// Add item to list when Add button is pressed
function newToDo() {
    let input = document.getElementById('ToDoInput').value;
    let item = document.createElement("li");
    let text = document.createTextNode(input);
    let button = document.createElement('button');
    button.innerText = 'Remove'
    item.appendChild(text);
    item.appendChild(button);
    document.getElementById("ToDoList").append(item);
}

//Button to remove item from a list when clicked
    let list = document.getElementById('ToDoList')
    