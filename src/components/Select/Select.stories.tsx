// Button.stories.ts|tsx

import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import {Select} from "./Select";
import {UsersType} from "../Accordion/Accordion";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/Select',
    component: Select,
} as ComponentMeta<typeof Select>;


const users: UsersType = [
    {id: 1, name: 'Vanya'},
    {id: 2, name: 'Lesha'},
    {id: 3, name: 'Sergei'},
    {id: 4, name: 'Vadim'}
]


export const CustomSelect: ComponentStory<typeof Select> = (args) => {
    const [value, setValue] = useState(users[0].name);
    return <Select {...args}
                   value={value}
                   onChange={setValue}

    />;
}


CustomSelect.args = {

    users: users,


}







