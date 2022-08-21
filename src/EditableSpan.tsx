import React, {ChangeEvent, useState} from 'react';

export type EditableSpanType = {
    title: string
    callBack: (newTitle: string) => void
}


export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const[edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    let editHandler = () => {
        setEdit(!edit)
        props.callBack(newTitle)
    }

    const addTask = () => {
        if (newTitle !== "") {
            addTask()
        }
    }

    const changeHadler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    return (
        edit
        ? <input onChange={changeHadler} value={newTitle} onBlur={editHandler} autoFocus={true}/>
        : <span onDoubleClick={editHandler}>{newTitle}</span>
    )
}
