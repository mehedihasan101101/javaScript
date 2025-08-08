import { useContext } from "react";
import { AutContext } from "../../context/authContext";


const Profile = () => {
    const { user } = useContext(AutContext);
    return (

        <div className="flex items-center w-full justify-center ">

            <div className="card  flex flex-col items-center py-4 bg-base-100 w-full max-w-sm  shadow-2xl mt-20">
                <img className="rounded-full w-40" src={user?.photoURL} alt="" />
                <h1 className="font-bold text-2xl">{user?.displayName}</h1>
                <h1>{user?.email}</h1>
                {user?.emailVerified && <p className="text-green-600">Verified User</p>}

                <p className="text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla ex ipsa corrupti sed sequi doloribus fugit reiciendis porro, quod pariatur.</p>
            </div>

        </div>
    );
};

export default Profile;