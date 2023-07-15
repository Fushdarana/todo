import React from 'react'
import {AiOutlineCheck} from 'react-icons/ai'
import styles from './styles.module.css'

const Check = ({ isCompleted, onClick }) => {
    return (
        <button onClick={onClick} className={isCompleted ? styles.check : styles.notChecked}>
          {isCompleted &&
          <AiOutlineCheck />
        }
        </button>
    );
}

export default Check;
