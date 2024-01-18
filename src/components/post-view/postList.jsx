import { useEffect, useState } from "react";
import ViewList from "./listView";

const PostList = (props) => {
  const [state, setState] = useState({ posts: [] });

  useEffect(() => {
    // console.log(state)
    setState((prevState) => ({
      posts: [...prevState.posts, props.post],
    }));
  }, [props.post]);

  return (
    <>
      <ViewList posts={state.posts} />
    </>
  );
};

export default PostList;
