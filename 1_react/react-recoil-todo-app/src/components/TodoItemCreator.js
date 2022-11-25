import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../todoAtoms'

const TodoItemCreator = () => {
    const [inputValue, setInputValue] = useState("");
    const setTodoList = useSetRecoilState(todoListState);

    const handleChange = (event) => {
        setInputValue(event.target.value);
    }

    const addItem = () => {
        setTodoList((oldTodoList) => [
            ...oldTodoList,
            {
                id: getId(),
                text: inputValue,
                isComplete: false
            }
        ])
        setInputValue('');
    }
    
    return (
        <div>
            <input type="text" value={inputValue} onChange={handleChange} />
            <button onClick={addItem}>Add</button>
        </div>
    )
}

// 고유한 id 생성을 위한 유틸리티
let id = 0;
function getId() {
    return id++;
}

export default TodoItemCreator