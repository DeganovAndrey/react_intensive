import type { TPostList } from "../../../widgets/PostList/PostList";

type TPostCard = Pick<TPostList, "title" | "body">;

const PostCard = ({ title, body }: TPostCard) => {
  return (
    <li>
      <h2>{title}</h2>
      <p>{body}</p>
    </li>
  );
};

export default PostCard;
