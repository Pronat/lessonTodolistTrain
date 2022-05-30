import React from 'react';

type EditableSpanPropsType = {
    title: string
    editMode: boolean
}

export const EditableSpan: React.FC<EditableSpanPropsType> = (props) => {
    return (
        props.editMode
            ? <input value={props.title}/>
            : <span>{props.title}</span>
    );
};

