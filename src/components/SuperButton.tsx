import React from 'react';

export type SuperButtonPropsType = {
    name: string
    callBack: () => void
}
export const SuperButton = (props: SuperButtonPropsType) => {
    return (
        <div>
            <button>{props.name}</button>
        </div>
    );
};

