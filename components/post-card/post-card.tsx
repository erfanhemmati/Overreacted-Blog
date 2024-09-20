import { PostCardProps, PostProp } from '@/types'
import styles from './post-card.module.css'

export function PostCard({ post, titleColor }: PostCardProps) {
  return <article className={styles.article} >
    <h2 className={styles.title}>{post.title}</h2>
    <p className={styles.date}>{post.date?.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p className={styles.body}>{post.body}</p>
  </article>
}
