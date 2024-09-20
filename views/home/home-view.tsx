import { PostCard } from "@/components";
import Link from "next/link";
import styles from "./home-view.module.css"
import { PostListProp } from "@/types";


export function HomeView({ posts }: PostListProp) {

  return <div className={styles.posts}>
    {posts.map((post, index) => <Link href={`/${post.id}`} key={post.id}><PostCard post={post} ></PostCard ></Link >)
    }
  </div>
}
