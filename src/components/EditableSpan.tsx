import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    let [edit, setEdit] = useState(false)
    const onDoubleClickHandler = () => {
        setEdit(!edit)
    }
    return (
        edit
            ? <input value={props.title}/>
            : <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
};
