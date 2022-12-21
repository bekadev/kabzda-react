import React, {useMemo, useState} from 'react';

export default {
    title: 'useMemo'
}

export const Example1 = () => {

    const [a, setA] = useState<number>(5)
    const [b, setB] = useState<number>(5)

    let resultA = 1;
    let resultB = 1;

    resultA = useMemo(()=>{
        let tempResultA = 1
        for(let i = 1; i<=a; i++) {
            tempResultA *= i
        }

        return tempResultA
    },[a])


    for(let i = 1; i<=b; i++) {
        resultB *= i
    }

    return <>

        <input value={a} onChange={(e) => setA(+e.currentTarget.value)}/>
        <input value={b} onChange={(e) => setB(+e.currentTarget.value)}/>
        <hr/>
        <div>Result foe a:{resultA}</div>
        <div>Result foe b:{resultB}</div>

    </>
}


const NewMessagesCounter = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {users: Array<string>}) => {
    console.log('test')
    return <div>{
        props.users.map((u,i)=>{
            return (
                <div key={i}>{u}</div>
            )
        })
    }</div>
}
const Users = React.memo(UsersSecret)

export const Example2 = () => {
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Beka', 'Ayan', 'Alua'])

    const newArray = useMemo(()=>{
        const newArray = users.filter(u => u.indexOf('A') > -1);
        return newArray
    },[])

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        {counter}
        <Users users={newArray}/>
    </>
} 