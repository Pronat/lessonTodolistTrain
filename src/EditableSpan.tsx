import React, {useState} from 'react';

type EditableSpanType = {
    value: string
}
export const EditableSpan: React.FC<EditableSpanType> = ({value}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState('')
    const editHandler = () => {
        setEdit(true)
    }
    const editHandlerOnBLur = () => {
        setEdit(false)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
        ? <input value={newTitle} autoFocus={true} onBlur={editHandlerOnBLur} onChange={onChangeHandler}/>
        : <span onDoubleClick={editHandler}>{value}</span>
    );
};

