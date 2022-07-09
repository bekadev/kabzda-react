import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Accordion} from "./Accordion";

export default {
    title: 'components/Accordion stories',
    component: Accordion,
}

export const AccordionOffMode = () => <Accordion
    onClick={action('click')}
    onChange={action('click')}
    title={'tab'} collapsed={true}
    items={[]}
/>
export const AccordionOnMode = () => <Accordion
    onClick={action('click')}
    onChange={action('click')}
    title={'tab'} collapsed={false}
    items={
        [
            {title: 'beka', value: 1},
            {title: 'kyzyrbayev', value: 2},
            {title: 'almaty', value: 3},
            {title: 'astana', value: 4}
        ]
    }
/>

export const ChangeMode = () => {
    const [value, setValue] = useState<boolean>(true)
    return <Accordion
        collapsed={value}
        title={'tab'}
        onChange={() => setValue(!value)}
        onClick={action('click')}
        items={
            [
                {title: 'beka', value: 1},
                {title: 'kyzyrbayev', value: 2},
                {title: 'almaty', value: 3},
                {title: 'astana', value: 4}
            ]
        }
    />
}