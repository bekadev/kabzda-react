import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';



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
export const ControlledInput = () => <input value={'kz'}/>
