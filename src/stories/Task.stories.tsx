import React, {ChangeEvent, useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Button} from './Button';
import {Task} from "../Task";
import {TaskType} from "../Todolist";
import {action} from "@storybook/addon-actions";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Todolist/Task',
    component: Task,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes

  args: {
    // changeTaskStatus: action('changeTaskStatus'),
    // changeTaskTitle: action('changeTaskTitle'),
    // removeTask: action('removeTask'),
    // todolistId: 'rgr',
  }

} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => {
  const [task, setTask] = useState({id: 'dfdv', title: 'frfr', isDone: true})
  const changeTaskStatus = () => setTask({id: 'dfdv', title: 'frfr', isDone: !task.isDone})

  const changeTaskTitle = (title: string) => {
    setTask({id: 'dfdv', title: title, isDone: task.isDone})
  }

  return <Task changeTaskStatus={changeTaskStatus} changeTaskTitle={changeTaskTitle} removeTask={()=>action('removeTask')} task={task} todolistId={"qqqqq"}/>
}

// export const TaskIsDoneStories = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// TaskIsDoneStories.args = {
//     todolistId: 'rgr',
// };
//
// export const TaskIsNotDoneStories = Template.bind({});
// // More on args: https://storybook.js.org/docs/react/writing-stories/args
// TaskIsNotDoneStories.args = {
//     task: {id: 'dfdv', title: 'frfr', isDone: false},
// };

