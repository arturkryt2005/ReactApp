import React from 'react';
import Iten from "./Iten";

const PostList = ({posts, title}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post) =>
                <Iten post = {post} key = {post.id}/>
            )}
        </div>
    );
};

export default PostList;