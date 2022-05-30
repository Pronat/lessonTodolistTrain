import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
   }

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState(props.title)
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = () => setEditMode(false)
    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        editMode
        ? <input value={title} onChange={onChangeTitleHandler} onBlur={deactivateEditMode} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}--{title}</span>
    )

};

