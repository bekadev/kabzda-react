import React, {useState} from 'react';

type PropsType = {
    title: string
}

export const Unaccordion: React.FC<PropsType> = (props) => {

    const [collapsed, Setcollapsed] = useState(false)

    const ClickHandler = () =>  {
        Setcollapsed(!collapsed)
    }
    return (
        <div>
            <AccordionTitle title={props.title}/> <button onClick={ClickHandler}>toggle</button>
            { !collapsed && <AccordionBody/>}
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