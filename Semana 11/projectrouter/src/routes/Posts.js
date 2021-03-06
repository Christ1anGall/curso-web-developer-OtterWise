import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { getPost, listAllPosts } from "../services/posts";

export default function Posts() {
  const [posts, setPosts] = useState(null);
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const userId = searchParams.get("userId");

 
  useEffect(() => {
    const request = async () => {
      const response = id ? await getPost(id) : await listAllPosts({ userId });
      setPosts(response.data);
      console.log(response);
    };

    request();
  }, []);

  if (!posts) return <p>Não há poste a ser exibido</p>;
  if (id) return <p>{posts.title}</p>;

  return posts?.map((post) => <p>{post.title}</p>);
}
