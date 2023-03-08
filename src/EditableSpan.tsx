import React from 'react';
type EditableSpanType = {
    value: string
}
const EditableSpan: React.FC<EditableSpanType> = ({value}) => {


    return (
        <div>
            <span>{value}</span>
        </div>
    );
};

export default EditableSpan;