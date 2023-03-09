import React, {useState} from 'react';

type EditableSpanType = {
    value: string
}
export const EditableSpan: React.FC<EditableSpanType> = ({value}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState(value)
    const activateEditMode = () => {
        setEdit(true)
        setNewTitle(value)
    }
    const activateViewMode = () => {
        setEdit(false)
        // setNewTitle(value)
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

