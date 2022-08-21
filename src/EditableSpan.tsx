import React, {useState} from 'react';

export type EditableSpanType = {
    title: string
}


export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    const [edit, setEdit] = useState("false")
    return  (


    <span>{props.title}</span>
)}
