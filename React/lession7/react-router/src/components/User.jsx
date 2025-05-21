import { useLoaderData } from "react-router";


const User = () => {
    const user = useLoaderData();
    const {name} = user
    return (
        <div>
            <h1> Hi I am  A user name "{name}"</h1>
        </div>
    );
};

export default User;