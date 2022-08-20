import React from 'react';

type EditableSpanType = {
    title: string
}

export const EditableSpan: React.FC<EditableSpanType> = (props) => {


    return (
        <span>{props.title}</span>
    );
};
