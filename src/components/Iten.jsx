import React from 'react';
import MyBtn from "./UI/Button/MyBtn";

const Iten = (props) => {

return (
        <div className="post">
            <div className="postcontainer">
                <strong>{props.number}.{props.post.title}</strong>
                <div className="postinfo">
                    {props.post.body}
                </div>
                <div className="btn">
                    <MyBtn style={{textAlign: "center"}} onClick={() => props.remove(props.post)}>Удалить</MyBtn>
                </div>
            </div>
        </div>
    );
};

export default Iten;