import React, {useState} from 'react';

type PropsType = {
    setOn: (on: boolean) => void
}

export const UnOnOff = (props: PropsType) => {

    let [on, setOn] = useState(false)

    const onStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        fontWeight: 'normal',
        fontSize: '10px',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'white'
    }
    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        fontWeight: 'normal',
        fontSize: '10px',
        display: 'inline-block',
        backgroundColor: on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: on ? 'green' : 'red'
    }

    const onClickOnHandler = () => {
        setOn(true)
        props.setOn(true)
    }

    const onClickOffHandler = () => {
        setOn(false)
        props.setOn(false)
    }

    return (
        <div>
            <div onClick={onClickOnHandler} style={onStyle}>On</div>
            <div onClick={onClickOffHandler} style={offStyle}>Off</div>
            <div style={indicatorStyle}/>
        </div>
    );
};
