import React from 'react';
import {FilterValuesType} from "../App";

export type SuperButtonPropsType = {
    name: string
    callBack: () => void
    filter: FilterValuesType
}
export const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <div>
            <button
                className={props.filter === props.name ? "active-filter" : ""}
                onClick={props.callBack}>{props.name}</button>
        </div>
    );
};

