import React, {useEffect, useState} from 'react'
import ToDoItem from './item/ToDoItem'
import styles from './item/styles.module.css'
import CrearetoDoField from './create-to-do/CrearetoDoField'

const getLocalStorage = () => {
    let list = localStorage.getItem('items')
    if (list) {
        return (list = JSON.parse(localStorage.getItem('items')))
    } else {
        return []
    }
}

const Main = () => {
    const [toDoS, settoDoS] = useState(getLocalStorage())

    useEffect(() => {
        localStorage.setItem('items', JSON.stringify(toDoS))
    }, [toDoS])
    const changeToDo = (id) => {
        const copy = [...toDoS]
        const curr = copy.find(t => t.id === id)
        curr.isCompleted = !curr.isCompleted
        settoDoS(copy)
    }

    const removeToDo = (id) => {
        settoDoS(toDoS.filter(t => t.id !== id))
    }

    const editToDo = (id, value) => {
        settoDoS(toDoS.map(t => t.id === id ? {
            ...t,
            title: value
        } : t))
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.main}>
                <h1 className={styles.h1}>Tasks</h1>
                <CrearetoDoField toDoS={toDoS} settoDoS={settoDoS}/>
                <div className={styles.scrollWrapper}>
                    {
                        toDoS.map(toDo => (
                        <ToDoItem
                            key={toDo.id}
                            toDo={toDo}
                            changeToDo={changeToDo}
                            removeToDo={removeToDo}
                            editToDo={editToDo}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Main
