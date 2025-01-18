import React, { useEffect, useState } from 'react';
import Suggestions from './Suggestions';

const AutoSearch = () => {
    const [users, setUsers] = useState(false);
    const [serachParams, setSearchParams] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredUsers, setFilteredUsers] = useState([]);

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchParams(query);
        const filtereddata = users && users.length ? 
        users.filter(user =>
            user.toLowerCase().indexOf(query) > -1
        ) : [];

        if (filtereddata) {
            setFilteredUsers(filtereddata);
            setShowDropdown(true);
        }
    };

    const handleClick = (event) => {
        setShowDropdown(false);
        setSearchParams(event.target.innerText);
        setFilteredUsers([]);
    };

    const fetchListOfUsers = () => {
        fetch("https://dummyjson.com/users?limit=100000")
        .then(res => {
            const data = res.json();
            return data;
        }).then(data => {
            if (data && data.users && data.users.length) {
                setUsers(data.users.map(user => user.firstName));
            }
        }).catch(err => {
            console.log(err);
        });
    };

    useEffect(() => {
        fetchListOfUsers();
    },[]);


    return (
        <div className='search-container'>
            <input 
                type='text'
                name='search-users'
                placeholder='Search users'
                value={serachParams}
                onChange={handleChange}
            />
            {
                showDropdown && <Suggestions handleClick={handleClick} data={filteredUsers} />
            }
        </div>
    );
};

export default AutoSearch
