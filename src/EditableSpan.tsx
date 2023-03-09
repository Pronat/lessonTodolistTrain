import React, {useState} from 'react';

type EditableSpanType = {
    value: string
}
export const EditableSpan: React.FC<EditableSpanType> = ({value}) => {
    const [edit, setEdit] = useState<boolean>(false)
    const editHandler = () => {
        setEdit(true)
    }
    const editHandlerOnBLur = () => {
        setEdit(false)
    }
    return (
        edit
        ? <input value={value} autoFocus={true} onBlur={editHandlerOnBLur}/>
        : <span onDoubleClick={editHandler}>{value}</span>
    );
};

