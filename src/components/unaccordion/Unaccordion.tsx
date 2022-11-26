import React, {useReducer, useState} from 'react';

type PropsType = {
    title: string
}

type ActionType = {
    type: string
}

const reducer = (state: boolean, action: ActionType) => {
    if (action.type === 'TOOGLE-COLLAPSED') {
        return !state;
    }

    return state;
}

export const Unaccordion: React.FC<PropsType> = (props) => {

    // const [collapsed, Setcollapsed] = useState(false)
    const [collapsed, dispatch] = useReducer(reducer, false)

    const ClickHandler = () =>  {dispatch({type: 'TOOGLE-COLLAPSED'})}
    return (
        <div>
            <AccordionTitle title={props.title} onClick={ClickHandler}/>
            { !collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitle = {
    title: string
    onClick: () => void
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <div>
            <p onClick={props.onClick}>{props.title}</p>
        </div>
    );
};


const AccordionBody = () => {
    return (
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
            </ul>
        </div>
    );
};