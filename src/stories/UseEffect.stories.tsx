import React, {useEffect, useMemo, useState} from 'react';

export default {
    title: 'UseEffect demo',
}

export const Example1 = () => {
    console.log('example')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)

    useEffect(() => {
        console.log('useEffect')
        document.title = counter.toString();
    }, [counter])

    return <>
        Hello, {fake}
        <button onClick={() => setFake(fake + 1 )}>+</button>

    </>
}

export const SetTimeoutExample = () => {
    console.log('example')

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    useEffect(() => {
        setInterval(() => {
            console.log('tick: ' + counter)
            setCounter(state => state + 1)
        }, 1000)
    }, [])



    return <>
        Hello, fake {fake} counter: {counter}
    </>
}