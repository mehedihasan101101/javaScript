import { Link } from "react-router";


const UserCard = ({ user }) => {
    const { name, email, website
    } = user;
    return (
        <div className="border border-purple-500 bg-purple-50 rounded p-5 space-y-4">
            <p>
                Name: {name};
            </p>
            <p>
                Email: {email};
            </p>
            <p>
                website
                : {website
                }
            </p>

            <Link className=" border py-2 px-2" to={`${ user.id}`}>Learn More</Link>

        </div>
    );
};

export default UserCard;