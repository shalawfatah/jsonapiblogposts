import SingleRow from "@/components/SingleRow";
import Table from "@/components/Table";
import { Post, Query } from "@/types/Types";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

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
      <Table>
        <SingleRow item={post} />
      </Table>
    </main>
  );
}

export async function getServerSideProps({ query }: {query: Query}) {
  const { id } = query;
  const API_URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(`${API_URL}/${id}`);
  const post: Post = await res.json();
  return { props: { post } };
}
