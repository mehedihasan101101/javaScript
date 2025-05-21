import { useLoaderData } from "react-router";
import PostCard from "./postCard";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h1>Total Post {posts.length}</h1>
            <div className="grid grid-cols-4 gap-4">
                {posts.map(post => <PostCard post={post}></PostCard>)}
            </div>
        </div>
    );
};

export default Posts;