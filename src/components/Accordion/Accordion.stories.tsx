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
    title: 'Accordion',
    component: Accordion,
} as ComponentMeta<typeof Accordion>;

const callback = action('accordion mode change event fired')


export const menuCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion  titleValue={'Menu'}
                                                                                     collapsed={true}
                                                                                     setCollapsed={callback}/>;
export const usersUnCollapsedMode: ComponentStory<typeof Accordion> = () => <Accordion titleValue={'Users'}
                                                                          collapsed={false}
                                                                          setCollapsed={callback}/>;

export const ModeChanging: ComponentStory<typeof Accordion> = () => {
    const [collapse, setCollapse] = useState<boolean>(true);
    return <Accordion titleValue={'ModeChanging'}
                      collapsed={collapse}
                      setCollapsed={setCollapse}/>;
}

