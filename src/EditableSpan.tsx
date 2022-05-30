import React, {ChangeEvent, useState} from 'react';

type EditableSpanPropsType = {
    title: string
    onChange: (value: string) => void
   }

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    let [title, setTitle] = useState('')
    const activateEditMode = () => {
        setEditMode(true)
        setTitle(props.title)
    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.onChange(title)
    }
    const onChangeTitleHandler = (e:ChangeEvent<HTMLInputElement>) => setTitle(e.currentTarget.value)

    return (
        editMode
        ? <input value={title} onChange={onChangeTitleHandler} onBlur={deactivateEditMode} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}}</span>
    )

};

