import React from 'react';

type PropsType = {
    title: string
    collapsed: boolean
}

export const Accordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <AccordionTitle title={props.title}/>
            { !props.collapsed && <AccordionBody/>}
        </div>
    );
};

type AccordionTitle = {
    title: string
}

const AccordionTitle = (props: AccordionTitle) => {
    return (
        <div>
            <p>{props.title}</p>
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