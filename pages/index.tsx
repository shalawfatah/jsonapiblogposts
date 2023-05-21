import Button from "@/components/Button";
import SingleRow from "@/components/SingleRow";
import Table from "@/components/Table";
import { HomeProps, Post } from "@/types/Types";
import Link from "next/link";
import { useState } from "react";

export default function Home({ data, totalCount }: HomeProps) {
  const [loadedData, setLoadedData] = useState(data);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1); // Current page

  const loadMoreData = async () => {
    setIsLoading(true);
    const API_URL = 'https://jsonplaceholder.typicode.com/posts';
    const nextPage = page + 1; // Calculate the next page
    const res = await fetch(`${API_URL}?_limit=5&_page=${nextPage}`); // Fetch next page of data
    const newData: Post[] = await res.json();

    setLoadedData([...loadedData, ...newData]);
    setPage(nextPage); // Update the current page
    setIsLoading(false);
  };

  return (
    <>
    <Table>
          {loadedData.map(item => (
              <SingleRow item={item} />
          ))}
      </Table>
      <Button isLoading={isLoading} loadMoreData={loadMoreData} />
        </>
  );
}

export async function getServerSideProps() {
  const API_URL = 'https://jsonplaceholder.typicode.com/posts';
  const res = await fetch(`${API_URL}?_limit=5&_page=1`); // Fetch the first page of data
  const data: Post[] = await res.json();

  const totalCountRes = await fetch(API_URL);
  const totalCount = Number(totalCountRes.headers.get('x-total-count'));

  return { props: { data, totalCount } };
}
