import React, {ChangeEvent, useState} from 'react';

type EditableSpanType = {
    title: string
    onChange: (newTitle: string) => void

}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState(false)
    let [newTitle, setNewTitle] = useState(props.title)

    const setEditOnHandler = () => {
        setEdit(true)
        setNewTitle(props.title)
    }
    const setEditOffHandler = () => {
        setEdit(false)
        props.onChange(newTitle)
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTitle(e.currentTarget.value)
    }

    return (
        edit
        ? <input value={newTitle}
                 onBlur={setEditOffHandler}
                 autoFocus={true}
                 onChange={onChangeHandler}
            />
        : <span onDoubleClick={setEditOnHandler}>{props.title}</span>
    );
};
