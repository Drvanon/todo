const initialState = {
    templist: "My first list",
    todolists: [  
        {
            id: 1,
            name: "Welcome to Todos",
            temptext: "TempText",
            todos: [
                {
                    id: 1,
                    finished: false,
                    text: "Figure out how to work react"
                }
            ]
        }
    ]
}



function todolist (state, action) {
    switch (action.type) {
        case "CHANGE_TEMP_TODO":
            const { text, listid } = action.payload
            if (state.id != listid) {
                return state
            } else {
                return {
                    ...state,
                    temptext: text
                }
            }

        case "ADD_TODO":
            if (state.id != action.payload.listid) {
                return state 
            } else {
                return {
                    ...state,
                    temptext: "",
                    todos: [
                        ...state.todos,
                        {
                            text: action.payload.text,
                            id: Date.now(),
                            finished: false
                        }
                    ]

                }
            }

        case "REMOVE_TODO_LIST":
            console.log(state.id, action.payload, state.id != action.payload)
            if (state.id != action.payload) {
                console.log('ehh')
                return state
            }

        case "REMOVE_TODO":
            return {
                ...state,
                todos: state.todos.filter(
                    (todo) => todo.id != action.payload)
            }
    }
} 

export default function reducer(state, action) {
    switch (action.type) {
        case "CHANGE_TEMP_TODO":
        case "ADD_TODO": 
        case "REMOVE_TODO":
            return  {
                ...state,
                todolists: state.todolists.map(
                    (list) => todolist(list, action)
                )
            }

        case "REMOVE_TODO_LIST":
            return {
                ...state,
                todolists: state.todolists.filter((list) => list.id != action.payload)
            }
        case "ADD_TODO_LIST":
            return {
                ...state,
                todolists: [
                    ...state.todolists,
                    {id: Date.now(), todos:[], name: action.payload.name, temptext: ""}
                ],
                templist: ""
            }

        case "CHANGE_TEMP_LIST":
            return {
                ...state,
                templist: action.payload.text
            }

        default:
            return initialState
    }
}
