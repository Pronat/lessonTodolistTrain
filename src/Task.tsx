import React from 'react';
import {Checkbox, IconButton} from "@material-ui/core";
import {EditableSpan} from "./EditableSpan";
import {Delete} from "@material-ui/icons";
import {TaskType} from "./Todolist";

export type TaskPropsType = {
    task: TaskType

}

export const Task = (props: TaskPropsType) => {
    return (
        <div key={t.id} className={t.isDone ? "is-done" : ""}>
            <Checkbox
                checked={t.isDone}
                color="primary"
                onChange={onChangeHandler}
            />

            <EditableSpan value={t.title} onChange={onTitleChangeHandler} />
            <IconButton onClick={onClickHandler}>
                <Delete />
            </IconButton>
        </div>
    );
};
