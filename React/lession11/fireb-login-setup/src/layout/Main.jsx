
import { Outlet } from 'react-router';
import Nav from '../components/nav/Nav';


const Main = () => {
    return (
        <>
            <Nav></Nav>
            <Outlet></Outlet>
        </>
    );
};

export default Main;