import React, {useState} from 'react';

type EditableSpanType = {
    value: string
    onChange: (newTitle: string)=>void

}
export const EditableSpan: React.FC<EditableSpanType> = ({value, onChange}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState(value)
    const activateEditMode = () => {
        setEdit(true)
        setNewTitle(value)
    }
    const activateViewMode = () => {
        setEdit(false)
        onChange(newTitle)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
        ? <input value={newTitle} autoFocus={true} onBlur={activateViewMode} onChange={onChangeHandler}/>
        : <span onDoubleClick={activateEditMode}>{value}</span>
    );
};

