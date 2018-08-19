export default class Todo {
    constructor(getData) {
        this.completed = getData.completed
        this.description = getData.description
        this.user = getData.user
    }
}