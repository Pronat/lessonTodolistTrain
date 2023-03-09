import React, {useState} from 'react';

type EditableSpanType = {
    value: string
    callBack: () => void
}
export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState(props.value)
    const changeEditMode = () => {
        setEdit(!edit)
    }
    const onChangeTitleHandler = () => {
        props.callBack()
    }
    return (
        edit
            ? <input value={props.value} autoFocus={true} onBlur={changeEditMode} onChange={onChangeTitleHandler}/>
            : <span onDoubleClick={changeEditMode}>{props.value}</span>
    );
};

