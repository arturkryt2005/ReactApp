import React from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import PostForm from "./components/PostForm";
import MySelect from "./components/UI/Select/MySelect";

function App() {
    const [posts, setPosts] = React.useState([
        {id: 1, title: "ааа", body: "ббб"},
        {id: 2, title: "ббб", body: "ааа"},
        {id: 3, title: "яяя", body: "яяяя"},
        {id: 4, title: "нннн", body: "ггг"}
    ])

const createPost = (newPost) => {
    setPosts([...posts, newPost])
}

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const [selectedSort, setSelectedSort] = React.useState('')

    const sortPosts = (sort) => {
        setSelectedSort(sort);
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }


  return (
      <div className="App">
         <PostForm create={createPost}/>
          <div style={{marginTop: "15px"}}>
              <MySelect
                  value={selectedSort}
                  onChange={sortPosts}
                  defaultValue="Сортировать по"
                  option={[
                      {name: "по названию", value: "title"},
                      {name: "по содержанию", value: "body"}
                  ]}
              />
          </div>
          {posts.length !==0
          ?          <PostList remove = {removePost} posts={posts} title="Список постов 1"/>
          : <h1 style={{textAlign: "center"}}>Посты отсутствуют</h1>}

      </div>
  );
}
export default App;