import React, {ChangeEvent} from 'react';
type CheckboxType = {
    isDone: boolean
    callBack: (isDone: boolean)=>void
}
export const CheckboxUniversal = (props: CheckboxType) => {
    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        props.callBack(e.currentTarget.checked)
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
