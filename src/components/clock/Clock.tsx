import {useEffect, useState} from 'react';

type PropsType = {}


export const Clock: React.FC<PropsType> = (props) => {
    const [date, setDate] = useState(new Date())

    useEffect(() => {


        const intervalID =  setInterval(() => {
            console.log('TICK')
            setDate(new Date())
        }, 1000)

        return () => {
            clearInterval(intervalID)
        }
    }, [])

    const gate2digitsString = (number: number) => number < 10 ? '0' + number : number

    // const secondsString = date.getSeconds() < 10
    //     ? '0' + date.getSeconds()
    //     : date.getSeconds()
    // const minutestString = date.getMinutes() < 10
    //     ? '0' + date.getMinutes()
    //     : date.getMinutes()
    // const hoursString = date.getHours() < 10
    //     ? '0' + date.getHours()
    //     : date.getHours()

    return <div>
        <span>{gate2digitsString(date.getHours())}</span>
        :
        <span>{gate2digitsString(date.getMinutes())}</span>
        :
        <span>{gate2digitsString(date.getSeconds())}</span>
    </div>
};
