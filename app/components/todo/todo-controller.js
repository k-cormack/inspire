import TodoService from "./todo-service.js";




var todoService = new TodoService

// Use this getTodos function as your callback for all other edits
function requestTodos() {
	//FYI DONT EDIT ME :)
	todoService.getTodos(draw)
}

function draw(todos) {
	console.log(todos)
	//WHAT IS MY PURPOSE?
	//BUILD YOUR TODO TEMPLATE HERE
	let template = ''
	//DONT FORGET TO LOOP
	for (let i = 0; i < todos.length; i++) {
		const list = todos[i];
		if (list.completed == false){
			template += `
			<div style="outline: 1px solid red">
			<h4>${list.description}</h4><input type=checkbox id="checkbox" onclick="app.controllers.todoController.toggleTodoStatus('${list._id}', true)"><span>Completed</span>
			<button name="delete" onclick="app.controllers.todoController.removeTodo('${list._id}')">Delete</button>
			</div>
			`
		}
		else {
			template += `
			<div style="outline: 1px solid red">
			<h4 class="completed">${list.description}</h4><input type=checkbox id="checkbox" checked onclick="app.controllers.todoController.toggleTodoStatus('${list._id}', false)"><span>Completed</span>
			<button name="delete" onclick="app.controllers.todoController.removeTodo('${list._id}')">Delete</button>
			</div>
			`
		}
	}
	document.getElementById("todo").innerHTML = template
}


export default class TodoController {
	constructor() {
		// IF YOU WANT YOUR TODO LIST TO DRAW WHEN THE PAGE FIRST LOADS WHAT SHOULD YOU CALL HERE???
		requestTodos()

	}
	// You will need four methods
	// getTodos should request your api/todos and give an array of todos to your callback fn
	// addTodo takes in a todo and posts it to the server
	// toggleTodoStatus takes in a todo marks its status as completed and puts it to the server
	// removeTodo takes in a todoId and sends a delete request to the server
	// **** HINT: Everytime you make a change to any todo don't forget to get the todo list again


	addTodoFromForm(e) {
		e.preventDefault() // <-- hey this time its a freebie don't forget this
		// TAKE THE INFORMATION FROM THE FORM
		let form = e.target
		// var newTodo =  {
		// 	description: form.description.value
		// }
		// DONT FORGET TO BUILD YOUR TODO OBJECT

		//PASSES THE NEW TODO TO YOUR SERVICE
		//DON'T FORGET TO REDRAW THE SCREEN WITH THE NEW TODO
		//YOU SHOULDN'T NEED TO CHANGE THIS
		todoService.addTodo(form, requestTodos)
		//^^^^^^^ EXAMPLE OF HOW TO GET YOUR TOODOS AFTER AN EDIT
		form.reset()

		console.log("todo debug")

	}

	toggleTodoStatus(todoId, value) {
		// todoId.preventDefault()
		// asks the service to edit the todo status
		todoService.toggleTodoStatus(todoId, value, requestTodos)
		// YEP THATS IT FOR ME
	}

	removeTodo(todoId) {
		// todoId.preventDefault()
		// ask the service to run the remove todo with this id

		// ^^^^ THIS LINE OF CODE PROBABLY LOOKS VERY SIMILAR TO THE toggleTodoStatus
		// console.log("remove Todo request")
		todoService.removeTodo(todoId, requestTodos)

	}
}
