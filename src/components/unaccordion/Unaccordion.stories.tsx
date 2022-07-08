import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Unaccordion} from "./Unaccordion";

export default {
    title: 'components/Unaccordion stories',
    component: Unaccordion,
}

export const UnaccordionMode = () => <Unaccordion title={'click'}/>
