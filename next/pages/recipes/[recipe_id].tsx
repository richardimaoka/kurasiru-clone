import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const { recipe_id } = router.query;

  return <p>Post: {recipe_id}</p>;
};

export default Post;
