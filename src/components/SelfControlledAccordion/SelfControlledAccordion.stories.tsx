// Button.stories.ts|tsx

import React, {} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import SelfControlledAccordion from "./SelfControlledAccordion";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'SelfControlledAccordion',
    component: SelfControlledAccordion,
} as ComponentMeta<typeof SelfControlledAccordion>;


export const RatingChanging: ComponentStory<typeof SelfControlledAccordion> = () => {
    return <SelfControlledAccordion titleValue={'Menu'} />;
}

