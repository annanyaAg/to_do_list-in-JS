const inputBox = document.getElementById('inputBox')
const addBtn = document.getElementById('addBtn')
const todoList = document.getElementById('todoList')

let editTodo = null;

const addTodo = () => {
    const inputText = inputBox.value.trim()
    if (inputText.length <= 0) {
        alert("write something")
        return false
    }

    if (addBtn.value === "EDIT") {
        editTodo.target.previousElementSibling.innerHTML = inputText;
        addBtn.value = "ADD"
        inputBox.value = ""
    }
    else {

        // creating p tag
        const li = document.createElement("li")
        const p = document.createElement("p")
        p.innerHTML = inputText
        li.appendChild(p)

        // creating edit button
        const editBtn = document.createElement("button")
        editBtn.innerHTML = "EDIT"
        editBtn.classList.add("btn", "edtBtn")
        li.appendChild(editBtn)

        // creating delete button
        const deleteBtn = document.createElement("button")
        deleteBtn.innerHTML = "REMOVE"
        deleteBtn.classList.add("btn", "delBtn")
        li.appendChild(deleteBtn)


        todoList.appendChild(li)
        inputBox.value = ""
    }
}

const updateTodo = (e) => {
    if (e.target.innerHTML === "REMOVE") {
        todoList.removeChild(e.target.parentElement);
    }

    if (e.target.innerHTML === "EDIT")
        inputBox.value = e.target.previousElementSibling.innerHTML;
    inputBox.focus()
    addBtn.value = "EDIT"
    editTodo = e

}
addBtn.addEventListener('click', addTodo)
todoList.addEventListener('click', updateTodo)
