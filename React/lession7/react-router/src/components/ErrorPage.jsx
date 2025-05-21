import React from 'react';
import { useNavigate } from 'react-router';

const ErrorPage = () => {
    const navigate = useNavigate()
    function goBackKutta(){
        navigate(-1);
    }
    return (
        <div>
            <h1>Hisa Mari Tor kopale</h1>

            <button onClick={goBackKutta} className='cursor-pointer'>Back</button>
        </div>
    );
};

export default ErrorPage;