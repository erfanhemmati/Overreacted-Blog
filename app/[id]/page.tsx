"use client"
import { useState, useEffect } from "react";
import axios from "axios";
import { PostView } from "@/views"
import { Post } from "@/types";

export default function PostPage({ params }: { params: { id: string } }) {
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts/' + params.id);
        setPost(response.data);
      } catch (err) {
        setError('Error fetching posts');
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);



  return <>
    {post &&
      <PostView post={post}>
      </PostView>}

  </>
}
