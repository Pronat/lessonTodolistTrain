import React, {ChangeEvent} from 'react';
import {Checkbox} from "@material-ui/core";

type CheckBoxType = {
    checked: boolean
    callBack: (checked:boolean) => void
}
export const CheckBox = (props: CheckBoxType) => {
    const onChangeHandler = (event: ChangeEvent<HTMLInputElement>) => {
        props.callBack(event.currentTarget.checked);
    }
    return (
            <Checkbox
                checked={props.checked}
                color="primary"
                onChange={onChangeHandler}
            />
    );
};
