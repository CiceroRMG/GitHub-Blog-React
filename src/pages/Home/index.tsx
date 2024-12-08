import { PostCard, PostCardProps } from './components/PostCard'
import { Profile, ProfileProps } from './components/Profile'
import {
  HomeContainer,
  MainContainer,
  SearchContent,
  SearchPostsInput,
} from './styles'

const profileTest: ProfileProps = {
  avatarUrl: 'https://github.com/ciceroRMG.png',
  name: 'Cícero Gomes',
  linkUrl: 'https://github.com/ciceroRMG',
  description: 'Programador full stack',
  profileName: 'ciceroRMG',
  work: 'LabTIC',
  followers: '203',
}

const cardTeste: PostCardProps = {
  title: 'JavaScript data types and data structures',
  postedAt: '3',
  description:
    'Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn',
}

export function Home() {
  return (
    <HomeContainer>
      <Profile {...profileTest} />

      <MainContainer>
        <SearchContent>
          <div className="titleContent">
            <h4>Publicações</h4>
            <span>6 publicações</span>
          </div>

          <SearchPostsInput placeholder="Buscar Conteúdo" />
        </SearchContent>
        <ul className="postCardList">
          <PostCard {...cardTeste} />
          <PostCard {...cardTeste} />
          <PostCard {...cardTeste} />
        </ul>
      </MainContainer>
    </HomeContainer>
  )
}
