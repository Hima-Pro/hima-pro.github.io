import { useParams } from "react-router-dom";
import useTitle from '../components/useTitle';

const Post = () => {
  let { postId } = useParams();
  useTitle(`Hima-Pro | ${postId}`);
  return (
    <>
      Post {postId}
    </>
  )
}

export default Post;