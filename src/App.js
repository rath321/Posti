
import { useState } from 'react';
import './App.css';
import CreateForm from './components/create-edit/createForm';
import PostList from './components/post-view/postList';
import { Post } from './components/services/post';
function App() {
  const [state, setState]=useState({title:"", description:"",author:"", reaction:0, formValid:false });

 const addPost=(post)=>{
  // console.log(post)
    setState(post);
  }
  return (
    <div className="App">
     <CreateForm addPost={addPost}/>
     {state && state.title !== "" && <PostList post={state} />}
    </div>
  );
}

export default App;
