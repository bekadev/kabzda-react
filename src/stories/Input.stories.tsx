import React, {ChangeEvent, useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import {action} from "@storybook/addon-actions";



export default {
    title: 'components/Input stories',
    //component: Raiting,
}

export const UnControlledInput = () => {
    const [value, setValue] = useState('')
    return <><input onChange={(e) => {
            const actual = e.currentTarget.value
            setValue(actual)
        }
    }/> - {value} </>
}


export const ControlledCheckBox = () => {
    const [parentValue, setParantValue] = useState(true)

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParantValue(e.currentTarget.checked)
    }
    return <input type='checkbox' checked={parentValue} onChange={onChangeHandlerInput}/>
}

export const ControlledInput = () => {
    const [parentValue, setParantValue] = useState('')

    const onChangeHandlerInput = (e: ChangeEvent<HTMLInputElement>) => {
        setParantValue(e.currentTarget.value)
    }
    return <input value={parentValue} onChange={onChangeHandlerInput}/>
}

export const ControlledSelected = () => {
    const [parentValue, setParantValue] = useState<string | undefined>('2')

    const onChangeHandlerInput = (e: ChangeEvent<HTMLSelectElement>) => {
        setParantValue(e.currentTarget.value)
    }
    return <select value={parentValue} onChange={onChangeHandlerInput}>
        <option>none</option>
        <option value={1}>minsk</option>
        <option value={2}>astana</option>
        <option value={3}>almaty</option>
    </select>
}

