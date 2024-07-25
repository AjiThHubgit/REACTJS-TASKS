import React, { useEffect, useState, createContext } from 'react';
import { data } from '../utils/constant';
import Title from './Title';
import Filter from './Filter';
import UserData from './UserData';
import { setValueToLocalStorage } from '../utils/service';

export const UserContext = createContext();
const Table = () => {
    console.log('Rendering Table Component');
    const [userList, setUserList] = useState([]);
    const [filteredList, setFilteredList] = useState([]);
    const [filterClicked, setFilterClicked] = useState(false);

    useEffect(() => {
        setUserList(data);
    }, []);

    useEffect(() => {
        setValueToLocalStorage("user_list", userList)
    }, [userList]);

    return (
        <UserContext.Provider value={userList}>
            <Title title="User Table Information" />
            <Filter setFilteredList={setFilteredList} setFilterClicked={setFilterClicked} />
            <UserData filteredList={filteredList} filterClicked={filterClicked} />
        </UserContext.Provider>
    );
}

export default Table;


// What Happens in Detail
//     First Render: The Table component logs its rendering and mounts its children.
//     useEffect Execution: After the first render, setUserList(data) is called, which updates the state.
//     Second Render: The Table component re-renders due to the state update. This causes:
//     Title to render (logs its message).
//     Filter to render (logs its message).
//     UserData to render (logs its message).