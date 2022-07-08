import React, {useState} from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import {Raiting, RaitingValueType} from "./Raiting";


export default {
    title: 'Raiting stories',
    component: Raiting,
}

export const EmptyStars = () => <Raiting value={0} onClick={x=>x} />
export const EmptyRaiting1 = () => <Raiting value={1} onClick={x=>x} />
export const EmptyRaiting2 = () => <Raiting value={2} onClick={x=>x} />
export const EmptyRaiting3 = () => <Raiting value={3} onClick={x=>x} />
export const EmptyRaiting4 = () => <Raiting value={4} onClick={x=>x} />
export const EmptyRaiting5 = () => <Raiting value={5} onClick={x=>x} />
export const ChangeRaiting = () => {
    const [raiting, setRaiting] = useState<RaitingValueType>(0)
    return <Raiting value={raiting} onClick={setRaiting} />
}