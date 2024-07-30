import React from 'react';
import Iten from "./Iten";

const PostList = ({posts, title, remove}) => {
    return (
        <div>
            <h1 style={{textAlign: "center"}}>{title}</h1>
            {posts.map((post, index) =>
                <Iten remove={remove} number={index} post={post}/>
            )}
        </div>
    );
};

export default PostList;