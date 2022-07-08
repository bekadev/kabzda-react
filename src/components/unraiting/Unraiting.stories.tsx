import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Unraiting} from "./Unraiting";


export default {
    title: 'Unraiting stories',
    component: Unraiting,
}

export const EmptyStars = () => <Unraiting  />