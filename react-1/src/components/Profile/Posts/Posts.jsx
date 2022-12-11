import Post from "./Post/Post";
import s from "./Posts.module.css";

const Posts = () => {
  debugger;
  return (
    <div>
      My post
      <div>NEw post</div>
      <div className={s.posts}>
        <Post mes="Oh, hello there?" likes="15" />
        <Post mes="How is it going?" likes="20" />
      </div>
    </div>
  );
};

export default Posts;
