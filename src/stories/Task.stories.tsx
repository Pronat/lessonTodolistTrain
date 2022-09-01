import React from 'react';
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

} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Task> = (args) => <Task {...args} />;

export const TaskIsDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

const baseArgs = {
  changeTaskStatus: action('changeTaskStatus'),
  changeTaskTitle: action('changeTaskTitle'),
  removeTask: action('removeTask'),
}

TaskIsDoneStory.args = {
   ...baseArgs,
    task: {id: "wfef", title: "rbrbbrbr", isDone: true},
    todolistId: 'dgdgd'
};

export const TaskIsNotDoneStory = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
TaskIsNotDoneStory.args = {
   ...baseArgs,
    task: {id: "wfef", title: "rbrbbrbr", isDone: false},
    todolistId: 'dgdgd'
};
