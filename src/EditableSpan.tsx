import React, {useState} from 'react';

type EditableSpanType = {
    value: string
    callBack: (newTitle: string)=>void

}
export const EditableSpan: React.FC<EditableSpanType> = ({value, callBack}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [newTitle, setNewTitle] = useState(value)
    const UpdTask = (newTitle: string) => {
        callBack(newTitle)
    }
    // const activateEditMode = () => {
    //     setEdit(true)
    //     // setNewTitle(value)
    // }
    // const activateViewMode = () => {
    //     setEdit(false)
    //     UpdTask(newTitle)
    // }

    const changeEdit = () => {
        setEdit(!edit)
        UpdTask(newTitle)
    }
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
        ? <input value={newTitle} autoFocus={true} onBlur={changeEdit} onChange={onChangeHandler}/>
        : <span onDoubleClick={changeEdit}>{value}</span>
    );
};

