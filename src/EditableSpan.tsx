import React, {useState} from 'react';

export type EditableSpanType = {
    title: string
}


export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState(false)

    return (
        edit
        ? <input value={props.title}/>
        : <span>{props.title}</span>
    );
};
