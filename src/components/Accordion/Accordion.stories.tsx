// Button.stories.ts|tsx

import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/Accordion',
    component: Accordion,
    argTypes: {
        color: {
            control: 'color'
        }
    }
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')
const onClickCallback = action('item was clicked')

const Template: ComponentStory<typeof Accordion> = (args) => <Accordion {...args} />;

const callbackProps = {
    setCollapsed: callback,
    onClick: onClickCallback
}

export const menuCollapsedMode = Template.bind({})
menuCollapsedMode.args = {
    titleValue: 'Menu',
    collapsed: true,
    ...callbackProps
}


export type UsersType = Array<UserType> | undefined
type UserType = {
    id: any,
    name: string
}

export const users: UsersType = [
    {id: 1, name: 'Vanya'},
    {id: 2, name: 'Lesha'},
    {id: 3, name: 'Sergei'},
    {id: 4, name: 'Vadim'}
]


export const usersUnCollapsedMode = Template.bind({})
usersUnCollapsedMode.args = {
    titleValue: 'Users',
    collapsed: false,
    ...callbackProps
}


export const ModeChanging: ComponentStory<typeof Accordion> = (args) => {
    const [collapse, setCollapse] = useState<boolean>(true);
    return <Accordion {...args}
                      collapsed={collapse}
                      setCollapsed={setCollapse}

    />;
}


ModeChanging.args = {
    titleValue: 'ModeChanging',
    color: 'green',
    users: users,
    onClick: onClickCallback

}







