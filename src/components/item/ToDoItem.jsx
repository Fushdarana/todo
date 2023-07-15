import React, { useLayoutEffect, useRef, useState } from 'react'
import Check from './Check';
import styles from '../item/styles.module.css'
import { AiOutlineDelete } from 'react-icons/ai'
import EdittoDo from '../edit-to-do/EdittoDo';


const ToDoItem = ({ toDo, changeToDo, removeToDo, editToDo }) => {
    const [edit, setEdit] = useState(false)
    const [value, setValue] = useState(toDo.title)
    const editTotleFocusRef = useRef(null)

    useLayoutEffect(() => {
        if (edit && editTotleFocusRef) {
            editTotleFocusRef.current.focus()
        }
    }, [edit])

    return (
        <div className={styles.items}>
            <div className={styles.container} >
                <Check onClick={() => changeToDo(toDo.id)} isCompleted={toDo.isCompleted} />
                {edit ? (
                    <input
                        className={styles.edit}
                        ref={editTotleFocusRef}
                        type='text'
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && editToDo(value)}
                        placeholder={value}
                    ></input>
                ) : (
                    <span className={toDo.isCompleted ? styles.overline : styles.noline}>{toDo.title}</span>
                )}
            </div>
            <div className={styles.edit_container}>
                <EdittoDo
                    toDo={toDo}
                    value={value}
                    setValue={setValue}
                    edit={edit}
                    setEdit={setEdit}
                    editToDo={editToDo} />
                <div onClick={() => removeToDo(toDo.id)}>
                    <AiOutlineDelete className={styles.delete} />
                </div>
            </div>
        </div>
    );
}

export default ToDoItem;
