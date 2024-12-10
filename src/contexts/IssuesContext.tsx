import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react'
import { api } from '../lib/axios'

interface IssuesProviderProps {
  children: ReactNode
}

export interface IssuesProps {
  id?: number
  number?: number
  title: string
  postedAt: string
  description: string
  userOwner: string
  commentsQuantity: number
  url: string
}

interface IssuesContextType {
  issues: IssuesProps[]
  issueQuery: (query: string) => void
}

export const IssuesContext = createContext({} as IssuesContextType)

export function IssuesProvider({ children }: IssuesProviderProps) {
  const [issues, setIssues] = useState<IssuesProps[]>([] as IssuesProps[])

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
        number: issue.number,
        title: issue.title,
        postedAt: issue.created_at,
        description: issue.body,
        userOwner: issue.user.login,
        commentsQuantity: issue.comments,
        url: issue.html_url,
      }
    })

    setIssues(issuesInfosFiltred)
  }, [])

  useEffect(() => {
    loadIssues()
  }, [loadIssues])

  function issueQuery(query: string) {
    loadIssues(query)
  }

  return (
    <IssuesContext.Provider value={{ issues, issueQuery }}>
      {children}
    </IssuesContext.Provider>
  )
}

export function useIssuesContext() {
  return useContext(IssuesContext)
}
