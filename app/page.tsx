"use client"
import { useState, useEffect } from "react";
import axios from 'axios'

import { HomeView } from "@/views";
import { assignDatesAndSortPosts } from "@/util";
import { Post } from "@/types";


export default function Home() {

  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
        const postsData = response.data;

        const sortedPosts = assignDatesAndSortPosts(postsData)
        setPosts(sortedPosts);
      } catch (err) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);


  if (loading) {
    return <p>Loading...</p>
  }
  if (error) {
    return <p>{error}</p>
  }
  return (
    <main>
      <HomeView posts={posts}></HomeView>
    </main>
  );
}
