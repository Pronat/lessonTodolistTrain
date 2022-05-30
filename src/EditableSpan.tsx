import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
   }

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    let [editMode, setEditMode] = useState(false)
    const activateEditMode = () => setEditMode(true)
    const deactivateEditMode = () => setEditMode(false)
    return (
        editMode
        ? <input value={props.title} onBlur={deactivateEditMode} autoFocus />
        : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )

};

