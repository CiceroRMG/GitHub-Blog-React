import { PostCardContainer } from './styles'

export interface PostCardProps {
  title: string
  postedAt: string
  description: string
}

export function PostCard({ title, postedAt, description }: PostCardProps) {
  return (
    <PostCardContainer>
      <header className="headerContent">
        <h2>{title}</h2>
        <span>Há {postedAt} dia</span>
      </header>
      <p>{description}</p>
    </PostCardContainer>
  )
}
