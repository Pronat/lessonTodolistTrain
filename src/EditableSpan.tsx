import React, {useState} from 'react';

type EditableSpanType = {
    value: string
}
export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState(props.value)
    const changeEditMode = () => {
        setEdit(!edit)
    }
    return (
        edit
            ? <input value={props.value}/>
            : <span onDoubleClick={changeEditMode}>{props.value}</span>
    );
};

