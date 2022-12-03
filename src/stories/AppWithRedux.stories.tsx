import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Task} from "../Task";
import {action} from "@storybook/addon-actions";
import AppWithRedux from "../AppWithRedux";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'TODOLISTS/AppWithRedux',
    component: AppWithRedux,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {},
} as ComponentMeta<typeof Task>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof AppWithRedux> = (args) => <AppWithRedux {...args} />;

export const AppWithReduxExample = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

AppWithReduxExample.args = {}