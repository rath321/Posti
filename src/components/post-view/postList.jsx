import { useEffect, useState } from "react";
import ViewList from "./listView";

const PostList = (props) => {
  // console.log(props)
// useEffect(()=>{

// })
  

  return (
    <>
      <ViewList posts={props.posts.posts} />
    </>
  );
};

export default PostList;
