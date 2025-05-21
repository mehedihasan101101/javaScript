import React from 'react';
import { useLoaderData } from 'react-router';
import UserCard from './UserCard';

const Users = () => {
    const allUsers = useLoaderData();
    return (
        <div>
            <p> Number of Users: {allUsers.length} </p>
            <div className='grid grid-cols-4 gap-5 p-5'>
                {allUsers.map((user) => <UserCard user={user}></UserCard>)}
            </div>

        </div>
    );
};

export default Users;