export function changeTempTodoText (text, listid) {
    return {
        type: "CHANGE_TEMP_TODO",
        payload: {
            text,
            listid
        }
    }
}

export function addTodoList (name) {
    return {
        type: "ADD_TODO_LIST",
        payload: {
            name
        }
    }
}

export function removeTodoList (id) {
    return {
        type: "ADD_TODO_LIST",
        payload: id
    }
}

export function addTodo (text, listid) {
    return {
        type: "ADD_TODO",
        payload: {text, listid}
    }
}

export function removeTodo (id) {
    return {
        type: "REMOVE_TODO",
        payload: id
    }
}

export function finishTodo (id) {
    return {
        type: "FINISH_TODO",
        payload: id
    }
}

export function unfinishTodo (id) {
    return {
        type: "UNFINISH_TODO",
        payload: id
    }
}

