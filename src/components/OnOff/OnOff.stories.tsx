// Button.stories.ts|tsx

import React, {useState} from 'react';

import {ComponentStory, ComponentMeta} from '@storybook/react';

import OnOFF from "./OnOFF";
import {action} from "@storybook/addon-actions";

export default {
    /* 👇 The title prop is optional.
    * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
    * to learn how to generate automatic titles
    */
    title: 'components/OnOff',
    component: OnOFF,
} as ComponentMeta<typeof OnOFF>;

const callback = action('on or off clicked')


export const onMode: ComponentStory<typeof OnOFF> = () => <OnOFF switchOnOff={true} setSwitchOnOff={callback}/>;
export const offMode: ComponentStory<typeof OnOFF> = () => <OnOFF switchOnOff={false} setSwitchOnOff={callback}/>;

export const ModeChanging: ComponentStory<typeof OnOFF> = () => {
    const [onOff, setOnOff] = useState<boolean>(false);
    return <OnOFF switchOnOff={onOff} setSwitchOnOff={setOnOff}/>;
}

