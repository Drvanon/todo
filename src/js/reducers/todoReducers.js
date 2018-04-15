export default function reducer(state={
        todolists:[]
    }, action) {

    switch (action.type) {
        case "ADD_TODO_LIST":
            state = Object.assign({}, state)
            state.todolists.push({id: Date.now(), todos:[], name: action.name})

            return state
        case "ADD_TODO": 
            state = Object.assign({}, state)
            todolist = state.todolists.filter((list) => {if (list.id == action.listid) list })
            todolist.push({text: action.payload.text, completed: false, id: Date.now()})

            return state
        case "REMOVE_TODO":
            return Object.assign({}, state, {
                todolists: state.todolists.map((todolist, index) =>  {
                    return {
                        ...todolist,
                        todos: [
                            todolist.todos.filter((todo) => {if (todo.id != action.payload) return todo}) 
                        ]
                    }
                })
            }) 
        default:
            return {todolists: [  
                {
                    id: 1,
                    name: "Welcome to Todos",
                    todos: [
                        {
                            id: 1,
                            completed: false,
                            text: "Figure out how to work react"
                        }
                    ]
                }]
            }
    }
}
