import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useTypedSelector} from "../../hooks/useTypedSelector";
import {fetchUsers} from "../../store/action-creators/user";
import {useActions} from "../../hooks/useActions";

export const UserList: React.FC = () => {
    const {error, users, loading} = useTypedSelector(state => state.user)
    const {fetchUsers} = useActions()

    useEffect(() => {
        fetchUsers() as any
    }, [])

    if (loading) {
        return <h1>Идет загрузка...</h1>
    }

    if (error) {
        return <h1>{error}</h1>
    }


    return (
        <div>
            {users.map(u => <div key={u.id}>{u.name}</div>)}
        </div>
    );
};