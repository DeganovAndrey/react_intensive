import { useEffect, useState } from "react";
import PostCard from "../../entities/post/ui/PostCard";

export type TPostList = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

const PostList = () => {
  const [posts, setPosts] = useState<TPostList[]>([]);

  useEffect(() => {
    const fetchLoad = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const dataFetch = await res.json();
      setPosts(dataFetch);
    };
    fetchLoad();
  }, []);

  return (
    <ul>
      {posts.map((post) => (
        <PostCard key={post.id} title={post.title} body={post.body} />
      ))}
    </ul>
  );
};

export default PostList;
