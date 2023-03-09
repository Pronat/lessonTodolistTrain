import React, {useState} from 'react';

type EditableSpanType = {
    value: string
}
const EditableSpan: React.FC<EditableSpanType> = ({value}) => {
    const [edit, setEdit] = useState(false)
    const EditHandler = () => {
        setEdit(!edit)
    }

    return (
        edit
            ? <input value={value} onBlur={EditHandler} autoFocus={true}/>
            : <span onDoubleClick={EditHandler}>{value}</span>
    );
};

export default EditableSpan;