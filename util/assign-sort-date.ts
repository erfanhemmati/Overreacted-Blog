import { Post } from "@/types";

export function assignDatesAndSortPosts(posts: Post[]) {
  const postsWithDates = posts.map((post: Post) => {
    const postDate = assignDate(post.id)
    return { ...post, date: postDate };
  });
  postsWithDates.sort((a: any, b: any) => b.date - a.date);
  return postsWithDates;
};

export function assignDate(id: number): Date {
  const today = new Date();
  const daysAgo = id - 1;
  const postDate = new Date(today);
  postDate.setDate(today.getDate() - daysAgo);
  return postDate;
}
