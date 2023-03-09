import React, {useState} from 'react';

type EditableSpanType = {
    value: string
    callBack: (newTitle: string) => void
}
export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState<boolean>(false)
    const [editTitle, setEditTitle] = useState(props.value)
    const changeEditMode = () => {
        setEdit(!edit)
        props.callBack(editTitle)
    }
    const onChangeTitleHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditTitle(e.currentTarget.value)
            }


    return (
        edit
            ? <input value={editTitle} autoFocus={true}
                     onBlur={changeEditMode} onChange={onChangeTitleHandler}/>
            : <span onDoubleClick={changeEditMode}>{props.value}</span>
    );
};

