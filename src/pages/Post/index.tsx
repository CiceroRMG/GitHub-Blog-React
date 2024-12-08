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
import { NavLink } from 'react-router-dom'

export function Post() {
  return (
    <PostContainer>
      <PostInfoContainer>
        <HeadContent>
          <NavLink to={'/'} className="backBtn">
            <FontAwesomeIcon icon={faChevronLeft} />
            <span>Voltar</span>
          </NavLink>
          <a href="" className="linkToGithub">
            <span>Ver no github </span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </HeadContent>
        <TitleAndTagsContent>
          <h1>JavaScript data types and data structures</h1>
          <TagsPostInfos>
            <div className="tagContent">
              <FontAwesomeIcon icon={faGithub} />
              <span>nome</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faCalendarDay} />
              <span>Há 1 dia</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faComment} />
              <span>5 comentários</span>
            </div>
          </TagsPostInfos>
        </TitleAndTagsContent>
      </PostInfoContainer>
      <PostDescriptionContainer>
        <section>
          Programming languages all have built-in data structures, but these
          often differ from one language to another. This article attempts to
          list the built-in data structures available in JavaScript and what
          properties they have. These can be used to build other data
          structures. Wherever possible, comparisons with other languages are
          drawn. Dynamic typing JavaScript is a loosely typed and dynamic
          language. Variables in JavaScript are not directly associated with any
          particular value type, and any variable can be assigned (and
          re-assigned) values of all types:
        </section>
      </PostDescriptionContainer>
    </PostContainer>
  )
}
