export function addTodoList (name) {
    return {
        "type": "ADD_TODO_LIST",
        "payload": {
            name
        }
    }
}

export function removeTodoList (id) {
    return {
        "type": "ADD_TODO_LIST",
        "payload": id
    }
}

export function addTodo (text, list) {
    return {
        "type": "ADD_TODO",
        "payload": {text, listid: list}
    }
}

export function removeTodo (id) {
    return {
        "type": "REMOVE_TODO",
        "payload": id
    }
}

export function finishTodo (id) {
    return {
        "type": "FINISH_TODO",
        "payload": id
    }
}

export function unfinishTodo (id) {
    return {
        "type": "UNFINISH_TODO",
        "payload": id
    }
}
