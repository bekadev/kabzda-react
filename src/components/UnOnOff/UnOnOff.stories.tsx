import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {UnOnOff} from "./UnOnOff";
import {action} from "@storybook/addon-actions";

export default {
    title: 'UnOnOff stories',
    component: UnOnOff,
}

export const UnOnOffMode = () => <UnOnOff setOn={action('clicked')}/>