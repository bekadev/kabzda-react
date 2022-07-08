import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {OnOff} from "./OnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'OnOff stories',
    component: OnOff,
}

export const OnMode = () => <OnOff on={true} setOn={action('clicked')}/>
export const OffMode = () => <OnOff on={false} setOn={action('clicked')}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <OnOff setOn={setValue} on={value}/>
}