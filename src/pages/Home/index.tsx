import { useCallback, useEffect, useState } from 'react'
import { api } from '../../lib/axios'
import { PostCard, PostCardProps } from './components/PostCard'
import { Profile, ProfileProps } from './components/Profile'
import {
  HomeContainer,
  MainContainer,
  SearchContent,
  SearchPostsInput,
} from './styles'
import { NavLink } from 'react-router-dom'

export function Home() {
  const [user, setUser] = useState<ProfileProps>({} as ProfileProps)
  const [issues, setIssues] = useState<PostCardProps[]>([] as PostCardProps[])

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

  const loadIssues = useCallback(async (query?: string) => {
    const issuestest = await api.get('/search/issues', {
      params: {
        q: `${query || ''}%20repo:rocketseat-education/reactjs-github-blog-challenge`,
      },
    })
    const issuesInfos = issuestest.data.items

    const issuesInfosFiltred = issuesInfos.map((issue: any) => {
      return {
        id: issue.id,
        title: issue.title,
        postedAt: issue.createdAt,
        description: issue.body,
      }
    })

    setIssues(issuesInfosFiltred)
  }, [])

  useEffect(() => {
    loadUser()
    loadIssues()
  }, [loadUser, loadIssues])

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      loadIssues(event.currentTarget.value)
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
