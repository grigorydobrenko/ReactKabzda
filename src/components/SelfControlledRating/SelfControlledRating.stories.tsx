// Button.stories.ts|tsx

import React from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import {SelfControlledRating} from "./SelfControlledRating";
import {action} from "@storybook/addon-actions";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'SelfControlledRating stories',
    component: SelfControlledRating,
} as ComponentMeta<typeof SelfControlledRating>;

const callBack = action('rating changed inside component')

export const EmptyRating: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={0} onChange={callBack}/>;
export const Rating1: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={1} onChange={callBack}/>;
export const Rating2: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={2} onChange={callBack}/>;
export const Rating3: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={3} onChange={callBack}/>;
export const Rating4: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={4} onChange={callBack}/>;
export const Rating5: ComponentStory<typeof SelfControlledRating> = () => <SelfControlledRating defaultValue={5} onChange={callBack}/>;


