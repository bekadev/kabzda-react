import React, {useState} from 'react';
import './App.css';
import {Raiting, RaitingValueType} from "./components/raiting/Raiting";
import {Accordion} from "./components/accordion/Accordion";
import {Map} from "./components/map/Map";
import {OnOff} from "./components/OnOff/OnOff";
import {Unaccordion} from "./components/unaccordion/Unaccordion";
import {Unraiting} from "./components/unraiting/Unraiting";
import {UnOnOff} from "./components/UnOnOff/UnOnOff";

function App() {

    const students = [
        {id: 1, name: "James", age: 8},
        {id: 2, name: "Robert", age: 18},
        {id: 3, name: "John", age: 28},
        {id: 4, name: "Michael", age: 38},
        {id: 5, name: "William", age: 48},
        {id: 6, name: "David", age: 58},
        {id: 7, name: "Richard", age: 68},
        {id: 8, name: "Joseph", age: 78},
        {id: 9, name: "Thomas", age: 88},
        {id: 10, name: "Charles", age: 98},
        {id: 11, name: "Christopher", age: 100},
    ]

    const nameBase = [
        {id: 1, name: "Beka", age: 21},
        {id: 2, name: "Ayan", age: 20},
        {id: 3, name: "Kuat", age: 22}
    ]

    const [raitingValue, setRaitingValue] = useState<RaitingValueType>(4)
    const [collapsed, setCollapsed] = useState<boolean>(false)

    let [on, setOn] = useState(false)

    return (
        <div>
            <div>
                <Raiting value={raitingValue}
                         onClick={setRaitingValue}/>
                <Unraiting/>
                <Accordion title={'night'}
                           collapsed={collapsed}
                           onChange={() => {
                               setCollapsed(!collapsed)
                           }}/>
                {/*<Unaccordion title={'night'}/>*/}
                {/*<OnOff on={on} setOn={setOn}/>*/}
                <hr/>
                <UnOnOff setOn={setOn}/> {on.toString()}
                <Map students={students} nameBase={nameBase}/>
            </div>
        </div>
    );
}

export default App;
