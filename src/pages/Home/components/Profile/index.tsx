import {
  BioAndTagsProfileInfos,
  NameAndLinkProfileInfos,
  ProfileContainer,
  ProfileInfosContainer,
  TagsProfileInfos,
} from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faArrowUpRightFromSquare,
  faBuilding,
  faUserGroup,
} from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export interface ProfileProps {
  avatarUrl: string
  name: string
  linkUrl: string
  description?: string
  profileName: string
  work?: string
  followers: string
}

export function Profile({
  avatarUrl,
  name,
  linkUrl,
  description = '',
  profileName,
  work = 'Não possui',
  followers,
}: ProfileProps) {
  return (
    <ProfileContainer>
      <img src={avatarUrl} alt="" className="avatar" />
      <ProfileInfosContainer>
        <NameAndLinkProfileInfos>
          <div className="nameAndLinkContent ">
            <h3>{name}</h3>
          </div>
          <a href={linkUrl} target="_blank" rel="noreferrer">
            <span>GITHUB</span>
            <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          </a>
        </NameAndLinkProfileInfos>
        <BioAndTagsProfileInfos>
          <p>{description}</p>

          <TagsProfileInfos>
            <div className="tagContent">
              <FontAwesomeIcon icon={faGithub} />
              <span>{profileName}</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faBuilding} />
              <span>{work}</span>
            </div>
            <div className="tagContent">
              <FontAwesomeIcon icon={faUserGroup} />
              <span>{followers} seguidores</span>
            </div>
          </TagsProfileInfos>
        </BioAndTagsProfileInfos>
      </ProfileInfosContainer>
    </ProfileContainer>
  )
}
