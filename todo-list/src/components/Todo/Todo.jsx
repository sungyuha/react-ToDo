import React from "react";
import {FaTrashAlt} from 'react-icons/fa';
import styles from './Todo.module.css';

const Todo = ({todo, onUpdate, onDelete}) => {
    const {id, text, status} = todo;
    const handleChange = (e) => {
        // 체트 할때, 체크가 된다면 completed 변수 할당해주고, 안되면 active 상태
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({ ...todo, status });
    };
    const handleDelete = () => onDelete(todo);
    return (
        <>
            <li className={styles.todo}>
                <input
                    className={styles.checkbox}
                    type='checkbox' 
                    id={id}
                    checked={status === 'completed'}
                    onChange={handleChange}
                />
                <label htmlFor={id} className={styles.text} >{text}</label>
                <button onClick={handleDelete} className={styles.button}>
                    <FaTrashAlt/>
                </button>
            </li>
        </>
    )
}

export default Todo;