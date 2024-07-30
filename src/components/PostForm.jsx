import React from 'react';
import MyInp from "./UI/Input/MyInp";
import MyBtn from "./UI/Button/MyBtn";

const PostForm = ({create}) => {
    const [post, setPost] = React.useState({title: '', body: ''})

    const addNewPost = (e) =>{
        e.preventDefault()
        const newPost = {
            ...post, id: Date.now()
        }
        create(newPost)
        setPost({title: '',  body: ''})
    }
    return (
            <form style={{marginTop: "15px"}}>
                <MyInp
                    onChange={e => setPost({...post, title: e.target.value})}
                    value={post.title}
                    type="text"
                    placeholder="Название"/>
                <MyInp
                    onChange={e => setPost({...post, body: e.target.value})}
                    value={post.body}
                    type="text"
                    placeholder="Описание"/>
                <MyBtn onClick={addNewPost}>Добавить пост</MyBtn>
            </form>
    );
};

export default PostForm;