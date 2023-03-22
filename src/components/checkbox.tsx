import React from 'react';
type CheckboxType = {
    isDone: boolean
    callBack: ()=>void
}
export const CheckboxUniversal = (props: CheckboxType) => {
    const onChangeHandler = () => {
        props.callBack()
    }
    return (
        <div>
            <input type={'checkbox'}
                checked={props.isDone}
                color="primary"
                onChange={onChangeHandler}
            />
        </div>
    );
};
