
import { useState } from 'react';
import './App.css';
import CreateForm from './components/create-edit/createForm';
import PostList from './components/post-view/postList';
import { Post } from './components/services/post';
import ViewList from './components/post-view/listView';
import AppRoutes from './routes/index'
function App() {
  
//   const [state, setState] = useState({ posts: [] });
//  const addPost=(post)=>{
//   console.log(post)
//   setState((prevState) => ({
//     posts: [...prevState.posts, post],
//   }));
//   }
  return (
    <div className="App">
     {/* <CreateForm addPost={addPost}/>
     {state && state.title !== "" && <ViewList posts={state.posts} />} */}
        <>
                {AppRoutes}
            </>
    </div>
  );
}

export default App;
