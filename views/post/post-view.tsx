"use client"
import { assignDate } from '@/util'
import styles from './post-card.module.css'
import { PostProp } from '@/types'

export function PostView({ post }: PostProp) {
  const assignedDate = assignDate(post.id ?? 1)

  return <article className={styles.article} >
    <h2>{post.title}</h2>
    <p className={styles.date}>{assignedDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
    <p className={styles.body}>{post.body}</p>
  </article>
}
