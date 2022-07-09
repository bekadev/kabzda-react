import React from 'react';

type ItemType = {
    title: string
    value: any
}

type PropsType = {
    title: string
    collapsed: boolean
    onChange: () => void
    items: ItemType[]
    onClick: (value: any) => void
}

export const Accordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <AccordionTitle
                onChange={props.onChange}
                title={props.title}/>
            { !props.collapsed && <AccordionBody items={props.items} onClick={props.onClick}/>}
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

type AccordionBodyPropsType = {
    items: ItemType[]
    onClick: (value: any) => void
}


const AccordionBody = (props: AccordionBodyPropsType) => {
    return (
        <div>
            <ul>
                {props.items.map((i, index) => <li onClick={() => {props.onClick(i.value)}} key={index}>{i.title}</li>)}
            </ul>
        </div>
    );
};