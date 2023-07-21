import { useContext, useEffect } from "react";
import { PostsContext } from "../../contexts/PostProvider/context";
import { loadPosts } from "../../contexts/PostProvider/actions";

export const Posts = () => {
  const postContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postContext;

  useEffect(() => {
    loadPosts(postsDispatch);
  }, [postsDispatch]);

  return (
    <div>
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
