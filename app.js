Vue.createApp({
    data() {
        return {
            todo : "",
            status : "Incomplete",
            editTodo: {},
            editing : false,
            todos: [],
            Highlight: {
                "Incomplete" : "bg-red-100",
                "In Progress" : "bg-blue-100",
                "Completed" : "bg-green-100",
            }
        }
    },
    methods: {
        addTodo(){
            this.todos = [...this.todos , {id : this.todos.length + 1, Task : this.todo, Status: this.status}]
            this.todo = "";
            this.status = "Incomplete";
            console.log(this.todos)

        },
        edit(idx){
            console.log("idx " , idx)
            this.editTodo = this.todos[idx];
            this.editing = true;
        },
        deleteTodo(idx){
            this.todos = this.todos?.filter((todo, index) => index != idx);
        },
        cancel(){
            this.editTodo = {};
            this.editing = false;
        }
    }
}).mount("#app")