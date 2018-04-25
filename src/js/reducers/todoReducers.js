function todolist (state, action) {
    switch (action.type) {
        case "CHANGE_TEMP_TODO":
            const { text, listid } = action.payload
            if (state.id != listid) {
                return list
            } else {
                return {
                    ...state,
                    temptext: text
                }
            }

        case "ADD_TODO":
            if (state.id != action.payload.listid) {
                return list
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
    }
}

export default function reducer(state={ todolists:[] }, action) {
    switch (action.type) {
        case "CHANGE_TEMP_TODO":
            return  {
                ...state,
                todolists: state.todolists.map(
                    (list) => todolist(list, action)
                )
            }

        case "ADD_TODO_LIST":
            return {
                ...state,
                todolists: [
                    ...state.todolists,
                    {id: Date.now(), todos:[], name: action.name, temptext: ""}
                ]
            }

        case "ADD_TODO": 
            return {
                ...state,
                todolists: state.todolists.map(
                    list => todolist(list, action))
            }            

        case "REMOVE_TODO":
            return  Object.assign({}, state, {
                todolists: state.todolists.map((todolist, index) =>  {
                    return {
                        ...todolist,
                        todos: todolist.todos.filter((todo) => {if (todo.id != action.payload) return true}) 
                    }
                })
            }) 

        default:
            return {
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
                    }]
            }
    }
}
