import React, {ChangeEvent, useState} from 'react';

export type EditableSpanType = {
    title: string
}


export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const[edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)
    let editHandler = () => {
        setEdit(!edit)
    }

    const changeHadler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }
    console.log(newTitle)
    return (
        edit
        ? <input onChange={changeHadler} value={newTitle} onBlur={editHandler} autoFocus={true}/>
        : <span onDoubleClick={editHandler}>{props.title}</span>
    )
}
