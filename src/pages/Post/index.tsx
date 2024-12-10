import { faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faArrowUpRightFromSquare,
  faCalendarDay,
  faChevronLeft,
  faComment,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  HeadContent,
  PostContainer,
  PostDescriptionContainer,
  PostInfoContainer,
  TagsPostInfos,
  TitleAndTagsContent,
} from './styles'
import { NavLink, useLocation } from 'react-router-dom'
import { useIssuesContext } from '../../contexts/IssuesContext'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export function Post() {
  const { issues } = useIssuesContext()

  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const id = Number(queryParams.get('id'))

  const getIssueById = () => {
    const issue = issues.filter((issue) => {
      return issue.id === id
    })

    return issue[0]
  }

  const selectedIssue = getIssueById()

  const publishTime = formatDistanceToNow(new Date(selectedIssue.postedAt), {
    addSuffix: true,
    locale: ptBR,
  })

  return (
    <PostContainer>
      <PostInfoContainer>
        <HeadContent>
          <NavLink to={'/'} className="backBtn">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </NavLink>
          <a
            href={selectedIssue.url ? selectedIssue.url : ''}
            className="linkToGithub"
          >
            <span>Ver no github </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeadContent>
        <TitleAndTagsContent>
          <h1>{selectedIssue.title}</h1>
          <TagsPostInfos>
            <div className="tagContent">
              <FontAwesomeIcon icon={faGithub} />
              <span>{selectedIssue.userOwner}</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>{publishTime}</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faComment} />
              <span>{selectedIssue.commentsQuantity} comentários</span>
            </div>
          </TagsPostInfos>
        </TitleAndTagsContent>
      </PostInfoContainer>
      <PostDescriptionContainer>
        <section>
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {selectedIssue.description}
          </ReactMarkdown>
        </section>
      </PostDescriptionContainer>
    </PostContainer>
  )
}
