import React, {ChangeEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";



export default {
    title: 'components/ControlledInput stories'
}


const ControlledInput = () =>{
    const [value, setValue] = useState('')
    return <InputComponent value={value} setValue={setValue}/>
}

type InputComponentPropsType = {
    value: string
    setValue: (value: string) => void
}

const InputComponent = (props: InputComponentPropsType) => {
    return <input type="text" />
}