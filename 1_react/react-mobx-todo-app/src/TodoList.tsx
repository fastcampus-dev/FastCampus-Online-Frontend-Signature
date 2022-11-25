import { observer } from 'mobx-react';
import React, { useState } from 'react'
import TodoStore from './TodoStore'

interface TodoListProps {
    todoStore: TodoStore;
}

const TodoList: React.FC<TodoListProps> = observer(({ todoStore }) => {
    const [value, setValue] = useState<string>('');
    return (
        <div>
            <input
                value={value}
                onChange={event => {
                    setValue(event.target.value)
                }}
                type="text"
            />
            <button
                onClick={() => {
                    if (value) {
                        todoStore.addTodo(value);
                    }
                    setValue('');
                }}
            >
                Add
            </button>
            <div>Completed: {todoStore.status.completed}</div>
            <div>Remaining: {todoStore.status.remaining}</div>

            <ul>
                {todoStore.todos.map(todo => {
                    return (
                        <li
                            key={todo.id}
                            onClick={() => {
                                todoStore.toggleTodo(todo.id)
                            }}
                        >
                            {todo.title} [{todo.completed ? 'x' : ' '}]
                        </li>
                    )
                })}
            </ul>

        </div>
    )
})

export default TodoList