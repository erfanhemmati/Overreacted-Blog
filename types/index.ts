import { MouseEventHandler } from "react"

export type Post = {
  id: number
  title: string
  date?: Date
  userId?: string
  body: string
}

export type PostListProp = {
  posts: Post[]
}

export type PostProp = {
  post: Post
}

export type PostCardProps = {
  post: Post
  titleColor?: string
}
export type SwitchProps = { handleChange: MouseEventHandler<HTMLButtonElement>, isChecked: boolean }
