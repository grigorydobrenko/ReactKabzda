// Button.stories.ts|tsx

import React  from 'react';

import {ComponentMeta, ComponentStory} from '@storybook/react';

import {Clock} from "./Clock";



export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/Clock',
    component: Clock

} as ComponentMeta<typeof Clock>;

const Template: ComponentStory<typeof Clock> = (args) => <Clock {...args} />;

export const Primary = Template.bind({});
// Primary.args = { backgroundColor: '#ff0', label: 'Button' };


