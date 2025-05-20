
import { Outlet } from 'react-router';
import Header from './Header';

const Home = () => {
    return (
        <div className=''>
            <Header></Header>
            <Outlet>
               
            </Outlet>
        </div>
    );
};

export default Home;