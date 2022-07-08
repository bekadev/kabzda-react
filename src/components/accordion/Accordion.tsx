import React from 'react';

type PropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
}

export const Accordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <AccordionTitle
                onChange={props.onChange}
                title={props.title}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitle = {
    title: string
    onChange: () => void
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <div>
            <p onClick={props.onChange}>{props.title}</p>
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