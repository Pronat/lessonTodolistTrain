import React, {ChangeEvent, KeyboardEvent, useRef, useState} from 'react';

type FullInputType = {
    callBack: (newTitle: string) => void
}

export const FullInput = (props: FullInputType) => {

    let myRef = useRef<HTMLInputElement | null>(null)

    // let [title, setTitle] = useState("")
    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    //     setTitle(e.currentTarget.value)
    // }
    let [error, setError] = useState<string | null>(null)
    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        setError(null);
        if (e.charCode === 13) {
            addTask();
        }
    }

    const addTask = () => {
        if (myRef.current) {
            props.callBack(myRef.current?.value)
            myRef.current.value = ''
        }
    }

    // const addTask = () => {
    //     let newTitle = title.trim();
    //     if (newTitle !== "") {
    //         props.callBack(newTitle);
    //         setTitle("");
    //     } else {
    //         setError("Title is required");
    //     }
    // }
    return (
        <div>
                <input
                       // onChange={onChangeHandler}
                    ref={myRef}
                       onKeyPress={onKeyPressHandler}
                       className={error ? "error" : ""}
                />
                <button onClick={addTask}>+</button>
                {error && <div className="error-message">{error}</div>}
            </div>
    );
};
