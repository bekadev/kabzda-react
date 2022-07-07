import React from 'react';

type PropsType = {
    title: string
}

export const Accordion: React.FC<PropsType> = (props) => {
    return (
        <div>
            <p>{props.title}</p>
        </div>
    );
};