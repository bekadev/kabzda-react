import React from 'react';
import {useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";

export const UserList: React.FC = () => {
    const {
        error,
        users,
        loading
    } = useTypedSelector(state => state.user)
    return (
        <div>
            1
        </div>
    );
};