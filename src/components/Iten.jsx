import React from 'react';
import MyBtn from "./UI/Button/MyBtn";

const Iten = (props) => {
console.log(props);
return (
        <div className="post">
            <div className="postcontainer">
                <strong>{props.post.id}.{props.post.title}</strong>
                <div className="postinfo">
                    {props.post.body}
                </div>
                <div className="btn">
                    <MyBtn>
                        Удалить
                    </MyBtn>
                </div>
            </div>
        </div>
    );
};

export default Iten;