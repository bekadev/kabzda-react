import React, {useState} from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {UserList} from "./components/ReduxComponents/UserList";




function AppWithRedux() {
    const dispatch = useDispatch();

    const cash = useSelector(state => state)
    console.log(cash)

    return (
        <>
            <UserList/>
        </>
    )
}

export default AppWithRedux;
