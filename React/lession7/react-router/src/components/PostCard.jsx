import React from 'react';
import { Link } from 'react-router';

const PostCard = ({post}) => {
    const { userId, title, body } = post
    return (
        <div className='border rounded p-5 space-y-3  border-purple-400'>
            <p>user Id : {userId}</p>
            <p>{title}</p>
            <p>{body}</p>
            <Link to={`${post.id}`} className="p-2 bg-purple-200" >Read More</Link>
        </div>
    );
};

export default PostCard;