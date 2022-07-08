import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'components/Accordion stories',
    component: Accordion,
}

export const AccordionOffMode = () => <Accordion onChange={action('click')} title={'tab'} collapsed={true}/>
export const AccordionOnMode = () => <Accordion onChange={action('click')} title={'tab'} collapsed={false}/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion collapsed={value} title={'tab'} onChange={() => setValue(!value)}/>
}