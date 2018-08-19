import Todo from "../../models/todo.js"


// @ts-ignore
const todoApi = axios.create({
	baseURL: 'https://bcw-sandbox.herokuapp.com/api/YOURNAME/todos/',
	timeout: 3000
});

function logError(e) {
	console.log(e)
}
function drawTodos(todo) {
	
}
let todoList = []

// let todo = new Todo

export default class TodoService {

	getTodos(drawFunctionInsideController) {
		console.log("Getting the Todo List")
		todoApi.get('')
			.then((res) => { // <-- WHY IS THIS IMPORTANT????  my note: can be .then(res => {   }) as well

				todoList = res.data.data //this data.data BS is AXIOS!!
				drawFunctionInsideController(todoList)

			})
			.catch(logError)
	}

	addTodo(form) {
		// WHAT IS THIS FOR???
		let newTodo = new Todo ({
			description: form.description.value
			// DONT FORGET TO BUILD YOUR TODO OBJECT
		})
		todoApi.post('', newTodo)
			.then(function (res) { // <-- WHAT DO YOU DO AFTER CREATING A NEW TODO?
				todoList = res.data.data
				// todo(todoList)
				// this.getTodos(todoList)
			})
			.catch(logError)
	}

	toggleTodoStatus(todoId) {
		// MAKE SURE WE THINK THIS ONE THROUGH
		//STEP 1: Find the todo by its index **HINT** todoList

		var todo = {} ///MODIFY THIS LINE

		//STEP 2: Change the completed flag to the opposite of what is is **HINT** todo.completed = !todo.completed
		todoApi.put(todoId, todo)
			.then(function (res) {
				//DO YOU WANT TO DO ANYTHING WITH THIS?
			})
			.catch(logError)
	}

	removeTodo() {
		// Umm this one is on you to write.... The method is a DELETE

	}

}
