import { Todo } from "./Todo"

export type TodoState = Todo[]

type AddTodo = {
    type: 'ADD',
    payload: Todo | Todo[]
}

type TodoWithOptionalProps = {
    [Key in keyof Todo]?: Todo[Key]
}

type ChangeTodo = {
    type: 'CHANGE',
    payload: TodoWithOptionalProps & { index: number }
}

type DeleteTodo = {
    type: 'DELETE',
    payload: { index: number }
}

export type TodoActions = AddTodo | ChangeTodo | DeleteTodo