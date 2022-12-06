import React, { useState } from "react";
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css';

const AddTodo = ({onAdd}) => {
    const [text, setText] = useState('');
    // 이벤트 발생하면
    const handleChange = (e) => setText(e.target.value);
    const handleSubmit = (e) => {
        // 코드 블럭
        e.preventDefault(); // 페이지 리프레쉬 X

        // 사용자가 입력하지 않으면 추가 되지 않음
        // trim 으로 앞 뒤 여백 삭제
        if(text.trim().length === 0) {
            return;
        }
        //onAdd({id: '고유한 값', text, status: 'active'});
        onAdd({id: uuidv4(), text, status: 'active'});

        // 문자열 초기화
        setText('');
    }
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    className={styles.input}
                    type='text' 
                    placeholder='추가하기' 
                    value={text} 
                    onChange={handleChange}
                />
                <button className={styles.button}>추가</button>
            </form>
        </>
    )
}

export default AddTodo;