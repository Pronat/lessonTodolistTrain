import React from 'react';

type EditableSpanType = {
    title: string
    editMode: boolean
}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {
    return (
        props.editMode
        ? <input value={props.title}/>
            :   <span>{props.title}</span>

    );
};
