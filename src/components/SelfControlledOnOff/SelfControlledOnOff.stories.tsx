// Button.stories.ts|tsx

import React, {} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import SelfControlledOnOff from "./SelfControlledOnOFF";
import {action} from "@storybook/addon-actions";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'SelfControlledAccordion',
    component: SelfControlledOnOff,
} as ComponentMeta<typeof SelfControlledOnOff>;


const callback = action('on or off clicked')


export const onMode: ComponentStory<typeof SelfControlledOnOff> = () => {
    return <SelfControlledOnOff onChange={callback} defaultOn={true} />;
}
export const offMode: ComponentStory<typeof SelfControlledOnOff> = () => {
    return <SelfControlledOnOff onChange={callback} defaultOn={false} />;
}
export const DefaultInputValue: ComponentStory<typeof SelfControlledOnOff> = () => {
    return <input defaultValue={'yo'}/>;
}

