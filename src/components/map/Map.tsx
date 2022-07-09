import React from 'react';

type StudentsPropsType = {
    id: number
    name: string
    age: number
}

type MapPropsType = {
    students: Array<StudentsPropsType>
    nameBase: Array<StudentsPropsType>
}

export const Map: React.FC<MapPropsType> = (props) => {
    return (
        <div>
            <ul>
                {props.students.map(el => <li key={el.id}>{el.name} <span>age: {el.age}</span></li>)}
            </ul>
            <ul>
                {props.nameBase.map(element => <li>{element.id}</li> )}
            </ul>
        </div>
    );
};