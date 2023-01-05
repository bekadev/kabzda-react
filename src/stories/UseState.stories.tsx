import React, {useMemo, useState} from 'react';

export default {
    title: 'UseSate demo',
}

const generateDate = () => {
    console.log('generateDate')
    return 1
}

export const Example1 = () => {
    console.log('example')

    // const initValue = useMemo(generateDate, [])
    const [counter, setCounter] = useState(generateDate)

    const changer = (state: number) => {
        return state + 1
    }


    return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}