import { Outlet } from "react-router";
import Header from "./Header";

const Root = () => {
    return (
        <>
            <div className="flex flex-col justify-center items-center h-[100vh]">
                <Header></Header>
                <Outlet></Outlet>
            </div>

        </>

    );
};

export default Root;