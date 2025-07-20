import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/header/Navbar';

const Main = () => {
    return (
        <>
            <Navbar></Navbar>
            <div className='w-[90%] m-auto'>
                <Outlet></Outlet>
            </div>


        </>

    );
};

export default Main;