import React, {useState} from 'react';

export type EditableSpanType = {
    title: string
}


export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState(false)
    const editHandler = () => {
        setEdit(!edit)
    }
    return (
        edit
            ? <input value = {props.title} onBlur={editHandler} autoFocus={true}/>
            : <span onDoubleClick={editHandler}>{props.title}</span>
    )
}
