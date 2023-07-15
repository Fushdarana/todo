import React, { useState } from 'react';
import { AiOutlineDelete, AiOutlineEdit } from 'react-icons/ai'
import { MdOutlineDone } from 'react-icons/md'
import styles from '../item/styles.module.css'

const EdittoDo = ({ toDo, editToDo, value, edit, setEdit }) => {

    return (
        <div>
            {edit ? (
                <button
                    className={styles.edit_btn}
                    onClick={() => {
                        editToDo(toDo.id, value)
                        setEdit(false)
                    }}

                ><MdOutlineDone className={styles.edit_svg} />
                </button>
            ) : (
                <button
                    className={styles.edit_btn}
                    onClick={() => {
                        setEdit(!edit)
                    }}
                ><AiOutlineEdit className={styles.edit_svg} />
                </button>
            )}
        </div>
    );
}

export default EdittoDo;
