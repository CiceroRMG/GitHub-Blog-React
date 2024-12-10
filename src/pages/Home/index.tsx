import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard } from './components/PostCard'
import { Profile, ProfileProps } from './components/Profile'
import {
  HomeContainer,
  MainContainer,
  SearchContent,
  SearchPostsInput,
} from './styles'
import { NavLink } from 'react-router-dom'
import { useIssuesContext } from '../../contexts/IssuesContext'

export function Home() {
  const [user, setUser] = useState<ProfileProps>({} as ProfileProps)
  const { issues, issueQuery } = useIssuesContext()

  const loadUser = useCallback(async () => {
    const userData = await api.get('/users/barney')

    const userInfos = {
      avatarUrl: userData.data.html_url + '.png',
      name: userData.data.name,
      linkUrl: userData.data.html_url,
      description: userData.data.bio,
      profileName: userData.data.login,
      work: userData.data.company,
      followers: userData.data.followers,
    }

    setUser(userInfos)
  }, [])

  useEffect(() => {
    loadUser()
  }, [loadUser])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      issueQuery(event.currentTarget.value)
    }
  }

  return (
    <HomeContainer>
      <Profile {...user} />

      <MainContainer>
        <SearchContent>
          <div className="titleContent">
            <h4>Publicações</h4>
            <span>6 publicações</span>
          </div>

          <SearchPostsInput
            placeholder="Buscar Conteúdo"
            onKeyDown={handleKeyDown}
          />
        </SearchContent>
        <ul className="postCardList">
          {issues.map((issue) => {
            return (
              <NavLink
                to={`/post?id=${issue.id}`}
                key={issue.id}
                className={'postLink'}
              >
                <PostCard {...issue} />
              </NavLink>
            )
          })}
        </ul>
      </MainContainer>
    </HomeContainer>
  )
}
