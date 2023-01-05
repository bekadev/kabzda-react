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