import { useRouter } from "next/router";
import { useEffect, useState } from "react";

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DetailProps {
  post: Post;
}

export default function DetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);

  useEffect(() => {
    if (id) {
      fetchPost(id);
    }
  }, [id]);

  async function fetchPost(id: string) {
    const API_URL = "https://jsonplaceholder.typicode.com/posts";
    const res = await fetch(`${API_URL}/${id}`);
    const post: Post = await res.json();
    setPost(post);
  }

  if (!post) {
    return <div>Loading...</div>;
  }

  return (
    <main className="bg-[#FEC128] text-white">
      <table className="table-auto">
        <thead className="bg-[#26bfa1] text-white w-auto">
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
            <tr className="">
                <td className="border-4 border-[#FEC128] p-2 bg-white text-black">{post.id}</td>
                <td className="border-4 border-[#FEC128] p-2 bg-white text-black">{post.title}</td>
                <td className="border-4 border-[#FEC128] p-2 bg-white text-black">{post.body}</td>
            </tr>
        </tbody>
      </table>
    </main>
  );
}

export async function getServerSideProps({ query }) {
  const { id } = query;
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${API_URL}/${id}`);
  const post: Post = await res.json();
  return { props: { post } };
}
