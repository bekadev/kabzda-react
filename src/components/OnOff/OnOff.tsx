import React, {useState} from 'react';

type PropsType = {
    on: boolean
    setOn: (on: boolean) => void
}

export const OnOff = (props: PropsType) => {



    const onStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        fontWeight: 'normal',
        fontSize: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'white'
    }
    const offStyle = {
        width: '20px',
        height: '20px',
        border: '1px solid black',
        fontWeight: 'normal',
        fontSize: '10px',
        display: 'inline-block',
        backgroundColor: props.on ? 'white' : 'red'

    }
    const indicatorStyle = {
        width: '10px',
        height: '10px',
        borderRadius: '5px',
        border: '1px solid black',
        display: 'inline-block',
        backgroundColor: props.on ? 'green' : 'red'
    }

    const onClickOnHandler = () => {
        props.setOn(true)
    }

    const onClickOffHandler = () => {
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
