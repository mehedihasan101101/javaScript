
import { useLoaderData, useNavigate } from 'react-router';

const Post = () => {
    const navigate = useNavigate();
    function goBack(){
        navigate("/")
    }
    const post = useLoaderData();
    const { body } = post
    return (
        <div>
            <h1>{body}</h1>
            <button onClick={goBack}>Home</button>
        </div>
    );
};

export default Post;