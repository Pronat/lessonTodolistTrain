import React, {useState} from 'react';

type EditableSpanPropsType = {
    title: string
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    let [edit, setEdit] = useState()
    return (
        edit
            ? <input value={props.title}/>
            : <span>{props.title}</span>
    )
};
