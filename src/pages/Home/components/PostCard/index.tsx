import { resumetText } from '../../../../utils/resumeDescription'
import { PostCardContainer } from './styles'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'
export interface PostCardProps {
  id?: number
  number?: number
  title: string
  postedAt: string
  description: string
}

export function PostCard({ title, postedAt, description }: PostCardProps) {
  const publishTime = formatDistanceToNow(new Date(postedAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostCardContainer>
      <header className="headerContent">
        <h2>{title}</h2>
        <span>{publishTime}</span>
      </header>
      <p>{resumetText(description, 200)}</p>
    </PostCardContainer>
  )
}
