import React from 'react';
import './styles/App.css';
import PostList from "./components/PostList";
import MyBtn from "./components/UI/Button/MyBtn";

function App() {
    const [posts, setPost] = React.useState([
        {id: 1, title: "Первый блок", body: "Описание"},
        {id: 1, title: "Второй блок", body: "Описание1"},
        {id: 1, title: "Третий блок", body: "Описание2"},
        {id: 1, title: "Четвертый блок", body: "Описание3"}
    ])

  return (
      <div className="App">
          <form>
              <input type = "text" placeholder = "Название"/>
              <input type = "text" placeholder = "Описание"/>
              <MyBtn>Добавить пост</MyBtn>
          </form>
          <PostList posts={posts} title="Список постов 1"/>
      </div>
  );
}
export default App;