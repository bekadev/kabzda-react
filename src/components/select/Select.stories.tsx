import React, {useState} from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {action} from "@storybook/addon-actions";
import {Select} from "./Select";

export default {
    title: 'components/Select stories',
    component: Select,
}

export const WithValue = () => {
    const [value, setValue] = useState('2')
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Astana'},
                {value: '2', title: 'Almaty'},
                {value: '3', title: 'Taldykorgan'}
            ]} />
    </>
}

export const WithoutValue = () => {
    const [value, setValue] = useState(null)
    return <>
        <Select
            onChange={setValue}
            value={value}
            items={[
                {value: '1', title: 'Astana'},
                {value: '2', title: 'Almaty'},
                {value: '3', title: 'Taldykorgan'}
            ]} />
    </>
}


