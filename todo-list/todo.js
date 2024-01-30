const todoList = ['make dinner', 'wäsche', 1]

renderTodoList()

function renderTodoList() {
    let todoListHTML = ""

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i]
        const html = `<p>${todo}</p>`
        todoListHTML += html
    }
    console.log(todoListHTML)
    
    
    document.querySelector('.js-msg').innerHTML = todoListHTML
}




function addTodo() {
    const inputElement = document.querySelector('.input')
    const name = inputElement.value
    
    todoList.push(name)
    console.log(todoList)

    inputElement.value = ""

    renderTodoList();
}