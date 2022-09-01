// Button.stories.ts|tsx

import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Rating, RatingValueType} from "./Rating";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/Select stories',
    component: Rating,
} as ComponentMeta<typeof Rating>;

export const EmptyRating: ComponentStory<typeof Rating> = () => <Rating value={0} onClick={x => x}/>;
export const Rating1: ComponentStory<typeof Rating> = () => <Rating value={1} onClick={x => x}/>;
export const Rating2: ComponentStory<typeof Rating> = () => <Rating value={2} onClick={x => x}/>;
export const Rating3: ComponentStory<typeof Rating> = () => <Rating value={3} onClick={x => x}/>;
export const Rating4: ComponentStory<typeof Rating> = () => <Rating value={4} onClick={x => x}/>;
export const Rating5: ComponentStory<typeof Rating> = () => <Rating value={5} onClick={x => x}/>;
export const RatingChanging: ComponentStory<typeof Rating> = () => {
    const [rating, setRating] = useState<RatingValueType>(3);
    return <Rating value={rating} onClick={setRating}/>;
}

