import React, { useState } from 'react';
import styles from '../item/styles.module.css'
import { AiOutlineEnter } from 'react-icons/ai'

const CrearetoDoField = ({ setItems, toDoS, settoDoS }) => {
    const [title, setTitle] = useState('')

    const addtoDo = (title) => {
        settoDoS(prev => [
            {
                id: new Date(),
                title,
                isCompleted: false,
            }, ...prev])
        setTitle('')
    }



    return (
        <div className={styles.create__input}>
            <input
                className={styles.addNew}
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && addtoDo(title)}
                placeholder='Enter ToDo'
            >
            </input>
            <button onClick={() => addtoDo(title)} className={styles.create_btn}><AiOutlineEnter className={styles.create_svg} /></button>
        </div>
    );
}

export default CrearetoDoField;
