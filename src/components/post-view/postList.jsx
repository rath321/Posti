import { useEffect, useState } from "react";
import ViewList from "./listView";

const PostList = (props) => {
  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   setPosts([props.post]);
  // }, [props.post]);

  console.log(posts);

  return (
    <>
      <ViewList posts={posts} />
    </>
  );
};

export default PostList;
